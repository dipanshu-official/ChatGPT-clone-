import React from 'react'
import img1 from "../assets/Footer/Button.png"
import img2 from "../assets/Footer/Button1.png"
import img3 from "../assets/Footer/IconSet.png"

const Footer = () => {
    return (
        <div className='flex items-center justify-center fixed '>
            <div className='py-4 mt-30 lg:mt-0'>
                <div className='flex items-center '>

                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                

                    <input 
                     type="text"
                     placeholder='text-messeage' 
                     className='placeholder:pl-3 w-100 outline-none'
                    />
                    <img src={img3} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Footer