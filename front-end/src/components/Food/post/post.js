import "./post.css";
import Pro from "./pro-test.jpeg";

function Post(props) {
  const { FoodName, Image, Recipe, Ingredients, creator } = props;

  return (
    <div className="post">
      <div className="pro">
        <div>
          {/* username  */}
          <h3>{creator?.username}</h3>
        </div>
        {/*catogories  */}
        {/* <p>Mongolian</p> */}
      </div>
      <div className="post-img">
        {/* Heading */}
        <p>{FoodName}</p>
        {/* image */}
        <img alt="Food" src={Image} />

        <div className="post-dis">
          <div>
            {/* Arga */}
            <h3>Ingredients</h3>
            <br />
            <p>{Ingredients}</p>
          </div>
          <div>
            {/* orts */}
            <h3>Recipe</h3>
            <br />
            <p>{Recipe}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
