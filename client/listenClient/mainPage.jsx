import React from "react";

import Header from "./Header.jsx";
import PostArea from "./Post.jsx";
import ColorGame from "./ColorGame/app";

class mainPage extends React.Component {
  constructor(){
    super();
    this.state = {
      cards: [],
      page : "home",
    }
    this.setState=this.setState.bind(this);
    this.switchPage=this.switchPage.bind(this);
  }

  switchPage(page){
    this.setState({page : page})
  }



  render() {
    return (
      <div className="mainContainer">
        <Header  switchPage={this.switchPage}/>
        <div className="contentContainer">
        {this.state.page === "home" ? (<PostArea /> ): this.state.page === "game" ? (<ColorGame/>): (<div>Lets make a post </div>)}
        </div>
      </div>
    )
  }
}


export default mainPage;