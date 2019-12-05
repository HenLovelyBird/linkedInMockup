import React, { Component } from 'react';
import { Toast, ToastBody, ToastHeader, Jumbotron, Container } from 'reactstrap';
import { FaPencilAlt, FaBars } from "react-icons/fa";
import NewsModel from './NewsModel';

class NewsFeedBox extends Component {
    delete = async()=>{
        let username = "user21";
        let password = "2ruxa4MRJdUgg6cz";
        let token = btoa(username + ":" + password);
        let response = await fetch("https://striveschool.herokuapp.com/api/posts/" + this.props.newsData._id,{
              method: "DELETE",
              headers: {
                  "authorization" : "Basic " + token,
              }
          }) 
          console.log(response)
          return response
    }
    render() {
        console.log(this.props)
        return (
            <div >
                <Toast>
                <div className="mx-5 float-right">
                             {this.props.newsData.createdAt} <FaBars />
                        </div>
                    <ToastHeader>
                        <div>{this.props.newsData.username}</div>
                    </ToastHeader>
                    <ToastBody>{this.props.newsData.text}</ToastBody>
                    <button onClick={this.delete}>Delete</button>
                </Toast>
            </div>

        );
    }
}

export default NewsFeedBox;