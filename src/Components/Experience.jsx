import React from 'react';
import {Container} from 'reactstrap';

class Experience extends React.Component {
    state = {
        experiences: ""
    }

    render() {
        console.log(this.state.experiences);
        return (<>
            <Container fluid>
                <h3>Experience</h3> 
                <br/>
                <div className="col">
                    <h6>Jobtitle One</h6>

                    {this.state.experiences && this.state.experiences.map((experience, index)=>(
                         <div key={index} className="userexperience">
                         {experience.company}
                     </div>
                    ))}

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
                Authorization: "Basic " + token,
            }
        });
        let exp = await response.json()
        this.setState({
            experiences: exp
        });
    };

}

export default Experience;