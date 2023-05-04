import "./vegetablepost.css";
import { useState } from "react";

function Fruitpost(props) {
  const { img, name } = props;
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
      <img className="fruit-post-image" src={img} alt="" onClick={onClick} />
    </div>
  );
};

const PostModal = (props) => {
  const { img, name, onClick } = props;

  return (
    <div className="fruit-category">
      <div>{name}</div>
      <img className="fruit-post-image-modal" src={img} alt="" />
    </div>
  );
};

export default Fruitpost;
