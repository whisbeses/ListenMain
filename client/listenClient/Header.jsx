import React from "react";



const Header = (props) =>{
  return (
    <div className="headerContainer">
      <input type="button" value="Game" onClick={()=>{props.switchPage("game")}}></input>
      <input type="image" src="logo.png" alt="Listen" className="logo" value="" onClick={()=>{props.switchPage("home")}}></input>
      <input type="button" value="Post" onClick={()=>{props.switchPage("post")}}></input>
    </div>
  )
}


export default Header;