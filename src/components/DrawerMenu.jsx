import { createTheme, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Box, IconButton } from "@material-ui/core";
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
    margin: '3%',
    position: 'fixed',
    zIndex: '1000',
};
const MenuItem = ({ icon, text, to }) => {
    return (
        <HashLink to={to} style={linkStyles}>
            <ListItem button>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={ <Typography variant='h5' style={{ color: "#3d4e4e" }} >{text}</Typography>} />
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

    return (
        <Box sx={{ display: 'flex', backgroundColor: '#e6e6e6'}}>
            <IconButton style={iconStyle} edge='start' 
                color='inherit' aria-label='logo' onClick={toggleDrawer(true)}>
                <MenuIcon style={{ height: '2.5rem', width: '2.5rem' }}/>
            </IconButton>
            <Drawer transitionDuration={450} anchor='left' 
                open={open} onClose={toggleDrawer(false)}>
                <Box role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)} >
                    <List>
                        <MenuItem icon={<HomeIcon />} text="Home" to="#home" />
                        <MenuItem icon={<PersonIcon />} text="Profile" to="#profile" />
                        <MenuItem icon={<VerifiedUserIcon />} text="Experience" to="#experience" />
                        <MenuItem icon={<LayersIcon />} text="Technology" to="#technology" />
                        <MenuItem icon={<SchoolIcon />} text="Education" to="#education" />
                        <MenuItem icon={<ShareIcon />} text="Connect" to="#connect" />
                    </List>
                </Box>
            </Drawer>
        </Box>
    )
}