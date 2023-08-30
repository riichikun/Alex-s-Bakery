import React, { Component } from 'react'
import Modal from './Modal'

export class Item extends Component {
  render() {
    return (
        <a className="item-card" href={"/items/" + this.props.item.id}>
          <img src={"./img/" + this.props.item.img} />
          <div class="item-text">
           <h2>{this.props.item.title}</h2>
            <p>${this.props.item.price}</p>
          </div>
        </a>

    )
  }
}

export default Item

/* <div class="item-card" onClick={() => this.props.onAdd(this.props.item)}> */