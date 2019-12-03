import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Container} from 'reactstrap';
import Navigation from './Navigation';
import Profile from './Profile';

class Main extends React.Component {
    render() {
        return (
            <Router>
            <Navigation />
            <Container>
                <Route path="/Profile" component={Profile} />
                <Route path="/AboutUs" component={AboutUs} />
            </Container>   
        </Router>
        );
    }
}

export default Main;