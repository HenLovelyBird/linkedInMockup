import React from 'react';
import Loader from 'react-loader-spinner';
import CurrentProfileHeader from './CurrentProfileHeader'
import {Row} from'reactstrap'
let loaderStyle = {
    position: "absolute",
    left: "50%",
    top: "50%"
}

class CurrentUserPage extends React.Component {
    state = { 
        loading: true,
        profile: ''
     }
    render() { 
        return ( 
            <Row>
                {this.state.loading ? <><Loader color="#007ACC" height={40} width={40} type="TailSpin" style={loaderStyle} /> </> : <CurrentProfileHeader userData={this.state.profile} />}
            </Row>
         );
    }
    componentDidMount = () => {
        this.fetchingCurrentUser()
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.match.params.userId !== this.props.match.params.userId){
            this.fetchingCurrentUser()
        }
    }

    fetchingCurrentUser = async() => {
        this.setState({
            loading: true
        })
        let username = "user16"
        let password = "c9WEUxMS294hN6fF"
        let token = btoa(username + ":" + password)
        let response = await fetch("https://strive-school-testing-apis.herokuapp.com/api/profile/" + this.props.match.params.userId, {
            method: "GET",
            headers: {
                "Authorization": "Basic " + token
      
            }
        })
        let prof = await response.json()
        console.log(prof);
        setTimeout(() => {
            this.setState({
                profile: prof,
                loading: false
            })
        }, 1500)
    }
}
 
export default CurrentUserPage;