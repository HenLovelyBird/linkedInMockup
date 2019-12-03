import React from 'react';
import BgPhoto from './BgPhoto';
import '../../index.css';
import ProfileNav from './ProfileNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt} from '@fortawesome/free-solid-svg-icons'


class Profile extends React.Component {
    render() {
        return (<>
            <div>
            <BgPhoto/>
            </div>
            <div className="my5" flex>
            <img src={this.props.profile.image} alt="profile pic" id="profilepic"/>
            </div>
            <FontAwesomeIcon onClick={this.setModal} 
                className="fapencil" 
                icon={faPencilAlt}/>
            <div>
            <ProfileNav />
            </div>
            <div>
            <h2 id="profname">{this.props.profile.name}{this.props.profile.surname}</h2>
            </div>
           
            
            
        </>);
    }
}

export default Profile;