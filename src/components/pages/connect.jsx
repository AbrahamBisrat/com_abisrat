import { Typography, Box, Paper, Button, TextField, TextareaAutosize, createTheme, } from "@material-ui/core";
import { useState } from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
// import TaskAltIcon from '@mui/icons-material/TaskAlt';

const theme = createTheme();
const profileTextStyle = {
    height: '30vh',
    backgroundColor: '#d9d9d9',
    color: 'black',
    textAlign: 'center',
    padding: '10vh',
};
const paperStyles = {
    boxShadow: 3,
    height: '40vh',
    width: '70vw',
    margin: '0 auto',
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
};
const textAreaStyles = {
    width: '100%',
    margin: '1rem 0',
    padding: '1rem',
    color: theme.palette.primary,
    fontFamily: theme.typography.fontFamily,
};
const centered = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
};
const Lambda_URL = "https://zjtvr3rz2ncske7vyartmlnryi0hpufp.lambda-url.us-east-1.on.aws/";
const p = (text) => console.log(text);
const Connect = () => {
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    
    const innerFormStyles = {
        display: sent ? 'none' : 'flex',
        flexDirection: 'column',
        width: '80%',
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        setSending(true);
        const data = new FormData(event.currentTarget);
        const payload = {
            email: data.get("email"),
            subject: data.get("subject"),
            message: data.get("message"),
        };
        await new Promise((resolve) => setTimeout(resolve, 2000));
        p(payload);
        fetch(Lambda_URL, {
                mode: 'no-cors',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin" : "*",
                    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                },
                body: JSON.stringify(payload),
            })
            .then((response) => {
                if (response.ok) {
                    this.handleSuccess();
                } else {
                    // notify user
                    //this.handleError();
                }
            })
            .catch(() => {});

        setSending(false);
        setSent(true);
    };

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(true);

    const handleEmailChange = (e) => {
        const inputValue = e.target.value;
        setEmail(inputValue);

        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

        const isValid = emailRegex.test(inputValue);

        setValidEmail(isValid);
    };

    return (
        <div id='connect'>
            <Paper square style={profileTextStyle} >
                <Box fontWeight='large'>
                    <Typography variant='h3'>
                        Connect
                    </Typography>
                </Box>
            </Paper>
            <Paper elevation={1} style={paperStyles} >
                <Typography component="h1" variant="h5" style={{ margin: '1rem 0' }}>
                    Mail
                </Typography>
                {sending ? (
                    <Box style={{ ...centered }}>
                        <div style={{ margin: '1rem 0' }}> Sending... </div>
                        <CircularProgress />
                    </Box>
                ) : (
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} style={ innerFormStyles }>
                        
                        <TextField label="Email" variant="outlined" value={email} margin="normal"
                            onChange={handleEmailChange} error={!validEmail} 
                            helperText={!validEmail ? 'Invalid email address' : ''} id="email"
                            required
                        />
                        
                        <TextField variant="outlined" margin="normal" name="subject" label="Subject" type="text" id="subject" />

                        <TextareaAutosize variant="outlined" minRows={5} placeholder="Message ..."
                            style={textAreaStyles} name="message" />
                        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }} style={{ margin: '2rem 0' }}  disabled={!validEmail} >
                            Send Mail
                        </Button>
                    </Box>
                )}
                {sent && (
                    <Box style={{height: '100%', ...centered}}>
                        <AssignmentTurnedInIcon style={{ height: '5rem', width: '5rem', margin: '0 auto', }} />
                        
                        <Typography variant='h5'>
                            Got it, I will get back to you as soon as possible.
                        </Typography>
                    </Box>
                    )
                }
            </Paper>
            <div style={{ height: '10vh' }}/>
        </div>
    );
};
export default Connect;