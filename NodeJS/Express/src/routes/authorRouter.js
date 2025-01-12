const { Router } = require('express');
const { getAuthorById } = require('../controllers/authorController.js');

const authorRouter = Router();

authorRouter.get('/:authorId', getAuthorById);
