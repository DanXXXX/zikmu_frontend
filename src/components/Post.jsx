import React from 'react'

export default function Post({ category, message, likers, posterId, createdAt, comments, image }) {
    console.log(image);
    return (
        <div id="post">
            <div id="user-post">
                <img src={image} alt="pdp" className="profil-post-picture" />
                <p>{posterId}</p>
                <li>{createdAt}</li>
            </div>
            <li className="liker">{category}</li>
            <p className="post-msg">{message}</p>
            <div id="like">

                <li className="liker">{likers}</li>
                <i class="far fa-heart"></i>
            </div>
            <ul className="comment-list">
                {comments?.map((comment) => {
                    return <li> {comment.text}</li>
                })}
            </ul>
        </div>
    )
}
