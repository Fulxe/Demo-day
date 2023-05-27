import "./post.css";
import test from "./fruit2.jpg";
import Pro from "./pro-test.jpeg";
import axios from "axios";
import { useEffect, useState } from "react";

function Post(props) {
  // const [foodName , recipe  ] = props
  // const [post, setPost] = useState({});

  // const getPost = async () => {

  //   const id = localStorage.getItem("id")
  //   console.log(id)
  //   const post = await axios.get(`http://localhost:8000/food-posts/${id}`);
  //   setPost(post);
  //   console.log(post);
  // };

  // useEffect(() => {
  //   getPost();
  // });

  return (
    <div className="post">
      <div className="pro">
        <div>
          <img src={Pro} alt="" />
          {/* username  */}
          <h3></h3>
        </div>
        {/*catogories  */}
        <p>Mongolian</p>
      </div>
      <div className="post-img">
        {/* Heading */}
        <p>Food name</p>
        {/* image */}
        <img alt="" src={test} />
        <div className="post-dis">
          <div>
            {/* Arga */}
            <h3>Ingeredients</h3>
            <br />
            <p></p>
          </div>
          <div>
            {/* orts */}
            <h3>Recipe</h3>
            <br />
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
