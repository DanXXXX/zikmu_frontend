import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dateParser, isEmpty } from "../Utils";
import FollowHandler from "../Profil/FollowHandler";
import LikeButton from "./LikeButton";
import { updatePost } from "../../actions/post.actions";
import DeleteCard from "./DeleteCard";
import CardComments from "./CardComments";

const Card = ({ post }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdated, setIsUpdated] = useState(false);
  const [textUpdate, setTextUpdate] = useState(null);
  const [showComments, setShowComments] = useState(false);
  const usersData = useSelector((state) => state.usersReducer);
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const updateItem = () => {
    if (textUpdate) {
      dispatch(updatePost(post._id, textUpdate));
    }
    setIsUpdated(false);
  };

  useEffect(() => {
    !isEmpty(usersData[0]) && setIsLoading(false);
  }, [usersData]);
  console.log(post);
  return (
    <li className="card-container" key={post._id}>
      {isLoading ? (
        <i className="fas fa-spinner fa-spin"></i>
      ) : (
        <>
          <div className="card-surname">
            <img
              src={
                !isEmpty(usersData[0]) &&
                usersData
                  .map((user) => {
                    console.log(user._id);
                    console.log(post.posterId, "<<<<<<<<POST");
                    // console.log(post);
                    if (user._id === post.posterId._id)
                      return `http://localhost:4000${user.image}`;
                    else
                      return null; /*"http://localhost:4000/uploads/profil/random-user.png";*/
                  })
                  .join("")
              }
              alt="poster-pic"
              className="poster-pic"
            />
            <div className="card-right">
              <div className="card-header">
                <div className="pseudo">
                  <h3>
                    {!isEmpty(usersData[0]) &&
                      usersData
                        .map((user) => {
                          console.log("USER <<<<<<<<", user.image);
                          if (user.surname === post.posterId.surname)
                            return user.surname;
                          else return null;
                        })
                        .join("")}
                  </h3>
                  {post.posterId !== userData._id && (
                    <FollowHandler idToFollow={post.posterId} type={"card"} />
                  )}
                </div>
                <span>{dateParser(post.createdAt)}</span>
              </div>
            </div>
          </div>
          {isUpdated === false && <p>{post.message}</p>}
          {isUpdated && (
            <div className="update-post">
              <textarea
                defaultValue={post.message}
                onChange={(e) => setTextUpdate(e.target.value)}
              />

              <div className="button-container">
                <button className="btn" onClick={updateItem}>
                  Valider modification
                </button>
              </div>
            </div>
          )}
          {post.file && (
            <img
              src={"http://localhost:4000/" + post.file}
              alt="card-pic"
              className="card-pic"
            />
          )}
          {/* http://localhost:4000/image/zikmu/guitar-756326_6401637145215173.jpg */}
          {post.video && (
            <iframe
              width="500"
              height="300"
              src={post.video}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={post._id}
            ></iframe>
          )}
          {userData._id === post.posterId && (
            <div className="button-container">
              <div onClick={() => setIsUpdated(!isUpdated)}>
                <img src="./image/icons/edit.svg" alt="edit" />
              </div>
              <DeleteCard id={post._id} />
            </div>
          )}
          <div className="card-footer">
            <div className="comment-icon">
              <img
                className="comment-icon"
                onClick={() => setShowComments(!showComments)}
                src="./image/icons/message1.svg"
                alt="comment"
              />
              <span>{post.comments.length}</span>
            </div>
            <LikeButton post={post} />
            <img
              src="./image/icons/share.svg"
              alt="share"
              className="share-icon"
            />
          </div>
          {showComments && <CardComments post={post} />}
        </>
      )}
    </li>
  );
};

export default Card;
