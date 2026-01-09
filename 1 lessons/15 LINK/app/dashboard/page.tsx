import React from 'react'
import Link from "next/link";


const page = () => {
  return (
    <div>
        <div>Dashboard Page</div>

        <div className="flex gap-8">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/product">Product</Link>
        </div>
    </div>
  )
}

export default page