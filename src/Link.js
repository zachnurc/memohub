import React, { Component } from 'react';
import './Link.css'

export default class Link extends Component {

  constructor(props){
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = {
      active: this.props.class,
    };
  }
  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };

  render() {
    return (
      <a
        className= {this.state.active? 'active': null}
        onClick = {this.toggleClass}
        href = {this.props.href}
      >
        <span></span>
      </a>

    )
  }
}
