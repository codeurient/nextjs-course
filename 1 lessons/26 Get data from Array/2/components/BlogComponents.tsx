import React from 'react'

interface BlogComponentsProps {
    id?: string;
    title: string;
    description: string;
}

const BlogComponents = ({id, title, description}: BlogComponentsProps) => {
  return (
    <div className='gap-y-4 gap-x-4 p-4'>

        <h2 className='text-3xl'>{title}</h2>

        <p>{description}</p>

    </div>
  )
}

export default BlogComponents