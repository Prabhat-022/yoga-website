import { useSelector } from 'react-redux';
import Header from '../Header';
import BottomArticle from './BottomArticle';
import MainArticle from './MainArticle';
import RightArticle from './RightArticle';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
    const darkMode = true;
    const users = useSelector((store) => store?.user?.user)
    const navigate = useNavigate();

    const handleClick = (e)=>{
        console.log('clicked')

        e.preventDefault();
        navigate('/post')
    }

    return (
        <>
            <div className="h-screen bg-gray-800 ">

                <Header darkMode={darkMode} />

                {
                    users?.userType === "admin" ? <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer' onClick={handleClick}>Create Post</button> : " "
                }

                <div className={`flex h-screen md:flex-row items-center justify-center ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} shadow-md`}>
                    {/* Main Article */}

                    <div className="flex flex-col ">
                        <div className="">
                            <MainArticle />
                        </div>

                        {/*Bottom Article */}
                        <div className="flex items-center  overflow-hidden  overflow-x-scroll m-10">
                            <BottomArticle />
                            <BottomArticle />
                            <BottomArticle />
                            <BottomArticle />
                            <BottomArticle />
                            <BottomArticle />
                        </div>
                    </div>


                    {/* Right side Article */}

                    <div className="w-full h-full overflow-hidden  overflow-y-scroll mr-4">
                        
                        <div className="">
                            <RightArticle />
                            <RightArticle />
                            <RightArticle />
                            <RightArticle />
                            <RightArticle />
                            <RightArticle />
                            <RightArticle />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Blog
