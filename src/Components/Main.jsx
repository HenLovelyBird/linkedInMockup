import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Container} from 'reactstrap';
<<<<<<< HEAD
import Navigation from './Navigation';
import ProfileHeader from './ProfileHeader';
=======
import Navbar from './Navbar';
import Profile from './Profile';
>>>>>>> 6bf8114287d50a264b5468d7fe532f5877bd4d0b

class Main extends React.Component {
    render() {
        return (
            <Router>
            <Navigation />
            <Container>
                <Route path="/Profile" component={Profile} />
            </Container>   
        </Router>
        );
    }
}

export default Main;