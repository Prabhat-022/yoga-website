import express from 'express'
import { Login, Logout, Register, updateProfile } from '../controllers/user.js'
import { upload } from '../middleware/multer.middleware.js';

const router = express.Router()


router.route('/register').post(
    upload.fields([
        { name: 'avatar', maxCount: 1 },
        { name: 'coverImage', maxCount: 1 },
    ]),
    Register);

router.route('/edit-profile/id').post(
    upload.fields([
        { name: 'avatar', maxCount: 1 },
        { name: 'coverImage', maxCount: 1 },
    ]),
    updateProfile);

router.route('/login').post(Login);
router.route('/logout').get(Logout);


export default router