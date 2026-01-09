// 1) 
'use client'

import { useParams } from 'next/navigation'
import React from 'react'

const blogPosts = [
    {id: 1, title: 'First blog', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi quasi eos corporis iusto minima excepturi qui eveniet ratione id, possimus consectetur nihil ad nulla cupiditate, totam dolor distinctio natus.'},
    {id: 2, title: 'Secondy blog', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi quasi eos corporis iusto minima excepturi qui eveniet ratione id, possimus consectetur nihil ad nulla cupiditate, totam dolor distinctio natus.'},
    {id: 3, title: 'Third blog', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi quasi eos corporis iusto minima excepturi qui eveniet ratione id, possimus consectetur nihil ad nulla cupiditate, totam dolor distinctio natus.'}
  ]

const BlogDetail = () => {

    // 2) useParams() hook-undan istifade ederek URL-de olan movcud parametri elde edirik. Parametr ID olacaq. 
    const queryParams = useParams();
    // 3) Bu hook obyekt qaytardigi ucun asagida {id} bu cur bir deyisken yaradaraq hemin obyektden qayidan deyeri ID deyiskenine yerlesdiririk.
    const {id} = queryParams;

    // 4) FIND() metodu ile Array-dan obyektleri elde edirik ve BLOG parametrine veririk. Sonra obyektin icinden cagirdigimiz ID-ni URL-den elde etdiyimiz
    // parametr (id) ile muqayise edirik. Eger bu ID-ler eyni olarsa hemin ID-ye mexus diger title, content ve.s hamisini POST deyiskenine yerlesdiririk.
    // Eger ID-ler verqli olarsa UNDEFINED qayidacaq.
    const post = blogPosts.find(blog => blog.id.toString() === id);
    
    // 5)  UNDEFINED ve FALSE birlesdikde TRUE verecek ve ekranda asagidaki yazini goreceyik. ELSE yəni eks halda post-u goreceyik.
    if(!post) {

        return <div>There is not anything</div>

    } else {
        return (
            <div>
                <p>{post.title}</p>
                <p>{post.content}</p>
            </div>
        )
    }

    
}

export default BlogDetail