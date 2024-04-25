import Image from 'next/image'
import React from 'react'


// 1) INTERFACE acar sozu ile 'HeroProps' adinda interface teyin edidirk. Bu interface bir componentden basqa bir componente data oturmek ucun istifade edilir.
// Burdaki numunede PAGE.TSX olan ana sehifeden Hero.TSX adli componente data gonderirik ve interface ile gonderilen data-lari elde edirik. Sonra ise asagida 
// component icinde xasse adlarini yazaraq deyerlerini ekranda eks etdiririk...
interface HeroProps{
    title: string,
    description?: string,   // 2) ? sual isaresi onu bildirir ki, description olada biler olmayada.
    image: string,
    image2: string,
}

// 3) 
const Hero = ({title, description, image, image2}: HeroProps) => {
  return (
    <section className='relative h-full overflow-hidden'>


        {/* 4)     backgroundImage:`url('${image}')`     */}
        <div className='absolute top-0 left-0 w-full h-full bg-cover' style={{backgroundImage:`url('${image}')`}}></div>


        {/* 5)  */}
        <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-40'></div>



        {/* 6)  */}
        <div className='flex flex-col lg:flex-row justify-between items-center relative z-10'>
            <div className='w-1/2 ml-4'>
                {/* 7) {title}   */}
                <h2 className='text-3x1 text-white'>{title}</h2>    
                {/* 8)  {description}  */}
                <p className='text-white mt-w'>{description}</p>
            </div>
            <div className='w-1/2 flex justify-center'>
                {/* 9)  src={`/slider/${image2}`}     */}
                <Image src={`/slider/${image2}`} alt='' width={500} height={500}></Image>
            </div>
        </div>


    </section>
  )
}

export default Hero