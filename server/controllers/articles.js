import { Article } from "../model/article.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"


export const getMyArticles = async (req, res) => {
    try {
        const { title, subtitle, content } = req.body

        if (!title || !subtitle || !content) {
            return res.status(401).json({
                message: 'Please fill all input fields',
                success: false
            })
        }
        //search 
        const article = await Article.find({ title, subtitle, content })

        if (article) {
            return res.status(401).json({
                message: 'Already exist',
                success: false
            })
        }
        //create 
        const createArticle = await Article.create({ title, subtitle, content })

        return res.status(201).json({
            message: 'Article created successfully',
            success: true,
            data: createArticle
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Something went wrong',
            success: false
        })
    }

}

export const getAllArticles = async (req, res) => {
    try {
        const articles = await Article.find({})
        return res.status(201).json({
            message: 'Article fetched successfully',
            success: true,
            data: articles
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Something went wrong',
            success: false
        })
    }
}

export const getArticleById = async (req, res) => {
    try {
        const { id } = req.params
        const article = await Article.findById(id);

        if (!article) {
            return res.status(404).json({
                message: 'Article not found',
                success: false
            })
        }

        return res.status(201).json({
            message: 'Article fetched successfully',
            success: true,
            data: article
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Something went wrong',
            success: false
        })
    }
}

export const createArticle = async (req, res) => {

    try {
        const { title, subtitle, content } = req.body
        console.log('formdata', req.body)

        if (!title || !subtitle || !content) {
            return res.status(401).json({
                message: 'Please fill all input fields',
                success: false
            })
        }

        const avatarLocalPath = req.files?.avatar[0]?.path;

        let coverImageLocalPath;

        if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
            coverImageLocalPath = req.files.coverImage[0].path
        }

        if (!avatarLocalPath) {
            return res.status(401).json({
                message: 'Please upload your avatar',
                success: false
            })
        }

        const avatar = await uploadOnCloudinary(avatarLocalPath)
        console.log('url', avatar.response.url)

        const coverImage = await uploadOnCloudinary(coverImageLocalPath)

        if (!avatar) {
            return res.status(401).json({
                message: "Avatar file is required",
                success: false
            })
        }

        const article = await Article.create({
            title,
            subtitle,
            content,
            avatar: avatar.response.url,
            coverImage: coverImage?.response?.url || "",
        });

        return res.status(201).json({
            message: 'Article created successfully',
            success: true,
            data: article
        })
   

    } catch (error) {

        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong',
            success: false
        })
    }

}

export const updateArticle = async (req, res) => {
    try {
        const { id } = req.params
        const { title, subtitle, content } = req.body
        const article = await Article.findByIdAndUpdate(id, { title, subtitle, content }, { new: true })
        if (!article) {
            return res.status(404).json({
                message: 'Article not found',
                success: false
            })
        }
        return res.status(201).json({
            message: 'Article updated successfully',
            success: true,
            data: article
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Something went wrong',
            success: false
        })
    }
}

export const deleteArticle = async (req, res) => {
    try {
        const { id } = req.params
        const article = await Article.findByIdAndDelete(id)
        if (!article) {
            return res.status(404).json({
                message: 'Article not found',
                success: false
            })
        }
        return res.status(201).json({
            message: 'Article deleted successfully',
            success: true,
            data: article
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Something went wrong',
            success: false
        })
    }
}

//test code 
// res.status(201).json({
//     message: 'Article created successfully',
//     success: true,
// })