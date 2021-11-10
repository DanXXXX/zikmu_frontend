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
            <li>{category}</li>
            <li>{message}</li>
            <li>{likers}</li>
            <button className="like-btn fa fa-good"> Like</button>
            <ul>
                {comments?.map((comment) => {
                    return <li> {comment.text}</li>
                })}
            </ul>
        </div>
    )
}
