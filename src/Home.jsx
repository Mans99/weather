import React, { useEffect, useState } from 'react'
import './styles.css'
import RainSun from './Assets/rain-sun.png'

export default function Home() {
    const [weather, setWeather] = useState({})
    const [content, setContent] = useState('');
    const [location, setLocation] = useState({});
    let city = location?.name;
    let temp = weather?.current_weather?.temperature
    let wind = weather?.current_weather?.windspeed
    let unit = weather?.hourly_units?.temperature_2m

    
    
   useEffect(() => {
    const fetchWeather = async () => {
        await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${location?.latitude}&longitude=${location?.longitude}&hourly=temperature_2m,precipitation,weathercode&daily=weathercode&current_weather=true&windspeed_unit=ms&forecast_days=1&timezone=auto`)
        .then((response) => response.json())
        .then((data) => setWeather(data))
        .catch((error) => console.error(error));
    }
    fetchWeather()
    }, [location])
   


    const handleSubmit = (e) => {
        e.preventDefault();
        const fetchLocation = async () => {
            await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${content}&count=1&language=en&format=json`)
            .then((response) => response.json())
            .then((data) => setLocation(data.results[0]))
            .catch((error) => console.error(error));
        }
        fetchLocation()
        setContent('')
        
        
    }

    return (
        <div className='flex h-screen bg-gradient-to-t from-cyan-400 to-blue-500 justify-center'>
            <div className='flex flex-auto flex-col'>
                <div className='py-16 uppercase text-white sm:text-8xl text-6xl text-center'> {city}
                </div>
                <div className='flex justify-center h-45 w-full'>
                    <div className='flex flex-col py-8 flex-1 '>
                        <div className='sm:text-6xl text-4xl text-white text-right'> {temp}{unit}</div>
                        <div className='flex justify-end space-x-3 place-content-end'>
                            <div className='sm:text-2xl text-xl text-white'> {wind}m/s </div>
                            <div className='sm:text-2xl text-xl text-white'> {} </div>
                        </div>
                    </div>
                    <div className='h-full w-5'></div>
                    <div className='flex-1 '  >
                        <img src={RainSun} alt='rain and sun' className='flex-auto max-w-40 h-full' />
                    </div>
                </div>
                <div className='flex justify-center py-10'>
                    <div className='sm:flex-10 w-10'></div>
                    <div className='max-w-3xl flex-1'>
                        <form name='searchBox' onSubmit={handleSubmit}>
                        <label className="relative block">
                            <span className="absolute inset-y-0 left-1 flex items-center pl-2">
                                <svg className="h-6 w-6 stroke-slate-300" fill="none" viewBox="0 0 22 22" stroke-width="1.5" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </span>
                            <input className="placeholder:italic placeholder:text-slate-300 block bg-neutral-500/[.3] w-full border border-slate-300/[0.3] rounded-md py-2 pl-12 shadow-sm focus:outline-none focus:border-none focus:ring-none focus:ring-1 sm:text-xl text-white" placeholder="How's the weather in..?" type="text" name="search" value={content} onChange={e => setContent(e.target.value)} />
                        </label>
                        </form>
                    </div>
                    <div className='sm:flex-10 w-10'></div>
                </div>
            </div>
        </div>
    )
}
