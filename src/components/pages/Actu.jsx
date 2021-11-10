import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Post from '../Post';

export default function Actu() {

    const [data, setData] = useState([]);
    const baseUrl = "http://localhost:4000"


    useEffect(() => {

        axios.get(`${baseUrl}/post/all`).then((res) => {

            console.log(res.data);
            setData(res.data)

        })

    }, []);


    return (
        <div id="actu">
            <ul>
            {data?.map((posts)=> {
                console.log(posts);
                return (
                    <>
                    <li><Post category={posts.category} message={posts.message} 
                    createdAt={posts.createdAt} likers={posts.likers.length} 
                    comments={posts.comments} posterId={posts.posterId}/></li>
                    </>
                )
            })}
            </ul>
        </div>
    )
}
