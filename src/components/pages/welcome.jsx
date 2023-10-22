import { Typography, Box, Paper } from "@material-ui/core"
import { Typewriter } from "react-simple-typewriter"

const frontPageStyle = {
    paddingLeft: '10vw',
    paddingTop: '20vh',
    height: '100vh',
    backgroundColor: '#d9d9d9',
};
const displayWords = [
    "Software Engineer",
    "Full Stack Developer",
    "Back End Developer"
];
const nameStyle = {
    paddingTop: '5vh',
};
const titlesStyle = {
    paddingTop: '5vh',
}
const FrontPage = () => {
    const handleType = (count) => {
        // access word count number
        console.log(count);
    };
    const handleDone = () => {
        console.log("Done after 5 loops");
    };

    return (
        <Paper square elevation='6' style={frontPageStyle} id='home'>
            <Typography align='center' variant='h1' style={nameStyle} >
                <Box sx={{ fontWeight: '400'}}>
                    Abraham Bisrat
                </Box>
            </Typography>
            <Typography align='center' variant='h3' style={titlesStyle}>
                <Typewriter
                    words={displayWords}
                    loop={10000}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    onLoopDone={handleDone}
                    onType={handleType}
                />
            </Typography>
        </Paper>
    )
}
export default FrontPage;