'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Header = () => {

    const pathname = usePathname()

    return (
    <div className='flex justify-between items-center'>
        <div className='ml-5'>Logo</div>

        <div className='flex items-center gap-9 m-5'>
            <p><Link href="/">Home</Link></p>
            <p><Link href="/about">About</Link></p>
            <p><Link href="/blog">Blog</Link></p>
            <p><Link href="/contact">Contact</Link></p>
        </div>
    </div>
    )
}

export default Header