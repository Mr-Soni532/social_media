const express = require('express');
const controller = require('../controllers/posts.controller');
const authorization = require('../middleware/authorization.middleware');
const postsRouter = express.Router();

postsRouter.get('/',authorization,controller.fetch)
postsRouter.post('/add', authorization,controller.add)
postsRouter.patch('/update/:id', authorization,controller.update)
postsRouter.delete('/delete/:id', authorization,controller.delete)

module.exports = postsRouter;