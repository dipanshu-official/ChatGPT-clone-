import React from 'react'
import { useState } from 'react'
import img from '../assets/Aside/IconSet.png'
import img1 from '../assets/Aside/IconSet1.png'
import img2 from '../assets/Aside/IconSet2.png'
import img3 from '../assets/Aside/IconSet3.png'
import img4 from '../assets/Aside/IconSet4.png'
import img6 from '../assets/Aside/upper.png'

const Aside = () => {
    return (
        <>
            


            <div className='h-screen flex  flex-col  justify-between w-[282px] bg-white'>
                <div className='p-5 text-xs text-[14px]'>
                    <div className=''>
                        <p className='px-3 text-center py-2 bg-black text-white rounded-xl '>+ New chat</p>
                    </div>
                    <div className='flex items-center gap-3 p-3'>
                        <img src={img6} alt="" />
                        <p>AI Chat Tool Ethics</p>
                    </div>
                    <div className='flex items-center gap-3 p-3'>
                        <img src={img6} alt="" />
                        <p>Al Chat Tool Impact Writing</p>
                    </div>
                    <div className='flex items-center gap-3 p-3'>
                        <img src={img6} alt="" />
                        <p>New chat</p>
                    </div>

                </div>

                <div className='p-5 text-xs text-[14px]'>
                    <div className='flex items-center gap-3 p-3'>
                        <img src={img} alt="" />
                        <p>Clear conversations</p>
                    </div>
                    <div className='flex items-center gap-3 p-3'>
                        <img src={img1} alt="" />
                        <p>Light mode</p>
                    </div>
                    <div className='flex items-center gap-3 p-3'>
                        <img src={img2} alt="" />
                        <p>My  account</p>
                    </div>
                    <div className='flex items-center gap-3 p-3'>
                        <img src={img3} alt="" />
                        <p>Updates & FAQ</p>
                    </div>
                    <div className='flex items-center gap-3 p-3'>
                        <img src={img4} alt="" />
                        <p>Log out</p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Aside