import "./profile.css";
import AnimatedPage from "../AnimatedPage";
import Footer from "../Footer/footer";
import Post from "../Food/post/post";
import Protest from "./pro-test.jpeg";
import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState({});

  // User login
  const getUser = async () => {
    const id = localStorage.getItem("uid");
    console.log(id)

    // if(!id) alert('login')

    // const { data } = await axios.get(`http://localhost:1000/${id}`);
    const { data } = await axios.get(`http://localhost:8000/user`, {
      body: { id },
    });
    setUser(data.data);
    console.log(data);
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
                <p>Postiin too:</p>
                <p></p>
              </div>
              <div>
                <p>Email:</p>
                <p>{user?.email}</p>
              </div>
              <button onClick={() => logout()}>Logout</button>
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
