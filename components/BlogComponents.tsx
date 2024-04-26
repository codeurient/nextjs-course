import Link from 'next/link';
import React from 'react'

interface BlogComponentsProps {
    id?: number;    
    title: string;
    description: string;
}

const BlogComponents = ({id, title, description}: BlogComponentsProps) => {
  return (
    <Link href={`/blog/${id}`}>
      <div className='gap-y-4 gap-x-4 p-4'>

      <h2 className='text-3xl'>{title}</h2>

      <p>{description}</p>

      </div>
    </Link>
  )
}

export default BlogComponents