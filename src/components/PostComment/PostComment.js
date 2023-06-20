import React from 'react'

function PostComment({comments}) {
  return (
    <div>
        {
            comments.map(comment =>
                <p key={comment.id} className="description"><span>{comment.userName} </span> {comment.body}</p> 
            )
        }
    </div>
  )
}

export default PostComment