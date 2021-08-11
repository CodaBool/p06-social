import React, { useState } from 'react'
import Post from '../../components/Post'
import data from '../../constants/data.json'

export default function Posts() {
  const [posts, setPosts] = useState(data)

  return (
    <>
      <h1 className="display-3">Latest Posts</h1>
      <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
        {posts.map((post) => 
          <Post
            title={post.title}
            key={post.title}
            body={post.body}
            id={post.id}
            user={post.user}
            created={post.createdAt}
            updated={post.updatedAt}
            image={post.image}
          />
        )}
      </div>
    </>
  )
}
