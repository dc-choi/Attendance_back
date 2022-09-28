import { Router } from 'express';

import GroupController from './group.controller';

import AuthMiddleware from '../auth/auth.middleware'

export const path = '/group';
export const router = Router();

router.get('/', new AuthMiddleware().authorization, new GroupController().getGroups);
router.get('/:groupId', new AuthMiddleware().authorization, new GroupController().getGroup);

router.post('/', new AuthMiddleware().authorization, new GroupController().createGroup);
router.put('/:groupId', new AuthMiddleware().authorization, new GroupController().updateGroup);
router.delete('/:groupId', new AuthMiddleware().authorization, new GroupController().deleteGroup);