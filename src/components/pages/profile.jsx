import { Typography, Paper, Avatar, Box, styled } from "@material-ui/core";
import { headerHeight } from "../constants/constants";
import { profile, avatar_src } from "../data/profileData";

const lightBlue = '#2f5975';

const profileTextStyle = {
    height: headerHeight,
    backgroundColor: '#284b63',
    color: '#ffffff',
    textAlign: 'center',
    padding: '10vh',
}
const profileDetailStyle = {
    backgroundColor: lightBlue,
    height: '100vh',
}
const CenteredPaper = styled(Paper)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40vh',
    backgroundColor: '',
}));
const promptTextStyle = {
    border: '1px 0 solid red',
    color: '#ffffffb3',
    flex: '1',
    textAlign: 'right',
    marginRight: '1vw',
}
const avatarStyles = {
    width:'20rem', 
    height: '20rem',
    border: '3px solid #fff',
}
const profileAnswerStyle = {
    flex: '1',
    textAlign: 'left',
    marginLeft: '1vw',
    color: '#ffffff',
    paddingLeft: '2vw',
    borderLeft: '1px Solid #437799',
    marginBottom: '2vh',
}
const PromptAndAnswer = ({prompt, answer}) => {
    return (
        <Box display="flex" justifyContent="center">
          <div style={promptTextStyle}>
            <Typography variant="h5" >{prompt}</Typography>
          </div>
          <div style={profileAnswerStyle}>
            <Typography variant="h4" >{answer}</Typography>
          </div>
        </Box>
    );
};
const Profile = () => {
    return (
        <div id='profile'>
            <Paper square style={profileTextStyle} id="justBelowFront">
                <Typography variant='h3'>
                    Profile
                </Typography>
            </Paper>
            <Paper square style={{backgroundColor:'#2f5975', height:'5vh'}}></Paper>
            <Paper square  style={profileDetailStyle}>
                <CenteredPaper square elevation={0} style={{backgroundColor: lightBlue}}>
                    <Avatar src={ avatar_src } style={avatarStyles} />
                </CenteredPaper>
                <Paper square elevation={0} style={{backgroundColor:'#2f5975', height:'5vh'}}/>
                
                {
                    Object.entries(profile).map(([prompt, answer]) => (
                        <PromptAndAnswer prompt={ prompt } answer={ answer } /> ))
                }
            </Paper>
        </div>
    );
};
export default Profile;