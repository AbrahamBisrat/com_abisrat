import { useState, useEffect } from 'react';
import { Typography, Box, Paper, IconButton } from "@material-ui/core"
import { Typewriter } from "react-simple-typewriter"
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { HashLink } from "react-router-hash-link";
const centered = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};
const frontPageStyle = {
    // paddingLeft: '10vw',
    // paddingTop: '20vh',
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
};
const moreButtonStyle = {

};
const FrontPage = () => {
    const [isHidden, setIsHidden] = useState(false);
    const iconPaperStyle = {
        borderRadius: '50%',
        position: 'fixed',
        bottom: '10vh',
        left: '50%',
        transform: 'translateX(-50%)',
        transition: 'opacity 1.5s',
        opacity: isHidden ? 0 : 1,
        pointerEvents: isHidden ? 'none' : 'auto',
        ...centered
    }
    const handleType = (count) => {
        // access word count number
        // console.log(count);
    };
    const handleDone = () => {
        console.log("Done after 5 loops");
    };
    const handleScroll = () => {
        setIsHidden(true);
        window.removeEventListener('scroll', handleScroll);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <Paper square style={frontPageStyle} id='home'>
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
            <HashLink to="#justBelowFront" style={moreButtonStyle}>
                <Paper style={iconPaperStyle}>
                    <IconButton style={{ fontSize: '36'}}>
                        <ArrowDownwardIcon />
                    </IconButton>
                </Paper>
            </HashLink>
        </Paper>
    )
}
export default FrontPage;