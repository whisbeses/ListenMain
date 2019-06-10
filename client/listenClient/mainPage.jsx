import React from "react";

import Header from "./Header.jsx";
import PostArea from "./Post.jsx";


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
        {this.state.page === "home" ? (<PostArea /> ): (<div>I am not home</div>)}
      </div>
    )
  }
}


export default mainPage;