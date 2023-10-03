import { data } from '@/pages/api/hello'
import React from 'react'

const Navbar = () => {
    return (
        <div className='flex min-w-[1260px] px-24 py-3 rounded-3xl bg-white items-center justify-around fixed z-50 left-1/2 top-2 transform -translate-x-1/2 '>
            <a href='/' target="_blank">
                <img
                    className='w-50 h-10'
                    src='https://babydoge.com/cdn/shop/t/79/assets/baby-doge-logo-black@1x.png?v=83473358957494649681691085722'
                    alt='mainlogo'
                />
            </a>
            <ul className='flex gap-6 cursor-pointer ml-8'>
                {data.sectionTitles.map((section) => {
                    return (
                        <li key={section.id} className='font-bold text-xs hover:text-blue-500'>
                            {section.title}
                        </li>
                    )
                })}
            </ul>
            <div className='flex gap-6 ml-8'>
                <a href='' target="_blank">
                    <img
                        className='w-28 h-12 text-black-700'
                        src='https://certik-project-logos.imgix.net/emblem/certik-logo-animated.svg'
                        alt='logo2'
                    />
                </a>
                <button className='bg-blue-500 text-white font-bold px-8 py-3 rounded-3xl whitespace-nowrap'>Launch App</button>
            </div>
        </div>
    )
}

export default Navbar
