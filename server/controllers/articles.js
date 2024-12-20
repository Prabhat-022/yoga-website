import { Article } from "../model/article.model.js"


export const getMyArticles = async (req, res) => {
    const {titile, subtitle, body} = req.body

    if(!titile || !subtitle || !body){
        return res.status(401).json({
            message: 'Plz fill the all input field',
            success: false
        })
    }
    //search 
    const article = await Article.find({titile, subtitle, body})

    if(article){
        return res.status(401).json({
            message: 'Already exist',
            success: false
        })
    }
    //create 
    const createArticle = await Article.create({titile, subtitle, body})

    return res.status(201).json({
        message: 'Article created successfully',
        success: true,
        data: createArticle
    })
}

export const getAllArticles = async (req, res) => {
    const articles = await Article.find({})
    return res.status(201).json({
        message: 'Article fetched successfully',
        success: true,
        data: articles
    })
}


export const getArticleById = async (req, res) => {
    const {id} = req.params
    const article = await Article.findById(id)
    return res.status(201).json({
        message: 'Article fetched successfully',
        success: true,
        data: article
    })
}

export const createArticle = async (req, res) => {
    const {title, subtitle, body} = req.body
    const article = await Article.create({title, subtitle, body})
    return res.status(201).json({
        message: 'Article created successfully',
        success: true,
        data: article
    })
}

export const updateArticle = async (req, res) => {
    const {id} = req.params
    const {title, subtitle, body} = req.body
    const article = await Article.findByIdAndUpdate(id, {title, subtitle, body}, {new: true})
    return res.status(201).json({
        message: 'Article updated successfully',
        success: true,
        data: article
    })
}

export const deleteArticle = async (req, res) => {
    const {id} = req.params
    const article = await Article.findByIdAndDelete(id)
    return res.status(201).json({
        message: 'Article deleted successfully',
        success: true,
        data: article
    })
}