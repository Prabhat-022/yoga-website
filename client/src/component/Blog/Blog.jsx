import Header from '../Header';
import BottomArticle from './BottomArticle';
import MainArticle from './MainArticle';
import RightArticle from './RightArticle';

const Blog = () => {
    const darkMode = true;

    return (
        <>
            <div className="h-screen ">
                <Header darkMode={darkMode} />
                <div className={`flex h-screen md:flex-row items-center justify-center ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} shadow-md`}>
                    {/* Main Article */}

                    <div className="flex flex-col ">
                        <div className="">
                            <MainArticle />
                        </div>

                        {/*Bottom Article */}
                        <div className="flex items-center justify-center">
                            <BottomArticle />
                            <BottomArticle />
                            <BottomArticle />
                            <BottomArticle />
                            <BottomArticle />
                            <BottomArticle />
                        </div>
                    </div>
                    

                    {/* Right side Article */}

                    <div className="mr-5 overflow-y-scroll">
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
