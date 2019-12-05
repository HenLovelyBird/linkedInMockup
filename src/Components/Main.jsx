import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Container} from 'reactstrap';
import  { Redirect } from 'react-router-dom'
import Navigation from './Navigation';
import Profile from './Profile';
import CurrentUserPage from './CurrentUserPage';
import Newsfeed from './Newsfeed';
import Login from './Login'


class Main extends React.Component {
    render() {
        return (
            <Router>
            <Navigation />
            
            <Container className="parentcontainer">
                <Route path="/" exact render={() => <Redirect to="/Login" />} />
                <Route path="/login" component={Login} />
                <Route path="/Profile" component={Profile} />
                <Route path="/currentUserPage:userId" component={CurrentUserPage} />
                <Route path="/Newsfeed" component={Newsfeed}/>
            </Container>   
        </Router>
        );
    }
}

export default Main;