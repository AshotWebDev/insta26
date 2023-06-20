import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import IMAGES from '../../images'
import PostComment from '../PostComment/PostComment'
import CommentForm from '../CommentForm/CommentForm'

function Post({id, img, name, likesCount, postText, timeAgo, comments}) {
 
  return (
    <div className="post">
        <div className="info">
            <NavLink style={{textDecoration: 'none'}} to={`${id}/uniq`} className="user">
                <div className="profile-pic"><img src={img} alt="" /></div>
                <p className="username">{name}</p>
            </NavLink>
            <img src={IMAGES.option} className="options" alt=""/>
        </div>
        <img src={img} className="post-image" alt=""/>
        <div className="post-content">
            <div className="reaction-wrapper">
                <img src={IMAGES.like} className="icon" alt=""/>
                <img src={IMAGES.comment} className="icon" alt=""/>
                <img src={IMAGES.send} className="icon" alt=""/>
                <img src={IMAGES.save} className="save icon" alt=""/>
            </div>
            <p className="likes">{likesCount}</p>
            <p className="description"><span>{name} </span> {postText}</p>
            <p className="post-time">{timeAgo}  Minute ago</p>
            <PostComment comments={comments}/>
            <CommentForm  id={id}/>
        </div>
    </div>
  )
}

export default Post