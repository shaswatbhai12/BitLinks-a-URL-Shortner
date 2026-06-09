"use client"

import React from 'react'

export default function Contact(){
    const myPhoneNumber = "918287429001"
    const myEmail = "shaswatkumar9868@gmail.com"

    return (
        <div className='min-h-[calc(100vh-4rem)] bg-purple-50/50 py-16 px-4 flex flex-col items-center justify-center'>
            <div className='w-full max-w-md mx-auto bg-purple-100 p-8 rounded-lg flex flex-col gap-8 shadow-md text-center'>
                <div>
                    <h1 className='font-bold text-3xl text-purple-950 tracking-tight'>Connect with Me</h1>
                    <p className='text-purple-700 text-sm mt-2'>
                        Have a question or want to work together? Reach out directly on any of these platforms
                    </p>
                </div>

                <div className='flex items-center justify-center gap-6 py-2'>
                    <a
                     href={`https://wa.me/${myPhoneNumber}`}
                     target='_blank'
                     rel='noopener noreferrer'
                     className='p-4 bg-white hover:bg-green-50 text-green-500 border border-purple-200 shadow-sm rounded-full transition-all hover:scale-110 hover:shadow-md'
                     title='Whatsapp'>
                        <img src="whatsapp.jpg" alt="" className='w-8 h-8 object-contain mx-auto'/>
                     </a>
                     <a 
                     href={`mailto:${myEmail}`}
                     target='_blank'
                     className='p-4 bg-white hover:bg-purple-50 text-purple-600 border border-purple-200 shadow-sm rounded-full transition-all hover:scale-110 hover:shadow-md'
                     title='Send an Email?'>
                        <img src="email.jpg" alt="" className='w-8 h-8 object-contain mx-auto'/>
                     </a>
                     <a 
                     href={`tel:${myPhoneNumber}`}
                     className='p-4 bg-white hover:bg-blue-50 text-blue-500 border border-purple-200 shadow-sm rounded-full transition-all hover:scale-110 hover:shadow-md'
                     title='Call me Now!'>
                        <img src="phone.jpg" alt="" className='w-8 h-8 object-contain mx-auto'/>
                     </a>
                </div>
            </div>
        </div>
    )
}