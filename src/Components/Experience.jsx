import React from 'react';
import {Container} from 'reactstrap';

class Experience extends React.Component {
    state = {
        experiences: ""
    }

    render() {
        return (<>
            <Container fluid>
                <h3>Experience</h3> 
                <br/>
                <div className="col">
                    <h6>Jobtitle One</h6>

                    {this.state.experiences ?<>
                    <div className="userexperience">
                        {this.state.experiences.text}
                    </div></> :
                    <><div>No User Experience Listed!</div></>}

                 </div>
                </Container>
        </>);
    }

    componentDidMount = async () => {
        let username = "user16";
        let password = "c9WEUxMS294hN6fF";
        let token = btoa(username + ":" + password)
        let response = await fetch("https://striveschool.herokuapp.com/api/profile/user16/experiences", {
            method: "GET",
            headers: {
                Authorization: "Basic " + token
            }
        });
        let exp = await response.json()
        this.setState({
            experiences: exp
        });
    };

}

export default Experience;