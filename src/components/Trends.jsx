import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrends } from "../actions/post.actions";
import { isEmpty } from "./Utils";
import { NavLink } from "react-router-dom";

const Trends = () => {
  const posts = useSelector((state) => state.allPostsReducer);
  const usersData = useSelector((state) => state.usersReducer);
  const trendList = useSelector((state) => state.trendingReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isEmpty(posts[0])) {
      const postsArr = Object.keys(posts).map((i) => posts[i]);
      let sortedArray = postsArr.sort((a, b) => {
        return b.likers.length - a.likers.length;
      });
      sortedArray.length = 3;
      dispatch(getTrends(sortedArray));
    }
  }, [posts, dispatch]);

  return (
    <div className="trending-container">
      <h4>Trending</h4>
      <NavLink exact to="/trending">
        <ul>
          {trendList.length &&
            trendList.map((post) => {
              // console.log(post);
              return (
                <li key={post._id}>
                  <div>
                    {post.file && (
                      <img
                        src={`http://localhost:4000/${post.file}`}
                        alt="post-pic"
                      />
                    )}
                    {post.video && (
                      <iframe
                        src={post.video}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={post._id}
                      ></iframe>
                    )}
                    {isEmpty(post.image) && isEmpty(post.video) && (
                      <img
                        src={
                          usersData[0] &&
                          usersData
                            .map((user) => {
                              // console.log("userTrend", user);
                              if (user._id === post.posterId._id) {
                                return user.image;
                              } else return null;
                            })
                            .join("")
                        }
                        alt="profil-pic"
                        className="trend-pic"
                      />
                    )}
                  </div>
                  <div className="trend-content">
                    <p>{post.message}</p>
                    <span>Lire</span>
                  </div>
                </li>
              );
            })}
        </ul>
      </NavLink>
    </div>
  );
};

export default Trends;
