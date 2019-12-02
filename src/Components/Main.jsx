import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Container} from 'reactstrap';
import Navigation from './Navigation';
import ProfileHeader from './ProfileHeader';

class Main extends React.Component {
    render() {
        return (
            <Router>
            <Navigation />
            <Container>
                <Route path="/ProfileHeader" exact component={ProfileHeader} />
            </Container>   
        </Router>
        );
    }
}

export default Main;