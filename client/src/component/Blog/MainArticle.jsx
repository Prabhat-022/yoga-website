import img from '../../../public/cute girl.jpg'

const MainArticle = () => {
    return (
        <>
            <div className="">
                <img src={img} alt="" className='w-30 p-4 ' />

                <div className="">
                    <h1 className='text-3xl font-bold'>This is the Cute girl</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit est soluta dolorem, minus dicta ipsa iusto debitis perferendis voluptatibus a beatae quos repellendus iste illo fugit accusantium pariatur consectetur voluptatum? <span className='text-red-700'>more..</span></p>



                </div>
            </div>

        </>
    )
}

export default MainArticle
