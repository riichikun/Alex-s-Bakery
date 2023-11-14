import { toHaveDisplayValue } from '@testing-library/jest-dom/matchers'
import React, { Component } from 'react'
import { BsFillTrash3Fill } from "react-icons/bs"

export class Order extends Component {
  formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  
  render() {
    return (
        <div class='order-item'>
            <img src={"../img/" + this.props.item.img} />
            <div class="order-item-text">
            <h2>{this.props.item.title}</h2>
            <p>{this.formatter.format(this.props.item.price * this.props.items[this.props.item.id - 1].ordered)}</p>
            <BsFillTrash3Fill onClick={() => this.props.onDelete(this.props.item.id)}></BsFillTrash3Fill>
            <p>x{this.props.items[this.props.item.id - 1].ordered}</p>
            
        </div>
      </div>
    )
  }
}

export default Order

/* <p>x{window.localStorage.getItem(`id ${this.props.item.id}`)}</p>*/