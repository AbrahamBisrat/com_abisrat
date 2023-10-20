import React from 'react';
import { Typography, AppBar, Card, CardActions, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { DrawerMenu } from './components/DrawerMenu';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
    return (
        
        <DrawerMenu />

    );
}

export default App;