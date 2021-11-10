import React from 'react'

export default function Post({ category, message, likers, posterId, createdAt, comments }) {
    console.log(comments);
    return (
        <div id="post">
            <li>{posterId}</li>
            <li>{category}</li>
            <li>{message}</li>
            <li>{likers}</li>
            <li>{createdAt}</li>
            <ul>
                {comments?.map((comment) => {
                   return <li> {comment.text}</li>
                })}
            </ul>
        </div>
    )
}
