"use client"

import React from 'react'
import Link from 'next/link'

export default function About() {
    return(
        <div className='min-h-[calc(100vh-4rem)] bg-purple-50/50 py-16 px-4 flex flex-col items-center justify-start'>
            <div className='w-full max-w-2xl mx-auto flex flex-col gap-6 text-center sm:text-left'>

                <div className='text-center'>
                    <h1 className='text-4xl font-extrabold text-purple-950 tracking-tight'>
                        What is BitLinks?
                    </h1>
                </div>

                <div className='bg-purple-100 p-8 rounded-lg flex flex-col gap-4 shadow-md text-left'>
                    <p className='text-purple-900 text-lg leading-relaxed'>
                        Nobody Likes longs, ugly links. They looks very messy in social media, get cut off in text messages, and just looks kind a messy 
                    </p>

                    <p className='text-purple-900 text-lg leading-relaxed'>
                        I built <strong>BitLinks</strong> to fix that. It's a super simple tool that takes those massive URL's and cuts them into short, readeble link using custom texts that actually makes sense to people 
                    </p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-left'>
                    <div className='bg-white p-6 rounded-lg border border-purple-200 shadow-sm'>
                        <h3 className='font-bold text-purple-900 text-lg mb-1'>Pick your Text</h3>
                        <p className='text-purple-700 text-sm leading-relaxed'>
                            No random Jumble of Letters. You get to type the exact word you want for your Link
                        </p>
                    </div>

                    <div className='bg-white p-6 rounded-lg border border-purple-200 shadow-sm'>
                        <h3 className='font-bold text-purple-900 text-lg mb-1'>Free and Fast</h3>
                        <p className='text-purple-700 text-sm leading-relaxed'>
                            Built with Next.js and MONGODB so it redirects your link instantly without any weird delay
                        </p>
                    </div>
                </div>

                <div className='text-center mt-4'>
                    <Link href="/shorten">
                        <button className='bg-purple-500 hover:bg-purple-600 rounded-lg shadow-lg p-3 px-6 font-bold text-white transition-all'>
                            Shorten a Link Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}