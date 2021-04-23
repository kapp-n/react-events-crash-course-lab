import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
   drawChromeBoiAtCoords(event.clientX, event.clientY)
  }
  
 
   
  
  handleResize(event){
    if (event.key === 'a'){
      return resize('+')
    } else {
      return resize('-')
    }

  }
  
  render() {
    return (
      <canvas 
        onClick={toggleCycling}
        onMouseMove={this.handleMouseMove}
        onKeyPress={this.handleResize}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
