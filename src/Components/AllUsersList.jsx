import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Row, Col} from 'reactstrap';
let divStyle = { 
    height: "90px",
    color: "black"
}
let imgStyle = {
    width: "70px",
    height: "70px",
    objectFit: "cover",
    borderRadius: "50%"
}
class AllUsersList extends Component {
    state = {  }
    render() { 
        return ( 
        <>
            <Link to={"/currentUserPage" + this.props.user.username} onClick={this.props.toogleDropdown} style={{ textDecoration: 'none'}}>
            <Row style={divStyle} className="mb-2">
                {this.props.user.image ? <Col md="3"><img style={imgStyle} src={this.props.user.image} alt="Nice pic, Jeff" /></Col> : <Col md="3"><img  style={imgStyle} src="https://cdn3.iconfinder.com/data/icons/flat-pro-user-management-set-4/32/user-unknown-woman-512.png" /></Col>}
                <Col md="9" className="pt-2" style={{display: "inline-block"}}><span style={{fontWeight: "bold"}}>{this.props.user.name} {this.props.user.surname}</span> <br/> {this.props.user.title}</Col>
            </Row>
            </Link>
        </>
         );
    }
}
 
export default AllUsersList;