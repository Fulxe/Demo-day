import "./profile.css";
import AnimatedPage from "../AnimatedPage";
import Footer from "../Footer/footer"; 
import Post from "../Food/post/post"

function Profile() {
  return (
    <AnimatedPage>
      <div className="Profile">
        <div className="profile">
          <div className="profile-info"></div>
          <div className="profile-posts">
            <p className="p">Post alga</p>
            <Post/>
          </div>
        </div>
      </div>
        <Footer />
    </AnimatedPage>
  );
}

export default Profile;
