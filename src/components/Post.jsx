// const names = ["Kishan", "Siddhant", "Vishal"];
// function Post() {
//   let chosenName = "";
//   const randomNum = Math.random();

//   switch (true) {
//     case randomNum < 0.3:
//       chosenName = names[0];
//       break;
//     case randomNum < 0.5 && randomNum > 0.3:
//       chosenName = names[1];
//       break;
//     case randomNum > 0.5:
//       chosenName = names[2];
//       break;
//   }

//   return (
//     <div>
//       <p>{chosenName}</p>
//       <p>React is Awesome!</p>
//     </div>
//   );
// }

// export default Post;

import classes from "./Post.module.css";

function Post(props) {
  return (
    <div
      className={classes.post}
      style={{
        backgroundColor: props.cardColor,
      }}
    >
      <p className={classes.author}>{props.author}</p>
      <p className={classes.text}>{props.body}</p>
      <p className={classes.text}>{props.says}</p>
      <span> {props.publishedDate} </span>
    </div>
  );
}

export default Post;
