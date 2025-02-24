import React from 'react'
import { useState } from 'react'
import img from '../assets/Main/Frame.png'
import img1 from '../assets/Main/Chats.png'
import img2 from '../assets/Main/Star.png'
import img3 from '../assets/Main/IconSet-1.png'
import Footer from './Footer'
import { Menu, X } from 'lucide-react'
import Aside from './Aside'






const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [image, setImage] = useState('')

   

    const data = [
        {
            icon: img1,
            name: "Examples",
            p1: "Explain quantum computing insimple terms",
            p2: "Got any creative ideas for a 10year old's birthday?",
            p3: `"How do I make an HTTP requestin Javascript?"`
        },
        {
            icon: img2,
            name: "Capabilities",
            p1: "Remembers what user saidearlier in the conversation.",
            p2: "Allows user to provide follow-up corrections.",
            p3: 'Trained to decline inappropriate requests.'
        },
        {
            icon: img3,
            name: "Limitations",
            p1: "May occasionally generate incorrect information.",
            p2: "May occasionally produce harmful instructions or biased content.",
            p3: 'Limited knowledge of world andevents after 2021.'
        },
    ]
    return (
        <>

        <div className='absolute top-5 lg:hidden block z-50'>
                <button
                    className="text-black text-2xl focus:outline-none"
                    onClick={( ) => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={32}  /> : <Menu size={32} />}
                </button>
                {isOpen && <Aside/> }

            </div>


        <div className="min-h-screen lg:mx-[119px] md:mx-[70px] mx-[35px] flex items-center justify-center ">
            <div>


                <div className="flex  items-center justify-center gap-4">
                    <img src={img} alt="Logo" className="max-w-full h-auto" />
                </div>


                <div className='sm:grid lg:grid-cols-3 sm:grid-cols-2 hidden gap-10 mt-20'>

                    {
                        data.map((item, index) => (
                            <div>

                                <div className='flex flex-col items-center  '>
                                    <img src={item.icon} alt="" className='h-8 w-8' />
                                    <h1 className='font-bold text-lg'> {item.name}</h1>
                                </div>
                                <div className='mt-4 text-wrap text-sm'>
                                    <p className='mt-4'>{item.p1}</p>
                                    <p className='mt-4'>{item.p2}</p>
                                    <p className='mt-4'>{item.p3}</p>
                                </div>
                            </div>

                        ))
                    }
                </div>

                    
                <div className='mt-30'>
                    <Footer />

                </div>
            </div>



        </div>
        </>

    )
}

export default Hero