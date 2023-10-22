import { Typography, Paper, Avatar, Box, styled } from "@material-ui/core";

const profileStyle = {
    // height: '100vh',
}
const profileTextStyle = {
    height: '30vh',
    backgroundColor: '#284b63',
    color: '#ffffff',
    textAlign: 'center',
    padding: '10vh',
}
const profileDetailStyle = {
    backgroundColor: '#2f5975',
    height: '100vh',
}
const CenteredPaper = styled(Paper)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40vh',
    backgroundColor: '#2f5975',
}));
const profileDetailsTextStyle  = {
    backgroundColor: '#2f5975',
    display: 'flex',
    justifyContent: 'center',
    borderRight: '1',
    borderColor: 'red'
}
const promptTextStyle = {
    border: '1px 0 solid red'
}

const Profile = () => {
    return (
        <div style={profileStyle} id='profile'>
            <Paper square style={profileTextStyle}>
                <Typography variant='h3'>
                    Profile
                </Typography>
            </Paper>
            <Paper square style={{backgroundColor:'#2f5975', height:'5vh'}}></Paper>
            <Paper square  style={profileDetailStyle}>
                <CenteredPaper square elevation={0}>
                    <Avatar src="/images/avatar.jpg" style={{ width:'auto', height: '100%', border: '3px solid #fff'}} />
                </CenteredPaper>
                <Paper square elevation={0} style={{backgroundColor:'#2f5975', height:'5vh'}}/>
                <Paper square style={profileDetailsTextStyle}>
                    <div style={{display: 'flex', justifyContent: 'center', flexWrap:'true'}}>
                        <div style={promptTextStyle}>
                            <Typography variant='h5'>
                                Name
                            </Typography>
                        </div>
                        <div style={{ marginLeft: '2vw' }}>
                            <Typography>
                                Abraham Bisrat
                            </Typography>
                        </div>
                    </div>
                </Paper>
            </Paper>
            
        </div>
    );
};
export default Profile;