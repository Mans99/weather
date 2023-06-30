import React from 'react'
import './styles.css'
import RainSun from './Assets/rain-sun.png'

export default function Home() {
    let place = 'New York';
    let degrees = '28°C'
    let wind = '4m/s'
    let persperation = '2mm'

    return (
        <div class='flex h-screen bg-gradient-to-t from-cyan-400 to-blue-500 justify-center'>
            <div class='flex flex-auto flex-col'>
                <div class='py-16 uppercase text-white sm:text-8xl text-6xl text-center'> {place}
                </div>
                <div class='flex justify-center h-45 w-full'>
                    <div class='flex flex-col py-8 flex-1 '>
                        <div class='sm:text-6xl text-4xl text-white text-right'>
                            {degrees}
                        </div>
                        <div class='flex justify-end space-x-3 place-content-end'>
                            <div class='sm:text-2xl text-xl text-white'> {wind} </div>
                            <div class='sm:text-2xl text-xl text-white'> {persperation} </div>
                        </div>
                    </div>
                    <div class='h-full w-5'></div>
                    <div class='flex-1 '  >
                        <img src={RainSun} alt='rain and sun' class='flex-auto max-w-40 h-full' />
                    </div>
                </div>
                <div className='flex justify-center py-10'>
                    <div className='sm:flex-10 w-10'></div>
                    <div class='max-w-3xl flex-1'>
                        <label class="relative block">
                            <span className="absolute inset-y-0 left-1 flex items-center pl-2">
                                <svg class="h-6 w-6 stroke-slate-300" fill="none" viewBox="0 0 22 22" stroke-width="1.5" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </span>
                            <input class="placeholder:italic placeholder:text-slate-300 block bg-neutral-500/[.3] w-full border border-slate-300/[0.3] rounded-md py-2 pl-12 shadow-sm focus:outline-none focus:border-none focus:ring-none focus:ring-1 sm:text-xl text-white" placeholder="How's the weather in..?" type="text" name="search" />
                        </label>
                    </div>
                    <div className='sm:flex-10 w-10'></div>
                </div>
            </div>
        </div>
    )
}
