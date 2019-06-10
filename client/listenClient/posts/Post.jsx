import React from "react"


const Post = (props)=>{
  return(
    <div className="post">
      <div className="postText">{props.post.text}</div>
      <div className="postLayout">
        <div>{props.post.likes}</div>
        <div>{props.post.helpful}</div>
        <div>{props.post.notHelpful}</div>
      </div>
    </div>
  )
}


export default Post;