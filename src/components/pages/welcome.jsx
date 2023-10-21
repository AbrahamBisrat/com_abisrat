import { Typography, Box } from "@material-ui/core"


const frontPageStyle = {
    paddingLeft: '10vw',
    paddingTop: '20vh',
    height: '100vh',
    backgroundColor: '#d9d9d9',
}

const FrontPage = () => {
    
    return (
        <div style={frontPageStyle} id='home'>
            <Typography align='center' variant='h2' >
                <Box sx={{ fontWeight: '400', textShadow: '1px 1px 1px black'}}>
                    Abraham Bisrat
                </Box>
            </Typography>
            <Typography align='center' variant='h4'>
                <Box sx={{ paddingTop: '10vh', textShadow: '1px 1px 1px black'}}>
                    TODO: Animation is a must here, Like really a must
                    Software Engineer
                </Box>
            </Typography>
        </div>
    )
}
export default FrontPage;