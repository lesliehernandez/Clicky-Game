import React, { Component } from 'react';
import Character from "./Character";
import characterArray from "../characterArray.json";

export default class Main extends Component {

  mixCharacters = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

  handleClick = (id) => {
    this.props.itScored(id);
    this.mixCharacters(characterArray)
  }

render() {
  return (
    <div className="main"> 
    <div className="container-fluid">
      <div className="container-fluid character-box"> 
      {characterArray.map(image =>
          <Character
            src = {image.src}
            alt = {image.name}
            id = {image.id}
            key = {image.id}
            handleClick= {this.handleClick}
            />)}
      </div>
    </div>
    </div>
  )
}
}