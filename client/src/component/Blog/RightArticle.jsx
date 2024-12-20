import img from '../../../public/cute girl.jpg'

const RightArticle = () => {
    return (
        <>
            <div className="cursor-pointer">
                <img src={img} alt="" className='w-20 ' />
                <div className="">
                    <h1>This is the article <span className='text-red-700'>more..</span></h1>
                </div>
            </div>
        </>
    )
}

export default RightArticle
