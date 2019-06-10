import React from "react";


class mainPage extends React.Component {
  constructor(){
    super();
    this.state = {
      cards: []
    }
  }
  render() {
    return (
      <div>I am the Main Container</div>
    )
  }
}


export default mainPage;