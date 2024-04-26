import Image from 'next/image'
import React from 'react'

interface HeroProps{
    title: string,
    description?: string,   
    image: string,
    image2: string,
}

// 3) 
const Hero = ({title, description, image, image2}: HeroProps) => {
  return (
    <section className='relative h-full overflow-hidden'>

        <div className='absolute top-0 left-0 w-full h-full bg-cover' style={{backgroundImage:`url('${image}')`}}></div>

        <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-40'></div>

        <div className='flex flex-col lg:flex-row justify-between items-center relative z-10'>

            <div className='w-1/2 ml-4'>
                <h2 className='text-3x1 text-white'>{title}</h2>    
                <p className='text-white mt-w'>{description}</p>
            </div>

            <div className='w-1/2 flex justify-center'>
                <Image src={`/slider/${image2}`} alt='' width={500} height={500}></Image>
            </div>

        </div>

    </section>
  )
}

export default Hero