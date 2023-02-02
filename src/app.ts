import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
// import cors from 'cors';
import appRoot from 'app-root-path';
import tracer from 'cls-rtracer';
import context from 'express-http-context';

import { env } from '@/env';

import * as Api from '@/app.router';

import logger from '@/lib/logger';
import * as mysql from '@/lib/mysql';

import scheduler from '@/scheduler';

export const app = express();

/**
 * TODO: 아이들의 졸업 기능을 만들어야 함.
 * 다만, 초등부 졸업식과 중고등부의 졸업식 날짜가 정해진게 아니라서 스케줄러로 처리하기 힘듬.
 * 따라서 이 부분은 따로 관리자를 만들어서 설정이 필요함.
 */
(async function() {
    await new scheduler().studentAge();
}());

app.use(express.static(path.join(appRoot.path, 'public')));
app.use(cookieParser());

// 각 요청의 최대 사이즈를 지정해 주는 부분이다.
app.use(express.urlencoded({ extended: true })); // parameterLimit을 줘서 최대 파라미터 개수를 지정할 수도 있다.
app.use(express.json({ limit: '10mb' }));
app.use(express.raw({ limit: '10mb' }));

// 지금은 Web과 Server 통신간 CORS가 걸릴일이 없음.
// function getOrigins() {
//     const origins = [env.app.web.url];
//     if (env.app.dev.web.url) {
//         origins.push(env.app.dev.web.url);
//     }
//     return origins;
// }

// // https://1004lucifer.blogspot.com/2019/04/axios-response-headers-content.html
// app.use(cors( {
//     origin: getOrigins(),
//     exposedHeaders: ['Content-Disposition'],
//     credentials: true
// }));

app.use(tracer.expressMiddleware());
app.use(context.middleware);
app.use((req, res, next) => {
    const { method, url, body, params, query, cookies } = req;

    logger.log(`[${method}] ${url} body:${JSON.stringify(body)} params:${JSON.stringify(params)} query: ${JSON.stringify(query)} cookie:${JSON.stringify(cookies)}`);
    logger.req(req);
    next();
});

app.use(Api.path, Api.router);
app.listen(env.app.port, async function appMain() {
    logger.init({
        log: true,
        sql: true,
        net: true,
        debug: !env.mode.prod,
        error: true,
        fatal: true,
        console: false,
    });

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { build, version } = require('../package.json');
    logger.log(`[ v${version}, ${env.mode.value} ] =========================================`);

    // await mongodb.connect();
    await mysql.connect();

    logger.log(`----------------------------------------------`);
    logger.log(`🚀 App listening on the port ${env.app.port}`);
    logger.log(`==============================================`);
    console.log(`[ v${build || version}, ${env.mode.value} ] =================================== READY !!!`);
});
