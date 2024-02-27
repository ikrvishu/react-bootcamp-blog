import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostsList.module.css";
import { useState } from "react";
import Modal from "./Modal";

function PostsList(props) {
  return (
    <>
      {props.posts.length > 0 && (
        <ul className={classes.posts}>
          {props.posts.map((p, index) => (
            <Post
              key={index}
              author={p.author}
              body={p.body}
              cardColor={props.cardColors[index]}
            />
          ))}
        </ul>
      )}
      {props.posts.length == 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no Posts yet.</h2>
          <p> Please try adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
