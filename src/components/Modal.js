import React, { Component } from 'react'
import Item from './Item'



export class Modal extends Component {
  render() {
    return (
      <div class="modal__container" >
        <div className='modal-bcg' onClick={() => this.props.openWindow()}></div>
        <div class="modal-window">
          <h2>Do you want to add this to cart?</h2>
          <div class="item-card" className={`item-card`}>
            <img src={"../img/" + this.props.item.img} />
            <div class="item-text">
              <h2>{this.props.item.title}</h2>
              <p>{this.props.item.price}$</p>
            </div>
          </div>
          <button onClick={ () =>
            {this.props.onAdd(this.props.item);
              this.props.openWindow()
          }}>Add to cart</button>
          </div>
      </div>
    )
  }
}
export default Modal

        /* <img src={"./img/" + this.props.item.img} /> */