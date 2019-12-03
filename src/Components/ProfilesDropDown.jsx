import React from 'react';
import Loader from 'react-loader-spinner'
import UsersList from './UsersList'
import '../index.css'
let loaderStyle = {
    position: "relative",
    left: "40%",
}

class ProfilesDropDown extends React.Component {
    state = { 
        loading: true,
        users: []
     }
    render() {
        return ( 
            <>
            {this.state.loading ? <><Loader color="#007ACC" height={40} width={40} type="TailSpin" style={loaderStyle} /> </> : this.state.users ? this.state.users
                .map((u, i) => (<UsersList user={u} key={i} onClick={this.props.toggleProfileDropdown} closeDropdown={this.props.toggleProfileDropdown} />)) : <h4>No users. Try again later</h4>}
            </>
         );
    }
    componentDidMount = () => {
        setTimeout(() => {
            this.fetchingUsers()
        }, 1000)
    }

    fetchingUsers = async() => {
        this.setState({
            loading: true
        })
        let username = "user16"
        let password = "c9WEUxMS294hN6fF"
        let token = btoa(username + ":" + password)
        let response = await fetch("https://strive-school-testing-apis.herokuapp.com/api/profile", {
            method: "GET",
            headers: {
                "authorization" : "Basic " + token
            }
        })
        let usersData = await response.json()
        console.log(usersData)
        this.setState({
            loading: false,
            users: usersData

        })
        console.log(this.state.users)
    }
}
 
export default ProfilesDropDown;