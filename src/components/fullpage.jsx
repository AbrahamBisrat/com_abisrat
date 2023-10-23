import FrontPage from "./pages/welcome";
import Profile from "./pages/profile";
import Experience from "./pages/experience";
import Education from "./pages/education";
import Connect from "./pages/connect";
import Technology from "./pages/technology";

const fullPageStyle = {
}

const FullPage = () => {
    return (
        <div style={fullPageStyle}>
            <FrontPage />
            <Profile />
            <Experience />
            <Technology />
            <Education />
            <Connect />
        </div>
    );
}
export default FullPage;