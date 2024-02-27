import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";
import NewPost from "./components/NewPost";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const posts = [];

  const [allPosts, setAllPosts] = useState(posts);
  const cardColorzzzz = [];
  const [modalIsVisible, setModalIsVisile] = useState(false);
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEntereAuthor] = useState("");

  function changeBodyhandler(event) {
    setEnteredBody(event.target.value);
  }

  function changeAuthorhandler(event) {
    setEntereAuthor(event.target.value);
  }

  function onCreatePost(event) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify({
        author: enteredAuthor,
        body: enteredBody,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    event.preventDefault();

    console.log(enteredAuthor, enteredBody);
    setAllPosts((prev) => [
      ...prev,
      {
        author: enteredAuthor,
        body: enteredBody,
      },
    ]);

    setModalIsVisile(false);
  }

  return (
    <>
      <MainHeader onOpen={() => setModalIsVisile(true)} />
      {modalIsVisible ? (
        <Modal onClose={() => setModalIsVisile(false)}>
          <NewPost
            onBodyChange={changeBodyhandler}
            onAuthorChange={changeAuthorhandler}
            onCreatePost={onCreatePost}
            onCancel={() => setModalIsVisile(false)}
          />
        </Modal>
      ) : null}
      <main>
        <PostsList posts={allPosts} cardColors={cardColorzzzz} />
      </main>
    </>
  );
}
export default App;
