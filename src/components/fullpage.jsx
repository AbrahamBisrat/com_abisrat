import FrontPage from "./welcome";
import Profile from "./profile";
import Experience from "./experience";
import Education from "./education";
import Connect from "./connect";
import Technology from "./technology";
import Blog from "./blog";

const FullPage = () => {
    return (
        <div>
            <FrontPage />
            <Profile />
            <Experience />
            <Technology />
            <Education />
            <Blog />
            <Connect />
        </div>
    );
}
export default FullPage;