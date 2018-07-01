import React, { Component } from 'react';

export default class Character extends Component {

    render() {
        return (
            <img className="img-fluid character" 
            src={this.props.src} 
            alt={this.props.alt}
            onClick={() => {this.props.handleClick(this.props.id)} }
            />
        )
    }
}