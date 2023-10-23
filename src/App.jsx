import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { DrawerMenu } from './components/DrawerMenu';
import { BrowserRouter as Router} from 'react-router-dom';
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