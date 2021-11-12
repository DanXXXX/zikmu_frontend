import React, { useState, useEffect } from "react";
import axios from "axios";
import Event from "../Event";

export default function ListEvent() {
  const baseUrl = "http://localhost:4000";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/event`).then((res) => {
      console.log(res.data);
      setData(res.data.events);
    });
  }, []);

  return (
    <div id="event">
      <ul>
        {data?.map((docs) => {
          console.log(docs.title);
          return (
            <>
              <Event
                image={docs.file}
                title={docs.title}
                category={docs.category}
                location={docs.location}
              />
            </>
          );
        })}
      </ul>
    </div>
  );
}
