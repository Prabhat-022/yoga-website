import { useState } from 'react';
import img from '../../assets/cute girl.jpg'
import { useNavigate } from 'react-router-dom';

const MainArticle = () => {
    const [more, setMore] = useState(false)
    const navigate = useNavigate()

    const handlemore = () => {

        setMore(!more)
    }
    const handleArticle = () => {
        navigate('/article')
    }

    return (
        <>
            <div className="h-full w-full flex items-center justify-center top-0 mt-2">
                <div className="w-1/2 ">
                    <h1 className='text-3xl font-bold cursor-pointer' onClick={handleArticle}>This is the Cute girl</h1>

                    <img src={img} alt="" className='w-full h-[400px] object-cover' />
                    <div className="text-center">
                        <p className='px-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit est soluta dolorem, minus dicta ipsa iusto debitis perferendis voluptatibus a beatae quos repellendus iste illo fugit.</p>
                        {
                            more &&
                            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit est soluta dolorem, minus dicta ipsa iusto debitis perferendis voluptatibus a beatae quos repellendus iste illo fugit helo India. She is a cute girl, with a big smile and a lovely face. She loves to play with her dogs and go for walks. She is very kind and gentle, and always tries to help others. She is a very good listener and is always willing to lend a helping hand. She is a very good friend and is always there for you when you need her. She is a very good person and is always willing to help others. She is a very good listener and is always willing to lend a helping hand. She is a very good friend and is always there for you when you need her.</p>
                        }
                        <span className='text-red-700 cursor-pointer' onClick={handlemore}>{more ? "less.." : "more.."}</span>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MainArticle
