import "./post.css";
import test from "./fruit2.jpg";

function Post() {
  return (
    <div className="post">
      <div className="profile">
        <div>
          {/* profile image */}
          <img alt="" src={test} />

          {/* username  */}
          <h3>BHFVGdhbfhdblufhk dblh</h3>
        </div>
        {/*catogories  */}
        <p>Mongolian</p>
      </div>
      <div>
        {/* Heading */}
        <p></p>

        {/* image */}
        <img alt="" />

        {/* orts */}
        <input />
      </div>
    </div>
  );
}

export default Post;
