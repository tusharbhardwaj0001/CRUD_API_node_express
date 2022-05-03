import express from 'express';
import { v4 as uuidv4 } from 'uuid';

import { createUser, deleteUser, getUser, getUserWithId, updateUser } from '../controlers/users.js';
const router = express.Router();

// let users = [];  //Empty users array 

// all routes in here starting with /users
router.get('/', getUser);

router.post('/', createUser);

router.get(`/:id` ,getUserWithId);

router.delete('/:id' , deleteUser);

router.patch('/:id', updateUser);


export default router;