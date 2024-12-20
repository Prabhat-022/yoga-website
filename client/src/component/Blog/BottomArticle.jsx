import img from '../../../public/cute girl.jpg'

const BottomArticle = () => {
    return (
        <>
            <div className="">
                <img src={img} alt="" className='w-24' />
                <div className="">
                    <h1>This is the article <span className='text-red-700'>more..</span></h1>

                </div>
            </div>

        </>
    )
}

export default BottomArticle
