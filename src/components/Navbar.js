import React, { Component } from 'react';

export default class Navbar extends Component {

  render() {
    return(
      <div>
        <nav>
          <div className="row">
            <div className="headerimage"><img src="./img/headerimage.png" width="400px" heigh></img></div>
            <div className="score"> Your score : {this.props.score} | High score : {this.props.topScore} </div>
            <div className="instructions">Click on an image to earn points, but don't click on any more than once!</div>

          </div>
        </nav>
      </div>
    )
  }


}