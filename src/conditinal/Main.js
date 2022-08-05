import React, { Component } from 'react'
import Home from './Home'
import Login from './Login'
export default class Main extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         mango :  false,
      }
    }
  render() {
    return (
      <div>{this.state.mango? <Home/>:<Login/>}</div>
    )
  }
}
