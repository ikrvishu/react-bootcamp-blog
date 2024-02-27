import classes from "./NewPost.module.css";
import { useState } from "react";

function NewPost({ onCreatePost, onBodyChange, onAuthorChange, onCancel }) {
  //   const [enteredBody, setEnteredBody] = useState("");
  //   function changeBodyhandler(event) {
  //     setEnteredBody(event.target.value);
  //   }
  return (
    <>
      <form className={classes.form} onSubmit={onCreatePost}>
        <p>New Post</p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onBodyChange} />

        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={onAuthorChange} />
        <p className={classes.actions}>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit">Submit</button>
        </p>
      </form>
    </>
  );
}

export default NewPost;
