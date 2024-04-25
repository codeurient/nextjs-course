// 1) component-lerin istifadeci terefinde çalışaması ucun istifade edilen direktiv-dir. Bu olmadiqda component serverde çalışir sonra istifade terefine gonderilir. Bu da surete tesir eden amildir.
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Header = () => {

    // 2) usePathname() metodu hal-hazirda icinde oldugumuz sehifenin URL-sini elde etmek ucun istifade edilir. Bunu asagida ki, kimi nelerise muqayise etmek ucun istifade ede bilerik.
    const pathname = usePathname()

    return (
    <div className='flex justify-between items-center'>
        <div className='ml-5'>Logo</div>

        <div className='flex items-center gap-9 m-5'>
            <p><Link className={`p-3 ${pathname === '/'        ? "underline" : ""}`}   href="/"         >   Home      </Link></p>
            <p><Link className={`p-3 ${pathname === '/about'   ? "underline" : ""}`}   href="/about"    >   About     </Link></p>
            <p><Link className={`p-3 ${pathname === '/blog'    ? "underline" : ""}`}   href="/blog"     >   Blog      </Link></p>
            <p><Link className={`p-3 ${pathname === '/contact' ? "underline" : ""}`}   href="/contact"  >   Contact   </Link></p>
        </div>
    </div>
    )
}

export default Header