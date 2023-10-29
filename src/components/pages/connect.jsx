import { Typography, IconButton, Box, Paper, Button, TextField, TextareaAutosize, createTheme } from "@material-ui/core";
import { useState } from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Tooltip from "@material-ui/core/Tooltip";
import { headerHeight } from "../constants/constants";
import { githubUrl, linkedinUrl } from "../data/profileData";
import { LambdaURL } from "../data/config";

const p = (text) => console.log(text);
const theme = createTheme();
const profileTextStyle = {
    height: headerHeight,
    backgroundColor: '#d9d9d9',
    color: 'black',
    textAlign: 'center',
    padding: '10vh',
};
const paperStyles = {
    boxShadow: 3,
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

const Lambda_URL = LambdaURL;

const Connect = () => {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // Initially disabled

  const innerFormStyles = {
    display: sent ? 'none' : 'flex',
    flexDirection: 'column',
    width: '80%',
  };

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    const isValid = emailRegex.test(inputValue);

    setValidEmail(isValid);

    // Enable the button if email is valid and other fields are not empty
    setIsButtonDisabled(!isValid || inputValue.trim() === '' || !document.querySelector('textarea').value.trim() === '');
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
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (response.ok) {
          this.handleSuccess();
        } else {
          // notify the user
          // this.handleError();
        }
      })
      .catch(() => {});

    setSending(false);
    setSent(true);
  };

  const EmailForm = () => {
    return (
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} style={innerFormStyles}>
        <TextField
          label="email"
          name="email"
          variant="outlined"
          value={email}
          margin="normal"
          onChange={handleEmailChange}
          error={!validEmail}
          helperText={!validEmail ? 'Invalid email address' : ''}
          id="email"
          required
        />
        <TextField
          variant="outlined"
          margin="normal"
          name="subject"
          label="Subject"
          type="text"
          id="subject"
        />
        <TextareaAutosize
          variant="outlined"
          minRows={5}
          placeholder="Message ..."
          style={textAreaStyles}
          name="message"
        />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            style={{ margin: '2rem 0' }}
            disabled={isButtonDisabled} // Disable the button based on user input
          >
            Send Mail
          </Button>
        </div>
      </Box>
    );
  };

  const Sent = () => {
    return (
      <Box style={{ height: '100%', ...centered }}>
        <AssignmentTurnedInIcon style={{ height: '5rem', width: '5rem', margin: '0 auto' }} />
        <Typography variant='h5'>
          Mail received, I will get back to you as soon as possible!
        </Typography>
      </Box>
    );
  };

  const Socials = () => {
    return (
      <Box style={{ display: "flex" }}>
        <Tooltip title="LinkedIn">
          <IconButton
            color="primary"
            href={ linkedinUrl }
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="GitHub">
          <IconButton
            color="primary"
            href={ githubUrl }
            target="_blank"
          >
            <GitHubIcon />
          </IconButton>
        </Tooltip>
      </Box>
    );
  };

  const Progress = () => {
    return (
      <Box style={{ ...centered }}>
            <div style={{ margin: '1rem 0' }}> Sending... </div>
            <CircularProgress />
          </Box>
    );
  };

  return (
    <div id='connect'>
      <Paper square style={profileTextStyle}>
        <Box fontWeight='large'>
          <Typography variant='h3'>
            Connect
          </Typography>
        </Box>
      </Paper>
      <Paper elevation={1} style={paperStyles}>
        <Typography component="h1" variant="h5" style={{ margin: '1rem 0' }}>
          Mail
        </Typography>
        {sending ? (
          <Progress />
        ) : (
          <EmailForm />
        )}
        {sent && (
          <Sent />
        )}
        <Socials />
      </Paper>
      <div style={{ height: '10vh' }} />
    </div>
  );
};
export default Connect;