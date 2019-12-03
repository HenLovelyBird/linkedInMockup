import React from 'react';
import {Container} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt} from '@fortawesome/free-solid-svg-icons'


class AboutUs extends React.Component {
    
    render() {
        return (<>
            
                {this.props.profile.bio ? <> 
                    <Container flex className="my-5">
                        <div>AboutUs={this.props.profile.bio}</div>

                        <FontAwesomeIcon onClick={this.setModal} 
                        className="fapencil" 
                        icon={faPencilAlt}/>
                    </Container> </> : 
                <><div>Profile Loading...</div></>}}

        </>);
    }

export default AboutUs;