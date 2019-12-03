import React from 'react';
import { wrap } from 'module';
import {Container} from 'reactstrap';

class BottomProfile extends React.Component {
    render() {
        return (
            <Container fluid className="dottedboxes">
                <div className="my-2">
                    <wrap>
                    <h4>Show recruiters you're open</h4><p>to job opportunities-you control who sees this</p>
                    </wrap>
                </div>
                <div className="my-5">
                    <wrap>
                    <h4>Showcase services</h4><p>you offer so you and your business can be found in search.</p>
                    </wrap>
                </div>
            </Container>
            
        );
    }
}

export default BottomProfile;