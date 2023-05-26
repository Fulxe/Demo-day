import "./profile.css";
import AnimatedPage from "../AnimatedPage";
import Footer from "../Footer/footer";
import Post from "../Food/post/post";
import Protest from "./pro-test.jpeg";
import { useEffect, useState } from "react";
import { storage } from "./firebase.config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Avatar from "@mui/material/Avatar";
import axios from "axios";

function Profile() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);
  const [user, setUser] = useState({});
  const [isLoggedin, setIsLoggedin] = useState(false);

  // User login
  const getUser = async () => {
    const id = localStorage.getItem("id");

    const { data } = await axios.get(`http://localhost:8000/user`, {
      params: { id },
    });
    setUser(data.data);
    console.log(data);
  };
  const logout = () => {
    localStorage.removeItem("id");
    setIsLoggedin(false);
  };

  useEffect(() => {
    getUser();
  }, []);

  // image add
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    const imageRef = ref(storage, "image");
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
          })
          .catch((error) => {
            console.log(error.message, "error getting the image url");
          });
        setImage(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <AnimatedPage>
      <div className="Profile">
        <div className="profile">
          <div className="profile-info">
            <div className="pro-image">
              <Avatar src={url} sx={{ width: 150, height: 150 }} />
              <input
                alt=""
                type="file"
                src={Protest}
                onChange={handleImageChange}
              />
              <button onClick={handleSubmit}>Change</button>
            </div>
            <div className="pro-info">
              <div>
                <p>Ner:</p>
                <p>{user.username}</p>
              </div>
              <div>
                <p>Postiin too:</p>
                <p></p>
              </div>
              <div>
                <p>Saved posts:</p>
                <p>{user?.SavedPost?.length}</p>
              </div>
              <button onClick={logout}>Logout</button>
            </div>
          </div>
          <div className="profile-posts">
            <p className="p">Post alga</p>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
      </div>
      <Footer />
    </AnimatedPage>
  );
}

export default Profile;
