import { useState } from "react"

const BottomArticle = () => {
    const[more, setMore] = useState(false)

    const handlemore = () => {
    
        setMore(!more)
    }
    return (
        <>
            <div className="mx-4">
                <img src="https://plus.unsplash.com/premium_photo-1661777196224-bfda51e61cfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-20 object-cover' />
                <div className="">
                    <h1 className='font-bold'>Yoga</h1>
                    <p className='text-sm'>Yoga is a physical, mental, or spiritual practice or discipline that originated in India. The Indian gurus from ancient times used to practice yoga as a way to connect their souls with the universe.</p>

                  {
                    more &&
                    <p className='text-sm'>
                         There are several types of yoga, including Hatha, Vinyasa, Ashtanga, Iyengar, Kundalini, and Bikram. Yoga is a great way to relax, reduce stress, increase flexibility, and build strength. It is also a great way to improve your overall health and well-being.</p>
                  }
                    <span className='text-red-700 cursor-pointer' onClick={handlemore}>{more ? "less..": "more.."}</span>
                </div>
            </div>

        </>
    )
}

export default BottomArticle
