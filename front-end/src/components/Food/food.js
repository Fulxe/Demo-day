import "./food.css";
import "../login/sign-up.css";
import Footer from "../Footer/footer";
import AnimatedPage from "../AnimatedPage";
import Cate from "../category/category";
import React, { useEffect, useRef, useState } from "react";
import Post from "./post/post";
import axios from "axios";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";

function Food() {
  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = useState([]);

  const getAllPosts = async () => {
    try {
      const { data } = await axios({
        method: "GET",
        url: "http://localhost:8000/food-posts",
      });

      setPosts(data.post);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <AnimatedPage>
      <div className="Food">
        <div className="food">
          <div className="food-line1">
            <Cate />
          </div>
          <div className="food-line2">
            {posts?.map((cur) => (
              <Post key={cur._id} {...cur} />
            ))}
          </div>
          <div className="food-line3"></div>
        </div>

        <div className="post-add">
          <button
            onClick={() => {
              setShowModal(!showModal);
            }}
          >
            Post
          </button>
        </div>
        {showModal && (
          <AddFoodModal
            onClose={() => setShowModal(!showModal)}
            getAllPosts={getAllPosts}
          />
        )}
        <Footer />
      </div>
    </AnimatedPage>
  );
}

export default Food;

const AddFoodModal = ({ onClose, getAllPosts }) => {
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [postValue, setPostValue] = useState({});
  const imageInputRef = useRef();

  const uploadFile = async () => {
    const uploadingFile = imageInputRef.current.files[0];

    const imageRef = ref(storage, `images/${uploadingFile.name + v4()}`);
    const imageRes = await uploadBytes(imageRef, uploadingFile);

    const url = await getDownloadURL(imageRes.ref);
    return url;
  };

  const addPost = async () => {
    try {
      const id = localStorage.getItem("id");
      const imageUrl = await uploadFile();

      await axios({
        method: "POST",
        url: "http://localhost:8000/create-food-post",
        data: {
          Category: "Mongolia",
          FoodName: postValue.foodName,
          Image: imageUrl,
          Recipe: postValue.recipe,
          Ingredients: postValue.ingredients,
          creator: id,
        },
      });

      setPostValue({});
      await getAllPosts();
      onClose();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="add-post">
      <div className="add">
        <button onClick={onClose}>Cancel</button>
        <div className="post-cate" onClick={() => setIsOpenCategory(true)}>
          <p>Category</p>
          {isOpenCategory && (
            <div className="add-category">
              <Cate />
            </div>
          )}
        </div>
        <button onClick={() => addPost()}>Post</button>
        <div className="post-post">
          <input
            style={{ color: "white" }}
            placeholder="Food name"
            onChange={(e) => {
              setPostValue((prev) => ({ ...prev, foodName: e.target.value }));
            }}
          />
          <input ref={imageInputRef} type="file" />
        </div>
        <div className="post-post2">
          <div>
            <span>Ingredients</span>
            <textarea
              className="form-control"
              onChange={(e) =>
                setPostValue((prev) => ({
                  ...prev,
                  ingredients: e.target.value,
                }))
              }
            >
              {postValue?.ingredients}
            </textarea>
          </div>
          <div>
            <span>Recipe</span>
            <textarea
              className="form-control"
              onChange={(e) =>
                setPostValue((prev) => ({ ...prev, recipe: e.target.value }))
              }
            >
              {postValue?.recipe}
            </textarea>
          </div>
        </div>
      </div>
    </div>
  );
};
