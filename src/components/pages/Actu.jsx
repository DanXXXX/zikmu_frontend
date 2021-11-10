import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function Actu() {

    const [data, setData] = useState([]);
    const baseUrl = "http://localhost:4000"


    useEffect(() => {

        axios.get(`${baseUrl}/post`).then((res) => {

            console.log(res.data);
            setData(res.data.events)

        })

    }, []);


    return (
        <div id="actu">
            <ul>
            {data.map((posts)=> {
                console.log(posts);
                return (
                    <>
                    <li>{posts}</li>
                    </>
                )
            })}
            </ul>
        </div>
    )
}
