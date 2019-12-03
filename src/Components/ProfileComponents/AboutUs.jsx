import React from 'react';
import {Container} from 'reactstrap';

class AboutUs extends React.Component {
    render() {
        return (
            <Container flex className="my-5">
                {this.props.AboutUs}
            </Container>
        );
    }
}

export default AboutUs;