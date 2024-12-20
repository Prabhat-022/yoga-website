import { useState } from "react"

const RightArticle = () => {
    const [more, setMore] = useState(false)

    const handlemore = () => {

        setMore(!more)
    }
    return (
        <>
            <div className="cursor-pointer">
                <img src="https://plus.unsplash.com/premium_photo-1661589014272-34d69ee95a57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-20 ' />

                <div className="">
                    <h1 className='font-bold text-2xl'>About Grout Discussion</h1>
                    <p className='text-sm'>Grout Discussion is a platform that helps people discuss and solve problems related to grout. Grout is a type of construction material used to fill in gaps between tiles, </p>
                    {
                        more && <p>
                            However, grout can also be prone to cracking and other problems, which can lead to water damage and other issues. Grout Discussion is a place where people can share their experiences and advice on how to prevent and solve these problems, and find solutions to common issues related to grout.</p>
                    }
                    <span className='text-red-700 cursor-pointer' onClick={handlemore}>{more ? "less.." : "more.."}</span>

                </div>
            </div>
        </>
    )
}

export default RightArticle
