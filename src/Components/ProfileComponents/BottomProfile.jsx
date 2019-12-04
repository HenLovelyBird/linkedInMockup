import React from 'react';
import { wrap } from 'module';
import {Container, Row} from 'reactstrap';

class BottomProfile extends React.Component {
    render() {
        return (
            <Container fluid className="dottedboxes">
                <Row>

                <div className="col-6 my-5">
                    <wrap>
                    <h5>Show recruiters you're open</h5><p>to job opportunities-you control who sees this</p>
                    </wrap>
                </div>
                <br/>
                <div className="col-6 my-5">
                    <wrap>
                    <h5>Showcase services</h5><p>you offer so you and your business can be found in search.</p>
                    </wrap>
                </div>
                </Row>
            </Container>
            
        );
    }
}

export default BottomProfile;