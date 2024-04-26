import BlogComponents from '@/components/BlogComponents'
import React from 'react'

const blogPosts = [
  {id: 1, title: 'First blog', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi quasi eos corporis iusto minima excepturi qui eveniet ratione id, possimus consectetur nihil ad nulla cupiditate, totam dolor distinctio natus.'},
  {id: 2, title: 'Secondy blog', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi quasi eos corporis iusto minima excepturi qui eveniet ratione id, possimus consectetur nihil ad nulla cupiditate, totam dolor distinctio natus.'},
  {id: 3, title: 'Third blog', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi quasi eos corporis iusto minima excepturi qui eveniet ratione id, possimus consectetur nihil ad nulla cupiditate, totam dolor distinctio natus.'}
]

const BlogPage = () => {
  return (
    <div>

      <div><h1>Blog yazilari</h1></div>

      <div>
        {blogPosts.map(post => (
          
          <BlogComponents id={post.id} key={post.id} description={post.content} title={post.title}></BlogComponents>

        ))}
      </div>
    </div>

  )
}

export default BlogPage