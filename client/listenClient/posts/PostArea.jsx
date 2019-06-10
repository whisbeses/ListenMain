import React from "react"

import Post from "./Post.jsx"

const PostArea = (props)=>{
  return (
    <div className="postsContainer"> 
      {props.posts.map((post)=>
        <Post post={post} key={post.id} />
      )}
    </div>
    
  )
}

export default PostArea;