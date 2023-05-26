import "./profile.css";
import AnimatedPage from "../AnimatedPage";
import Footer from "../Footer/footer";
import Post from "../Food/post/post";
import Protest from "./pro-test.jpeg";

function Profile() {
  return (
    <AnimatedPage>
      <div className="Profile">
        <div className="profile">
          <div className="profile-info">
            <div className="pro-image">
              <img alt="" src={Protest} />
              <button>Change</button>
            </div>
            <div className="pro-info">
              <div>
                <p>Ner:</p>
                <input></input>
              </div>
              <div>
                <p>Postiin too:</p>
                <input></input>
              </div>
              <div>
                <p>Saved posts:</p>
                <input></input>
              </div>
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
