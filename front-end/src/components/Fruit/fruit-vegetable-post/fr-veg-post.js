import "./fr-veg-post.css";
import { useState } from "react";

function Fruitpost(props) {
  const [show, setShow] = useState(false);

  return (
    <div className="fr-c">
      <PostContent {...props} onClick={() => setShow(true)} />

      {show && (
        <div className="modal" onClick={() => setShow(false)}>
          <PostModal {...props} />
        </div>
      )}
    </div>
  );
}

const PostContent = (props) => {
  const { img, name, onClick } = props;

  return (
    <div className="fruit-category">
      <img
        className="fruit-post-image"
        width={100}
        height={100}
        src={img}
        alt=""
        onClick={onClick}
      />
    </div>
  );
};

const PostModal = (props) => {
  const { img, name, onClick, description } = props;

  return (
    <div className="fruit-category1" onClick={(e) => e.stopPropagation()}>
      <img className="fruit-post-image-modal" src={img} alt="" />
      <div className="fruit-description">
        <h1 style={{ color: "white" }}>{name}</h1>
        <p className="fruit-post-description">{description}</p>
      </div>
    </div>
  );
};

export default Fruitpost;
