import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Container} from 'reactstrap';
import Navbar from './Navbar';
import ProfileHeader from './ProfileHeader';

class Main extends React.Component {
    render() {
        return (
            <Router>
            <Navbar />
            <Container>
                <Route path="/ProfileHeader" exact component={ProfileHeader} />
            </Container>   
        </Router>
        );
    }
}

export default Main;