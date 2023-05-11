import "./post.css";
import test from "./fruit2.jpg";


function Post() {

  return (
    <div className="post">
      <div className="pro">
        <div>
          {/* username  */}
          <h3>username</h3>
        </div>
        {/*catogories  */}
        <p>Mongolian</p>
      </div>
      <div className="post-img">
        {/* Heading */}
        <p>Hoolnii Ner</p>
        {/* image */}
        <img alt="" src={test} />
        <div className="post-dis">
          <div>
            {/* Arga */}
            <h3>Arga</h3>
            <br />
            <p></p>
          </div>
          <div>
            {/* orts */}
            <h3>Orts</h3>
            <br />
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
