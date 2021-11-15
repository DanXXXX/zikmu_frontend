import React, { useState, useEffect } from "react";
import axios from "axios";
import Event from "../components/Event";
import Map from "./Map";

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
        <Map
          image={data.file}
          title={data.title}
          category={data.category}
          location={data.location}
          coordinates={data.coordinatesObject}
        />
        ;
        {data?.map((docs) => {
          console.log(docs);
          return (
            <div id="list-event">
              <Event
                image={docs.file}
                title={docs.title}
                category={docs.category}
                location={docs.location}
                coordinates={docs.coordinatesObject}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
}
