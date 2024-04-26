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
        {/* 1)  */}
        {blogPosts.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <h2>{post.content}</h2>
          </div>
        ))}
      </div>
    </div>

  )
}

export default BlogPage