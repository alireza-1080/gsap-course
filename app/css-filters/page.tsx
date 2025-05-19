import Image from 'next/image'
import React from 'react'
import nature from "@/public/nature.png"

const CssFilters = () => {
  return (
    <div className='w-full min-h-screen flex flex-col justify-center *:w-full *:h-screen *:flex *:flex-col *:justify-center *:items-center *:text-5xl *:overflow-hidden *:gap-10'>
        <h1 className='!text-9xl'>Css Filters 🔥</h1>
        <div>
            <h2>Filter: none</h2>
            <Image src={nature} width={1000} height={1000} alt='Nature' className='w-2xl rounded-2xl'></Image>
        </div>
        <div>
            <h2>Filter: blur(4px)</h2>
            <Image src={nature} width={1000} height={1000} alt='Nature' className='w-2xl rounded-2xl blur-[4px]'></Image>
        </div>
        <div>
            <h2>Filter: brightness(50%)</h2>
            <Image src={nature} width={1000} height={1000} alt='Nature' className='w-2xl rounded-2xl brightness-50'></Image>
        </div>
        <div>
            <h2>Filter: contrast(200%)</h2>
            <Image src={nature} width={1000} height={1000} alt='Nature' className='w-2xl rounded-2xl contrast-200'></Image>
        </div>
        <div>
            <h2>Filter: dropShadow</h2>
            <Image src={nature} width={1000} height={1000} alt='Nature' className='w-2xl rounded-2xl drop-shadow-2xl drop-shadow-blue-600'></Image>
        </div>
        <div>
            <h2>Filter: grayScale(100%)</h2>
            <Image src={nature} width={1000} height={1000} alt='Nature' className='w-2xl rounded-2xl grayscale-100'></Image>
        </div>
        <div>
            <h2>Filter: hueRotate(180deg)</h2>
            <Image src={nature} width={1000} height={1000} alt='Nature' className='w-2xl rounded-2xl hue-rotate-180'></Image>
        </div>
        <div>
            <h2>Filter: invert(75%)</h2>
            <Image src={nature} width={1000} height={1000} alt='Nature' className='w-2xl rounded-2xl invert-75'></Image>
        </div>
        <div>
            <h2>Filter: opacity(25%)</h2>
            <Image src={nature} width={1000} height={1000} alt='Nature' className='w-2xl rounded-2xl opacity-25'></Image>
        </div>
        <div>
            <h2>Filter: saturate(200%)</h2>
            <Image src={nature} width={1000} height={1000} alt='Nature' className='w-2xl rounded-2xl saturate-200'></Image>
        </div>
        <div>
            <h2>Filter: sepia(100%)</h2>
            <Image src={nature} width={1000} height={1000} alt='Nature' className='w-2xl rounded-2xl sepia-100'></Image>
        </div>
    </div>
  )
}

export default CssFilters