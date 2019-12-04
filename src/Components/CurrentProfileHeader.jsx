import React, { Component } from 'react';
import {Col} from 'reactstrap'
import '../index.css'
let divStyle = {
    backgroundImage: "url(https://miro.medium.com/max/1124/1*92adf06PCF91kCYu1nPLQg.jpeg",
    width: "100%",
    height: "200px"
}
let userImgStyle = {
    width: "200px",
    height: "200px",
    objectFit: "cover",
    borderRadius: "50%",
    border: "3px solid white",
    position: "relative",
    top: "-100px",
    left: "50px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
}

class CurrentProfileHeader extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <div style={divStyle}></div>
                {this.props.userData.image ? <img style={userImgStyle} src={this.props.userData.image} alt=""/> : <img style={userImgStyle} src="https://www.legalniewsieci.pl/!data/newsy/news_1982.jpg" /> }
                <div className="user-info-current-profile-header">
                    <h4>{this.props.userData.name} {this.props.userData.surname}</h4>
                    <p style={{margin: "5px 0px"}}>{this.props.userData.title}</p>
                    <p style={{margin: "5px 0px"}}>{this.props.userData.area}</p>
                </div>
                </>
         );
    }
}
 
export default CurrentProfileHeader;