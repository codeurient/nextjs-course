import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


interface layoutProps{
    children: React.ReactNode
}

const layout = ({children}:layoutProps) => {
  return (
    <div>
        <div className='bg-red-300'>

            <Image alt='' src="/slider/winwall.jpeg" className='w-full h-52 object-cover' width={500} height={500}></Image>

            <Link href="/about/mission"> Mision </Link>
            <Link href="/about/vision"> Vizion </Link>
            <Link href="/about/team"  > Team   </Link>

            <div>
                {children} 
            </div>

        </div>


    </div>
  )
}

export default layout