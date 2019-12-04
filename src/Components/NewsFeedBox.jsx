import React, { Component } from 'react';
import { Toast, ToastBody, ToastHeader, Jumbotron, Container } from 'reactstrap';
import { FaPencilAlt, FaBars } from "react-icons/fa";
import NewsModel from './NewsModel';

class NewsFeedBox extends Component {

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
                </Toast>
            </div>

        );
    }
}

export default NewsFeedBox;