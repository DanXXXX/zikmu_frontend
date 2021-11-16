import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function UserProfile(props) {
  const [user, setUser] = useState([]);
  const id = props.match.params.id;
  const apiUrl = "http://localhost:4000";
  // const isLogged

  useEffect(() => {
    fetch(apiUrl + "/user/" + id)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const {
    image,
    fullName,
    surname,
    likes,
    posts,
    messages,
    followers,
    following,
    bio,
    _id,
  } = user;

  if (user) {
    return (
      <div className="userProfile">
        <h1>Profil</h1>
        <div className="userDashboard">
          <div className="avatar">
            <img src={apiUrl + image + _id} alt={`${fullName}profile`} />
          </div>
          <div className="fullName">
            <h2>{fullName}</h2>
          </div>
          <div className="surname">
            <h3>{surname}</h3>
          </div>
          <div>
            <Link to="/messages">{messages}</Link>
          </div>
          <div>
            <Link to="/likes">{likes}</Link>
          </div>
          <div className="posts">
            <p>{posts}</p>
          </div>
          <div className="followers">
            <p>{followers}</p>
          </div>
          <div className="following">
            <p>{following}</p>
          </div>
          <div className="bio">
            <p>{bio}</p>
          </div>
        </div>
      </div>
    );
  }
}
