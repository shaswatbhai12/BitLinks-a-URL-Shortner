"use client"

import React, { useState } from 'react'

const Shorten = () => {
        const [url, seturl] = useState("")
        const [shorturl, setshorturl] = useState("")
        const [generated, setGenerated] = useState(false)

        const handleChange = (first) => {

        }
    return(
    <div className='mx-auto w-512 max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
        <h1 className='font-bold text-2xl'>Generate your Short URLs</h1>
        <div className='flex flex-col gap-2'>
            <input type="text"
              value={url}
              className='px-4 py-2 bg-white focus:outline-purple-600 rounded-md' 
              placeholder='Enter your URL' 
              onChange={e => {seturl(e.target.value)}}/>

            <input type="text" 
            value={shorturl}
            className='px-4 py-2 bg-white focus:outline-purple-600 rounded-md'
            placeholder='Enter your preferd short URL Text' 
            onChange={e => {setshorturl(e.target.value)}}/>

            <button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 my-3 font-bold text-white'>Generate Now</button>
        </div>
    </div>
    )
}

export default Shorten