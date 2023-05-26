import "./post.css";
import test from "./fruit2.jpg";
import Pro from "./pro-test.jpeg";

function Post() {
  return (
    <div className="post">
      <div className="pro">
        <div>
          <img src={Pro} alt="" />
          {/* username  */}
          <h3>username</h3>
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
