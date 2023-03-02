# school-manage program
이 [프로젝트](https://dev.school.jangwi.link)는 기존의 출석부 프로젝트를 보완하기 위해서 제작된 프로젝트입니다.

[기존 프로젝트 내역...](https://github.com/dc-choi/Attendance)

## 시스템 구성도
![시스템 구성도](https://github.com/dc-choi/school_manage_back/blob/main/img/v2.0.0%20work%20flow.png)

## 개발기간
22.02.19 ~ 현재 (첫 배포는 기획한지 2주만에 진행)

지금도 계속 유지보수중입니다.

## 프로젝트 구조
```
public // 정적 파일을 담아두는 폴더
 ├── css // 공통 css
 ├── img // 웹 페이지에 필요한 이미지 파일
 └── *.html // 정적 페이지
src // 백엔드 소스코드 작성
 ├── app.ts // App Root
 ├── env.ts // 환경변수를 객체로서 사용하기 위한 file
 ├── app.router.ts // 각각 독립적인 요청과 API router를 합쳐주는 router
 ├── types // TS 타입 지정
 ├── common // API 공통 모듈
 ├── lib // 프로젝트 구성 모듈
 ├── models // Database Entity's
 └── api // api's
        ├── api.router.ts // API router
        └── functions folder (기능별 분류)
                ├── function router // 기능에 대한 router
                ├── function controller // router의 요청, 응답과 예외처리
                ├── function service // 기능에 대한 비즈니스 로직
                └── function repository // 기능에 필요한 Entity에 접근하는 로직
 test/integration // Api에 독립적인 테스트를 작성
 └── *.test.ts
```

## ERD
![ERD](https://github.com/dc-choi/school_manage_back/blob/main/img/v2.0.0%20ERD.JPG)

논리적 설계만 이렇게 하였고, 물리적 설계는 관계를 끊어놓았습니다. 사용자의 요구사항이 계속 바뀌므로 유연한 구조를 가져야겠다고 생각했습니다.

## 주요 기능
- 로그인: 각 계정별로 로그인하여 계정에 속한 그룹을 관리할 수 있습니다.
- 그룹 리스트: 주일학교 학생들이 속한 그룹을 보고, 추가하고, 수정하고, 삭제할 수 있습니다.
- 학생 명단: 주일학교 학생들의 명단을 보고, 추가하고, 수정하고, 삭제할 수 있습니다.
- 출석부: 주일학교 학생들의 출석을 보고, 추가하고, 수정하고, 삭제할 수 있습니다.
- 통계: 각 계정별 우수한 학생들의 출석 현황을 간단하게 확인 할 수 있습니다.

<!-- ## 출석부 프로그램 초기 화면 구성
[오븐을 이용한 프로토타입](https://ovenapp.io/view/uUt1nneSOrTuih71pV814CGUcr6lRVKP/I6IRP) 

## 만들게 된 계기
주일학교 시스템상 매년 아이들의 출석을 기록해야 했고, 그에 따라 기존 엑셀로 된 출석부로는 매년 올해의 토요일, 일요일에 해당되는 부분을 일일히 알아보고 적어야하는 점이 너무 불편했습니다.

또한 출석 관리가 재대로 되지 않는 문제가 있었습니다. 파일을 가지고 있는 한명이 나올 수 없는 경우에는 다른 사람이 출석 체크를 하게되면 재대로 출석관리가 되지 않았습니다.

아이들을 돌보는 것도 힘든 와중에 출석관리까지 매년 따로 신경을 써야하는 점이 너무 번거로웠습니다.

어떻게 해결할 수 있을까? 고민중, 내가 가지고 있는 웹 프로그래밍 지식이라면 중고등부의 시스템을 어느 정도 전산화할 수 있지 않을까? 생각을 하게 되었습니다.

그래서 현 주일학교 시스템 중 하나인 출석부 프로그램을 만들게 되었고, 현재는 주일학교 시스템의 전산화를 목표로 하고 있습니다.

결론적으로 기존의 중고등부의 문제점은 다음과 같습니다.

1. 매년 엑셀로 된 출석부를 다시 만들어야 해서, 아이들의 정보를 다시 입력하고, 새로운 아이들의 정보를 입력하는 데 많은 어려움이 있었습니다.
2. 매년 출석 상을 보상해야 하는데, 기존의 출석부로는 아이들의 출석 통계를 내는 게 어려웠습니다.
3. 엑셀로 된 출석부를 가지고 있지않으면, 출석체크가 불가능합니다.
4. 파일로 관리하기 때문에 각자 가지고있는 출석 현황이 전부 달랐던 문제가 있었습니다.

출석부 프로그램을 제작함으로써, 개선되는 점은 다음과 같습니다.

1. 매년 출석부를 다시 만들지 않아도, 한번만 아이들의 정보를 등록하면 졸업하기 전까지 정보를 계속 유지할 수 있습니다.
2. 출석부 프로그램을 누구나 언제든 출석사항을 기록하고 확인 할 수 있습니다.
3. 회의록을 통해 확인해야하는 출석현황과 다르게 직관적으로 확인이 가능합니다.
4. 출석 상에 대한 통계를 낼때, 간편하게 산출할 수 있습니다.

## 느낀점
<details>
<summary> 22년 1분기 느낀점 </summary>

22.03.02: AWS를 이용해서 처음 배포를 진행했었는데 22년 3월 1일 22시부터 배포를 시작해서 다음날 02시까지 총 4시간의 배포를 진행했었습니다. 1.0.0 버전은 정말 간단하게 시작을 했었지만, 그래도 배포라는것이 정말 쉽지않고 내가 생각한만큼 잘 되지않는다는것을 배웠습니다. 다음에 배포를 진행할 경우 좀 더 테스트를 하고 계획을 세우고 배포를 진행하고 싶습니다. [참고링크: [Node.js] EC2에 Express APP 배포하기](https://dc-choi.tistory.com/50)

22.03.03: 페이징 버그 및 그룹 추가, 삭제, 수정 기능을 추가했습니다. DB 스키마를 변경함으로써, PM2로 매니징 하던 웹 서버를 종료 후 EC2에 설치된 Mysql Server에 새 DB 스키마를 적용하고 웹 서버에는 바뀐 소스코드를 적용한 다음 다시 시작을 하였습니다. 수동으로 서비스를 중지하고 배포를 진행했던 점이 좀 아쉬웠습니다. 이 프로젝트에 CI/CD를 적용시키고 싶습니다.

</details>

<details>
<summary> 22년 2분기 느낀점 </summary>

22.06.08: 오랜만에 버그 수정을 하였습니다. 10명 이상의 그룹에서 출석 내역을 저장하게 되면 페이로드가 1000개가 넘어, 요청이 완료되지 않았습니다. 기존 요청에서 입력한 칸의 데이터를 입력하는 API와 입력하지 않은 칸의 데이터를 입력하는 API를 나눴습니다. HTTP에 대해서 더 공부를 해야할 거 같습니다.

22.06.18: 부트스트랩을 이용해서 프론트의 디자인을 수정했습니다. 좀 더 보기 이쁜 화면이 사용자들에게 친숙하게 와닿을 것이라고 생각했고, 사람들에게 물어본 결과 수정이 필요하다고 판단하여 수정을 진행했습니다. 다음에는 전문적으로 수정할 수 있는 사람과 협업을 해야할거같습니다.

</details>

<details>
<summary> 22년 3분기 느낀점 </summary>

22.07.12: Nginx를 사용해서 리버스 프록시를 적용하였고, HTTPS까지 적용하였습니다. 또한, 도메인을 적용하여 기존의 알아보기 힘든 IP주소대신 도메인으로 접속할 수 있게 되었습니다. 기존의 외우기 힘들었던 IP주소 대신 도메인 주소로 접속이 가능하게 되어서 사용자들이 좋아했었습니다. [참고링크: [Deploy] Nginx 설치 및 HTTPS 적용](https://dc-choi.tistory.com/68)

22.07.19: 좀 더 가벼운 패키지 매니저인 Yarn을 도입하였습니다. 차이점으로는 조금 더 서버를 시작하는게 더 빨라진거같습니다. 또한, 자동으로 전화번호 Form을 완성하도록 수정하였습니다.

22.07.30: 출석부 매달 마지막 날이 그 전달의 마지막날을 찍고있는 버그를 확인하고 수정했습니다. 테스트가 정말 중요한거같습니다. 여러번 확인한다는것은 언제나 옳은거 같습니다.

</details>

<details>
<summary> 22년 4분기 느낀점 </summary>

22.09.06: 기존 EC2에서 Lightsail로 변경하였습니다. 변경의 가장 큰 이유는 감당할 수 없는 요금 때문이였습니다. 또한 OS도 우분투에서 아마존 리눅스로 변경하였습니다. AWS에서는 아마존 리눅스를 사용하는 것이 유지보수에 도움이 된다는 조언을 들었기 때문입니다.

22.09.28: v2.0.0으로 변경하였습니다. 기존의 소스코드는 너무 유지보수가 어려워서 아예 버전을 올려서 유지보수를 진행하게 되었습니다. 클린 아키텍처와 클린 코드에 대해서 생각하게 되었고, 좋은 구조란 사용자의 요구사항에 따라 유연하게 변경될 수 있는 구조라고 생각했습니다. 계속해서 유지보수를 열심히 해야겠습니다. [버전 관리 규칙에 대해서...](https://dc-choi.tistory.com/62)

22.09.29: 출석부가 재대로 입력이 되지 않는 버그가 발생했습니다. 또한 413 에러를 만났는데, 요청의 기본 설정을 변경해도 그대로 에러가 나는 것을 확인했습니다. 확인해본 결과 jQuery AJAX의 기본 content-type이 x-www-form-urlencoded로 전송하는 것을 확인하였습니다. Axios의 기본 content-type이 application/json인 것을 생각하면, 생각지도 못한 오류를 만났던 거 같습니다. REST API를 사용하는 경우에는 application/json로만 데이터를 주게 받게 되는데, 이 부분을 한번 더 상기할 수 있었고, HTTP에 대해서 다시 한번 공부를 해야겠다고 결심했습니다.

22.09.30: 출석부 버그를 고치면서 리펙터링을 진행했습니다. 기존의 저장함수 하나에서 모든 처리를 진행하던 부분을 함수를 쪼개서 입력하였습니다. 가독성이 더 좋도록 수정하였고, 기존의 alert도 두번이 나타나는 로직을 한번만 나타나도록 해야겠습니다. alert가 뜨는 동안 사용자가 기다려야해서 프론트에 스피닝 기능을 추가할 예정입니다.

22.11.28: 사용자들의 피드백을 들었고, 요구사항을 추가한 후, 천천히 수정해가려고 했습니다. 앞으로 요구사항이 더 많아질 것을 고려하여 기존에 물리적 스키마의 관계가 이어져있던 부분을 없앴습니다. 논리적으로는 남겨두고 있고, 물리적으로만 없애서 좀 더 유연한 구조를 가지도록 하였습니다. 로그인 화면도 불편하다고 하여, 최대한 간편하게 엔터키를 누르면 로그인이 되도록 수정하였고, 출석 입력시 알림창이 자꾸 뜨는 불편한 부분을 개선했습니다. 스피닝 기능을 추가해서 저장이 되고있는 상태로 보이게 하였고, 저장중일때는 다른 입력을 할 수 없도록 수정했습니다. 사용자를 좀 더 배려하는 프로그램을 만들도록 노력해야겠다는 생각이 들었습니다. 이를 위해서는 유연하게 변경될 수 있는 구조를 가져가는게 핵심이라고 생각이 들었습니다.

22.11.29 : 엔터키를 여러번 누르면 API 호출도 여러번 되는 현상을 발견했습니다. 사용자가 입력이 느리다고 엔터를 여러번 누르는 경우를 생각해서 이에 이벤트가 한번 발생하면 여러번 API 호출을 할 수 없도록 수정하였습니다. 좀 더 사용자 중심적으로 생각하려고 했습니다. 출석입력 테이블 안에서 탭을 누르면 다음 학생의 출석이 입력되도록 수정하였습니다. tabindex를 사용해서 키보드로 입력하기 더 간단하게 하였습니다. 이 역시 사용자 입장에서 생각해보았습니다.

22.12.01 : 인가를 해주는 부분을 파이프라인식으로 처리하여 유지보수성을 높였습니다. 사용자의 피드백을 들어서 요구사항을 처리하다보면 언젠가는 authentication/authorization에 관련된 부분도 수정을 해야하는데, 그 부분이 하나의 함수에서 여러 동작을 하게되는 경우 유지보수가 어렵다고 생각했습니다. 출석부에 반응형을 추가하고 table태그의 양식을 맞춰서 pc, 모바일에서 보기좋은 화면을 제작했습니다. 테이블의 이름 고정하는 부분에서 어려움을 겪었는데 회사 동료에게 물어봐서 해결했었고 너무 혼자서 고민하는 시간이 길어지면 좋지 않다는걸 알았습니다. 그래서 프론트엔드 개발자도 구해서 같이 해보고싶습니다. 프론트 문제를 해결해줄뿐더러 같이 프로그램 개발에 대해서도 상의하고 싶습니다.

22.12.02 : 출석부의 날짜가 가운데 정렬이 되지 않은 것을 확인하고 가운데 정렬이 되도록 수정했습니다. TypeScript답게 코드에 타입을 입혀야할 필요성을 느껴서 타입을 적용했고 리펙터링을 진행하여 학생 명단을 내려줄 때 효율적인 로직을 가지도록 수정했습니다. 타입을 적용하여 개발상 오류가 발생하면 바로 확인할 수 있도록 하였습니다. DTO를 더 적용하면 좀 더 좋은 코드가 될거라 생각합니다. 학생명단을 내려줄때는 기존에는 object안에 number가 들어가서 필요없는 로직을 추가해서 처리해주고 있었는데, 바로 number를 넘겨주도록 변경했습니다.

22.12.05 : 전체적으로 리팩터링을 진행하면서 많은 수정사항이 있었습니다. DTO를 사용해서 클라이언트와 서버의 결합도를 줄였습니다. DTO를 도입하여 클라이언트가 Entity에 의존하는 것이 아닌, DTO에 의존하도록 변경했습니다. 그것이 서버의 구조가 변경되어도 클라이언트에 덜 영향이 가는 구조라고 생각해서 적용하게 되었습니다. 물론 전부 다 DTO를 사용하는 것이 아닌, DTO가 필요하다고 판단되는 출석과 학생부분에만 DTO를 적용했습니다. 나머지 부분에는 interface를 사용해서 DTO처럼 사용합니다. 개인적인 생각으로 복잡하지않은 이상, interface를 사용하는게 이상적이라고 생각합니다. DTO를 선언시에는 Builder Patten을 사용해서 가독성이 좋게 코드를 짰습니다. 그리고 출석입력의 API가 RESTful 하지않아 그 부분을 다시 수정하였습니다. 이제 하나의 API로 서버에서 분기해서 처리합니다. 더욱 더 가독성이 좋고 효율적인 코드를 작성했습니다 그리고 TypeScript의 타입을 적용하기 위해서 any를 사용하던 부분을 거의 모든부분을 개선했습니다. 타입 안정성이 더 좋은 코드가 되었습니다. 출석 저장부분을 리팩터링 했습니다. 효율적이지 않은 로직을 수정해서 개선했습니다. 이번 패치에서 좋은 코드에 대해서 한번 더 공부하게 되었습니다. 개인적으로 이번 경험을 통해 조금 더 성장했다는 것을 느꼈습니다.

22.12.08 : 미루고 미루던 테스트 코드 작성을 했습니다. 확실히 테스트 코드를 작성하니, 수동으로 테스트를 하지않고 간단하게 테스트를 할 수 있어서 좋았습니다. 성능을 생각해서 많이 사용하고있는 jest가 아닌, mocha, chai 조합으로 테스트를 작성했습니다. jest가 더 편리하긴 하지만 테스트가 좀 더 오래걸린다는 단점이 있습니다. 테스트 성능이 느리면 개발 생산성이 저하된다는 걸 느꼈습니다. 그리고 테스트하기 안좋은 코드는 안좋은 코드라는 것을 깨달았습니다. POST /api/attendance부분의 테스트 코드를 작성하는데 큰 어려움이 있었습니다. 이런 코드를 지양해야할 거 같습니다... 그리고 Promise.all을 공부해서 브라우저에서 비동기로 요청을 보낼 수 있도록 수정했습니다. 좋은 개념을 배워서 성취감을 느꼈고, Promise.all을 Node.js에서는 어떻게 사용해야하는지 생각해야 할 거 같습니다. 마지막으로 README.md의 가독성이 너무 떨어지는것으로 판단되어서 Releases에만 패치내역을 추가하기로 했습니다.

</details>

23.01.05 : 23년도에 들어서 첫 커밋을 했습니다. 벌써 프로젝트를 운영한지 1년 가까이 되어 가고 있습니다. 그때에 비하면 많이 발전시킨거 같아 뿌듯합니다. 이번에는 예외처리가 장황해지는 것을 막고자, 요청값에 대한 검증 함수를 추가했습니다. 이 함수를 이용하면 더욱 더 가독성이 좋은 코드가 될 것으로 예상됩니다. 프로젝트를 진행할 때 지속적으로 클린 코드에 대해서 생각해야 할 거 같습니다.

23.01.06 : 프로젝트 구조에 대해서 다시 생각하게 되었습니다. common과 lib의 구분이 명확하지 않아서 정확하게 정의했습니다. common은 API에 대한 공통 모듈, lib는 프로젝트 구성 모듈로 사용해야 할 거 같습니다. 이에 몇가지 파일에 대한 수정을 진행했습니다. 그리고 스케줄러를 사용해서 아이들이 한살 먹으면 자동으로 아이들의 나이를 한살 증가시켜주는 기능을 추가 했습니다. 아이들의 나이는 초등부, 중고등부의 졸업식과 상관이 없기 때문에 아이들의 나이를 매년 1월 1일 00시 00분에 한살 먹도록 조정했습니다.

23.01.17 : 그동안 사용하던 무료 도메인을 쓰지않고 Route53를 사용하여 도메인을 구입 후, 도메인을 설정하였습니다. 도메인 관리를 편하게 하고싶었고 기존의 무료 도메인의 보안을 믿을 수 없었습니다.

23.02.02 : 타입스크립트의 절대경로를 설정하여, 모듈을 불러올 때 가독성을 높였습니다. 다른곳에서 모듈을 불러올 때 복잡한 상대경로를 사용하지 않고 절대 경로를 설정하니 더 편하게 불러올 수 있었습니다. 그리고 그동안 프로젝트를 진행하면서 이슈관리가 너무 힘들었습니다. Jira를 도입하여 이슈를 관리하고, 버전관리는 GitHub Releases를 사용하며, 문서화는 README.md에 할 계획입니다.

23.02.16: 불필요한 변수가 몇가지 보여서 그 부분을 수정하였고, Builder Pattern을 적용부분이 정확하게 적용되지 않아서 수정하였습니다. 현재 이슈를 관리하는 부분이 일치하지않아 다시 수정하였습니다. 그리고 급한 기능인 졸업, 종업 기능을 추가해서 입력하였습니다. 추후에 리팩터링이 필요해보입니다. 이슈 관리를 하니 해야할 일에 대해서 정확하게 알 수 있어서 좋은 거 같습니다. 얼른 시간을 내서 프로그램을 지속적으로 수정해야할 거 같습니다.

23.02.20: 오래동안 방치한 통계 부분의 화면을 개발 완료하였습니다. 원래 기획과는 조금 다르게 구현이 되었고, 이는 UX적인 측면을 더 고려해서 제작하였습니다. 사용자 중심적인 프로그램을 만들어야 겠다는 생각을 했습니다.
-->
