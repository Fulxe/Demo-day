import "./profile.css";
import AnimatedPage from "../AnimatedPage";
import Footer from "../Footer/footer";
import Post from "../Food/post/post";
import Protest from "./pro-test.jpeg";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { CategoryContext } from "../../provider/category";

function Profile() {
  const { user, setUser } = useContext(CategoryContext);
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
  const logout = () => {
    localStorage.removeItem("id");
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <AnimatedPage>
      <div className="Profile">
        <div className="profile">
          <div className="profile-info">
            <div className="pro-image">
              <img alt="" type="file" src={Protest} />
              <button>Change</button>
            </div>
            <div className="pro-info">
              <div>
                <p>Ner:</p>
                <p>{user?.username}</p>
              </div>
              <div>
                <p>Email:</p>
                <p>{user?.email}</p>
              </div>
              <div>
                <p>Postiin too:</p>
                <p></p>
              </div>
              <button onClick={() => logout(navigate("/"))}>Logout</button>
            </div>
          </div>
          <div className="profile-posts">
            <p className="p">Post alga</p>
            <Post />
            {/* <Post />
            <Post />
            <Post />
            <Post />
            <Post /> */}
          </div>
        </div>
      </div>
      <Footer />
    </AnimatedPage>
  );
}

export default Profile;
