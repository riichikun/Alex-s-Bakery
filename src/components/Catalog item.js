import React, { Component } from 'react'
import Modal from './Modal'
import { toHaveDisplayValue } from '@testing-library/jest-dom/matchers'
import AddToCartButton from './Add to cart button'

export class CatalogItem extends Component {
  /*
  constructor(props) {
   super(props) 
   this.openWindow = this.openWindow.bind(this)
   this.state = {
    windowOpen: false
   }
   this.state = {
    countOrders: 1
 }
 this.mako = this.mako.bind(this)
  }
  openWindow() {
    this.setState({windowOpen: !this.state.windowOpen})
  }
  mako() {
    this.setState({countOrders: this.state.countOrders + 1})
  }*/
  render() {
    return (

        <div className='catalog-item__container'>
          <div class="catalog-item__block">
            <a href={"/items/" + this.props.item.id}>
              <img src={"./img/" + this.props.item.img} />
              </a>
            <div className='catalog-item-text__block'>
              <h2>{this.props.item.title}</h2>
              <p>${this.props.item.price}</p>
              <AddToCartButton items={this.props.items} item={this.props.item} onAdd={this.props.onAdd}/>
            </div>
          </div>
        </div>



      /*
      <div>
        <div class="item-card" onClick={ this.openWindow } className={`item-card ${ this.state.windowOpen == true ? 'active' : '' }`}>
          <img src={"./img/" + this.props.item.img} />
          <div class="item-text">
            <h2>{this.props.item.title}</h2>
            <p>{this.props.item.price}$</p>
          </div>
          { this.state.windowOpen == true ? <div className='modal'>
              <Modal { ...this.props } />
            </div> : null}
        </div>
      </div>
      
      
      
        <button onClick={() => {
                this.openWindow()
                this.mako()
              } }  className={`${ this.state.windowOpen == true ? 'active' : '' }`}>Add to cart</button>*/

    )
  }
}

export default CatalogItem