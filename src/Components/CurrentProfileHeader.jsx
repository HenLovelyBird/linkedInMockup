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
let mainBoxStyle = {
    border: "0.5px solid gray",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    padding: "0px",
    marginLeft: "35px"
} 

class CurrentProfileHeader extends Component {
    state = {  }
    render() { 
        return ( 
            <Col md="8 mt-3" style={mainBoxStyle}>
                <div style={divStyle}></div>
                <img style={userImgStyle} src={this.props.userData.image} alt=""/>
                <div className="user-info-current-profile-header">
                    <h4>{this.props.userData.name} {this.props.userData.surname}</h4>
                    <p style={{margin: "5px 0px"}}>{this.props.userData.title}</p>
                    <p style={{margin: "5px 0px"}}>{this.props.userData.area}</p>
                </div>
            </Col>
         );
    }
}
 
export default CurrentProfileHeader;