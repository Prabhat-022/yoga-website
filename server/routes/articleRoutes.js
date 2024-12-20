import express from 'express'
import { getAllArticles, createArticle, deleteArticle, updateArticle, getMyArticles, getArticleById } from '../controllers/articles.js'

const router = express.Router()
router.route('/').get(getMyArticles);
router.route('/all').get(getAllArticles);
router.route('/create').post(createArticle);
router.route('/:id').put(updateArticle);
router.route('/:id').delete(deleteArticle);

export default router