import express from 'express'
import { getAllArticles, createArticle, deleteArticle, updateArticle, getMyArticles, getArticleById } from '../controllers/articles.js'
import { upload } from '../middleware/multer.middleware.js';

const router = express.Router()

router.route('/').get(getMyArticles);
router.route('/all').get(getAllArticles);
router.route('/:id').put(updateArticle);
router.route('/:id').delete(deleteArticle);
router.route('/:id').get(getArticleById);


router.route('/create-article').post(
    upload.fields([
        { name: 'avatar', maxCount: 1 },
        { name: 'coverImage', maxCount: 1 },
    ]),
    createArticle);

export default router