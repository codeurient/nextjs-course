import Link from 'next/link';
import React from 'react'

interface BlogComponentsProps {
    id?: number;    // 1) database-den asili olaraq burda TIP kimi NUMBER evezine STRING yazilma ehtimalida vardir.
    title: string;
    description: string;
}

const BlogComponents = ({id, title, description}: BlogComponentsProps) => {
  return (
    // 1) [id] kvadrat morterize yazdigimiz ucun /blog -dan sonra nede yazsaq, proqram bizi blog qovlugunun icinde olan [id] qovlugundaki page.tsx faylina (sehifesine)
    // yonlendirecek. ID her defe deyisdiyi ucun link ferqli olacaq ancaq sehife eyni olacaq. Ele etmeliyik ki, hemin ID -ye gore ekranda ferqli mezmun gosterilsin.
    <Link href={`/blog/${id}`}>
      <div className='gap-y-4 gap-x-4 p-4'>

      <h2 className='text-3xl'>{title}</h2>

      <p>{description}</p>

      </div>
    </Link>
  )
}

export default BlogComponents