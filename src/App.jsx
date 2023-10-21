import React from 'react';
import { Typography, AppBar, Card, CardActions, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { DrawerMenu } from './components/DrawerMenu';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FullPage from './components/fullpage';

const App = () => {
    return (
        <Router>
            <CssBaseline />
            <DrawerMenu />
            <FullPage />
        </Router>
    );
}

export default App;