import React from 'react';
import { Container, Toast, ToastHeader, ToastBody, } from 'reactstrap';
import { FaPencilAlt } from "react-icons/fa";
import NewsModel from './NewsModel';
import NewsFeedBox from './NewsFeedBox';
import NewsVerticalNav from './NewsVerticalNav';

class Newsfeed extends React.Component {
    state = {
        newsfeed: '',
        modalOpen: false,
        dropdownOpen: false
    }
    
    setModal = () => {
        if(this.state.modalOpen === true){
            this.setState({
                modalOpen: false
            })
        } else if (this.state.modalOpen === false){
            this.setState({
                modalOpen: true
            })
        }
    }

    componentDidMount = async () => {
        let username = "user21"
        let password = "2ruxa4MRJdUgg6cz"
        let token = btoa(username + ":" + password)
        let response = await fetch("https://striveschool.herokuapp.com/api/posts/", {
            method: "GET",
            headers: {
                "Authorization": "Basic " + token
            }
        })
        let news = await response.json()
        console.log(news);
        this.setState({
            Newsfeed: news
        })
    };
    render() {
        console.log(this.state);
        return (
            <>
            <Container flex id="newsfeed-toast">
                <div className="p-4 bg-info my-4 fluid">

                <div>{this.state.modalOpen && <NewsModel 
                setmodal={this.setModal}  open={this.state.modalOpen} />}
                </div>
                    <Toast>
                        <ToastHeader>
                        Start a Post
                                <div className="mx-5 float-right">
                                    <FaPencilAlt onClick={this.setModal} />
                            </div>
                        </ToastHeader>
                        <ToastBody>
                            Write a Text
                         </ToastBody>
                    </Toast>
                </div>
                {this.state.Newsfeed && this.state.Newsfeed.map((news,index) =>
                    <NewsFeedBox newsData={news} key={index} />
                )};

            </Container>
            </>
        );
    }
}

export default Newsfeed;