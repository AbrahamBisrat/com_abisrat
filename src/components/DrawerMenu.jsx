import { createTheme, Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Typography, IconButton, makeStyles } from "@material-ui/core";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import MenuIcon from "@material-ui/icons/Menu"
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from "@material-ui/icons/Person";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import LayersIcon from '@material-ui/icons/Layers';
import SchoolIcon from '@material-ui/icons/School';
import ShareIcon from '@material-ui/icons/Share';

const theme = createTheme();
const linkStyles = {
    textDecoration: 'none',
    color: theme.palette.text.primary,
};
const iconStyle = {
    margin: '1%',
    position: 'fixed',
    zIndex: '1000'
};
const MenuItem = ({ icon, text, to }) => {
    return (
        <HashLink to={to} style={linkStyles}>
            <ListItem button>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
        </HashLink>
    );
};

export const DrawerMenu = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (inOpen) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }
        setOpen(inOpen);
    };
    const paperStyle = {
        width: "15%", // Set the width for desktop
        "@media (max-width: 600px)": {
            width: "40%", // Set the width for mobile
        },
    };

    return (
        <Box sx={{ display: 'flex', backgroundColor: '#e6e6e6'}}>
            <IconButton style={iconStyle} size='large' edge='start' 
                color='inherit' aria-label='logo' onClick={toggleDrawer(true)}>
                <MenuIcon />
            </IconButton>
            {/* PaperProps={{ style: { width: '15%' } }}  drawer width*/} 
            <Drawer transitionDuration={450} anchor='left' 
                open={open} onClose={toggleDrawer(false)}>
                <Box role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)} >
                    <List>
                        <MenuItem icon={<HomeIcon />} text="Home" to="#home" />
                        <MenuItem icon={<PersonIcon />} text="Profile" to="#profile" />
                        <MenuItem icon={<VerifiedUserIcon />} text="Experience" to="#exprience" />
                        <MenuItem icon={<LayersIcon />} text="Technology" to="#technology" />
                        <MenuItem icon={<SchoolIcon />} text="Education" to="#education" />
                        <MenuItem icon={<ShareIcon />} text="Connect" to="#connect" />
                    </List>
                </Box>
            </Drawer>
        </Box>
    )
}