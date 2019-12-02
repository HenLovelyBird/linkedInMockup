import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Container} from 'reactstrap';
import Navbar from './Navbar';
import Profile from './Profile';

class Main extends React.Component {
    render() {
        return (
            <Router>
            <Navbar />
            <Container>
                <Route path="/Profile" component={Profile} />
            </Container>   
        </Router>
        );
    }
}

export default Main;