import { createTheme, Drawer, Fab, List, ListItem, ListItemIcon, ListItemText, Box, Typography, IconButton, makeStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu"
import { useState } from "react";
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from "@material-ui/icons/Person";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import LayersIcon from '@material-ui/icons/Layers';
import SchoolIcon from '@material-ui/icons/School';
import ShareIcon from '@material-ui/icons/Share';
import { Switch, Route, Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";

const theme = createTheme();
const linkStyles = {
    textDecoration: 'none',
    color: theme.palette.text.primary
};
const iconStyle = {
    margin: '1%',
    position: 'fixed',
    zIndex: '1000'
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
        <Box sx={{ display: 'flex' }}>
            <IconButton style={iconStyle} size='large' edge='start' 
                color='inherit' aria-label='logo' onClick={toggleDrawer(true)}>
                <MenuIcon />
            </IconButton>
            <Drawer anchor='left' open={open} onClose={toggleDrawer(false)} style={{ width: '300px'}}>
                <Box role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)} >
                    <List>
                        <HashLink to="#home" style={linkStyles}>
                            <ListItem button>
                                <ListItemIcon><HomeIcon /></ListItemIcon>
                                <ListItemText primary={"Home"} />
                            </ListItem>
                        </HashLink>
                        <HashLink to="#profile" style={linkStyles}>
                            <ListItem button>
                                <ListItemIcon><PersonIcon /></ListItemIcon>
                                <ListItemText primary={"Profile"} />
                            </ListItem>
                        </HashLink>
                        <HashLink to="#exprience" style={linkStyles}>
                            <ListItem button>
                                <ListItemIcon><VerifiedUserIcon /></ListItemIcon>
                                <ListItemText primary={"Experience"} />
                            </ListItem>
                        </HashLink>
                        <HashLink to="#technology" style={linkStyles}>
                            <ListItem button>
                                <ListItemIcon><LayersIcon /></ListItemIcon>
                                <ListItemText primary={"Technology"} />
                            </ListItem>
                        </HashLink>
                        <HashLink to="#education" style={linkStyles}>
                            <ListItem button>
                                <ListItemIcon><SchoolIcon /></ListItemIcon>
                                <ListItemText primary={"Education"} />
                            </ListItem>
                        </HashLink>
                        <HashLink to="#connect" style={linkStyles}>
                            <ListItem button>
                                <ListItemIcon><ShareIcon /></ListItemIcon>
                                <ListItemText primary={"Connect"} />
                            </ListItem>
                        </HashLink>
                    </List>
                </Box>
            </Drawer>
        </Box>
    )
}