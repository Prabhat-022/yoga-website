import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Article = () => {
    const { id } = useParams()
    const [article, setArticle] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchArticle = async () => {
            const res = await axios.get(`/api/articles/${id}`)
            setArticle(res.data)
            setLoading(false)
        }
        fetchArticle()
    }, [id])

    const { title, subtitle, author, image, createdAt, body } = article

    return (
        <div className="max-w-7xl mx-auto py-10">
            {loading ? (
                <div className="text-center">Loading...</div>
            ) : (
                <div>
                    <h1 className="text-4xl font-bold">{title}</h1>
                    <p className="text-2xl">{subtitle}</p>
                    <p className="flex items-center">
                        <span className="mr-2">{author}</span>
                        {/* <span className="mr-2">{moment(createdAt).format("MMMM Do, YYYY")}</span> */}
                        <Facebook />
                        <Twitter className="ml-2" />
                        <Instagram className="ml-2" />
                    </p>
                    <img src={image} alt={title} className="w-full h-auto my-10" />
                    <div className="markdown" dangerouslySetInnerHTML={{ __html: body }} />
                </div>
            )}
        </div>
    )
}

export default Article
