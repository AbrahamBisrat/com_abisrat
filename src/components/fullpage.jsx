import FrontPage from "./pages/welcome";
import Profile from "./pages/profile";
import Experience from "./pages/experience";
import Education from "./pages/education";
import Connect from "./pages/connect";
import Technology from "./pages/technology";
import Blog from "./pages/blog";

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