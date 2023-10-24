import { Typography, Paper, Avatar, Box, styled } from "@material-ui/core";
const lightBlue = '#2f5975';

const profileTextStyle = {
    height: '30vh',
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
    width:'auto', 
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
    marginBottom: '1vh',
}
const PromptAndAnswer = ({prompt, answer}) => {
    return (
        <Box display="flex" justifyContent="center">
          <div style={promptTextStyle}>
            <Typography>{prompt}</Typography>
          </div>
          <div style={profileAnswerStyle}>
            <Typography>{answer}</Typography>
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
                    <Avatar src="/images/avatar.jpg" style={avatarStyles} />
                </CenteredPaper>
                <Paper square elevation={0} style={{backgroundColor:'#2f5975', height:'5vh'}}/>
                {/* profile details text */}
                <PromptAndAnswer prompt='Name' answer='Abraham Bisrat'/>
                <PromptAndAnswer prompt='Birth Day' answer='2/12/2010'/>
                <PromptAndAnswer prompt='Titles' answer='Software Engineer'/>
                <PromptAndAnswer prompt='Locations' answer='Seattle Washington, US'/>
            </Paper>
        </div>
    );
};
export default Profile;