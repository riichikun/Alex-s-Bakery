import React, { Component } from 'react'
import Modal from './Modal'

export default class AddToCartButton extends Component {
    constructor(props) {
        super(props) 
        this.openWindow = this.openWindow.bind(this)
        this.state = {
         windowOpen: false,
         countOrders: 1
        }
        this.mako = this.mako.bind(this)
    }
    openWindow() {
        this.setState({windowOpen: !this.state.windowOpen})
      }
      mako() {
        this.setState({countOrders: this.state.countOrders + 1})
      }
    render() {
    return (
        <div className='add-button__container'>
            <button onClick={() => {
                this.openWindow()
                this.mako()
              } }  className={`${ this.state.windowOpen == true ? 'active' : '' }`}>Add to cart</button>
            
              { this.state.windowOpen == true ? <div className='modal'>
              <Modal { ...this.props } openWindow={this.openWindow} onAdd={this.props.onAdd}/>
            </div> : null}
        </div>
          )
  }
}