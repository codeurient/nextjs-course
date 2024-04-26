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
    const queryParams = useParams();
    const {id} = queryParams;

    const post = blogPosts.find(blog => blog.id.toString() === id);
    
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