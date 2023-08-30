import { toHaveDisplayValue } from '@testing-library/jest-dom/matchers'
import React, { Component } from 'react'
import { BsFillTrash3Fill } from "react-icons/bs"

export class Order extends Component {
  render() {
    return (
        <div class='order-item'>
            <img src={"../img/" + this.props.item.img} />
            <div class="order-item-text">
            <h2>{this.props.item.title}</h2>
            <p>{this.props.item.price * this.props.items[this.props.item.id - 1].ordered}$</p>
            <BsFillTrash3Fill onClick={() => this.props.onDelete(this.props.item.id)}></BsFillTrash3Fill>
            <p>x{this.props.items[this.props.item.id - 1].ordered}</p>
        </div>
      </div>
    )
  }
}

export default Order