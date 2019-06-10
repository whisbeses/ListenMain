import React from "react";

import Header from "./Header.jsx";
import PostArea from "./posts/PostArea.jsx";
import ColorGame from "./ColorGame/app";
import axios from "axios";

class mainPage extends React.Component {
  constructor(){
    super();
    this.state = {
      posts: [],
      page : "home",
    }
    this.setState=this.setState.bind(this);
    this.switchPage=this.switchPage.bind(this);
    this.getPosts=this.getPosts.bind(this);
  }
  componentDidMount(){
    this.getPosts();
  }
  switchPage(page){
    this.setState({page : page})
  }
  getPosts(){
    axios.get("/api/posts")
      .then((posts)=>{
        this.setState({posts :posts.data})
      })
  }


  render() {
    return (
      <div className="mainContainer">
        <Header  switchPage={this.switchPage}/>
        <div className="contentContainer">
        {this.state.page === "home" ? (<PostArea posts={this.state.posts}/> ): this.state.page === "game" ? (<ColorGame/>): (<div>Lets make a post </div>)}
        </div>
      </div>
    )
  }
}


export default mainPage;