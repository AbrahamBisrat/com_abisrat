import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Typography, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu"
import { useState } from "react";
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from "@material-ui/icons/Person";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import LayersIcon from '@material-ui/icons/Layers';
import SchoolIcon from '@material-ui/icons/School';
import ShareIcon from '@material-ui/icons/Share';

export const DrawerMenu = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo' onClick={() => setIsDrawerOpen(true)}>
                <MenuIcon />
            </IconButton>
            <Drawer anchor='left' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <List>
                    <ListItem>
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText>Home</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><PersonIcon /></ListItemIcon>
                        <ListItemText>Profile</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><VerifiedUserIcon /></ListItemIcon>
                        <ListItemText>Experience</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><LayersIcon /></ListItemIcon>
                        <ListItemText>Technology</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><SchoolIcon /></ListItemIcon>
                        <ListItemText>Education</ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><ShareIcon /></ListItemIcon>
                        <ListItemText>Connect</ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </>
    )
}