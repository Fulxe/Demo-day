import "./profile.css";
import AnimatedPage from "../AnimatedPage";
import Footer from "../Footer/footer";
import Post from "../Food/post/post";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { CategoryContext } from "../../provider/category";

function Profile() {
  const { user, setUser } = useContext(CategoryContext);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  // User login
  const getUser = async () => {
    const id = localStorage.getItem("id");
    await axios
      .get(`http://localhost:8000/user/${id}`)
      .then((res) => {
        setUser(res.data.data);
      })
      .then(console.log("===>", user))
      .catch((err) => {
        console.log(err);
      });
  };
  const getPosts = async () => {
    try {
      const id = localStorage.getItem("id");
      const { data } = await axios({
        method: "GET",
        url: `http://localhost:8000/foods-by-creator/${id}`,
      });

      setPosts(data.data);
    } catch (error) {}
  };

  const logout = () => {
    localStorage.removeItem("id");
  };

  useEffect(() => {
    getUser();
    getPosts();
  }, []);

  return (
    <AnimatedPage>
      <div className="Profile">
        <div className="profile">
          <div className="profile-info">
            <div className="pro-info">
              <div className="food-post-information">
                <h4>Username:</h4>
                <p>{user?.username}</p>
              </div>
              <div className="food-post-information">
                <h4>Email:</h4>
                <p>{user?.email}</p>
              </div>
              <div className="food-post-information">
                <h4>Post count:</h4>
                <p>{posts.length}</p>
              </div>
              <button
                className="profile-logout"
                onClick={() => logout(navigate("/"))}
              >
                Logout
              </button>
            </div>
          </div>
          <div className="profile-posts">
            <p className="p">You have not created any posts yet.</p>
            {posts.map((cur) => (
              <Post {...cur} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </AnimatedPage>
  );
}

export default Profile;
