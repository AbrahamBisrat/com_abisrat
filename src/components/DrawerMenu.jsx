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
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <div>
            {/* <Fab size='large' aria-lable='logo' style={{ position: 'fixed'}}> */}
                <IconButton style={iconStyle} size='large' edge='start' color='inherit' aria-label='logo' onClick={() => setIsDrawerOpen(true)}>
                    <MenuIcon />
                </IconButton>
            {/* </Fab> */}
            <Drawer anchor='left' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} style={{ width: '300px'}}>
                <List>
                    <Link to="#home" style={linkStyles}>
                        <ListItem button>
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <ListItemText primary={"Home"} />
                        </ListItem>
                    </Link>
                    <Link to="#profile" style={linkStyles}>
                        <ListItem button>
                            <ListItemIcon><PersonIcon /></ListItemIcon>
                            <ListItemText primary={"Profile"} />
                        </ListItem>
                    </Link>
                    <Link to="#exprience" style={linkStyles}>
                        <ListItem button>
                            <ListItemIcon><VerifiedUserIcon /></ListItemIcon>
                            <ListItemText primary={"Experience"} />
                        </ListItem>
                    </Link>
                    <Link to="#technology" style={linkStyles}>
                        <ListItem button>
                            <ListItemIcon><LayersIcon /></ListItemIcon>
                            <ListItemText primary={"Technology"} />
                        </ListItem>
                    </Link>
                    <Link to="#education" style={linkStyles}>
                        <ListItem button>
                            <ListItemIcon><SchoolIcon /></ListItemIcon>
                            <ListItemText primary={"Education"} />
                        </ListItem>
                    </Link>
                    <Link to="#connect" style={linkStyles}>
                        <ListItem button>
                            <ListItemIcon><ShareIcon /></ListItemIcon>
                            <ListItemText primary={"Connect"} />
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
        </div>
    )
}