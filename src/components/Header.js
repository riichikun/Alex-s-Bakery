import React, {useState} from 'react'
import cart from "../img/cart.png"
import { BsCart4 } from "react-icons/bs"
import Order from './Order'

export default function Header(props) {
  function componentWillReceiveProps(nextProps) {
    console.log(nextProps);
}
  let [cartOpen, setCartOpen] = useState(false)
  let [burgerOpen, setBurgerOpen] = useState(false)
  let [storageEmpty, setStorageEmpty] = useState(false)
  let total = 0;
  props.orders.forEach(e => total += Number(e.price * props.items[e.id - 1].ordered))


  return (
    <header>
      <div className='left-menu' >   
        <div onClick={() => setBurgerOpen(burgerOpen = !burgerOpen)} className={`burger ${burgerOpen && 'active' }`}>
          <span></span>
        </div></div>
      <div className='menu-bar'>
        <div className="menu-links">
          <a href='/catalog'>Catalog</a>
          <a href='/for-costumers'>For customers</a>
          <a className='logo' href='/'>Alex's Bakery</a>
          <a href='/about'>About us</a>
          <a href='/contacts'>Contacts</a>
        </div>
      </div>
      <div class="cart__container">
          <BsCart4 onClick={() => {
              setCartOpen(cartOpen = !cartOpen);
              props.checkIfInStorage()
            }} className={`cart ${cartOpen && 'active' }`} />
          {cartOpen &&  (
            <div className='cartInner' >
              {props.cartEmpty == true && <p>Cart is empty</p>}
                {props.orders.map(e => (
                    <Order onDelete={ props.onDelete } key={e.id} item={e} items={props.items}/>
                ))}
                <p className='cart-total'>Total: {new Intl.NumberFormat().format(total) }$</p>
            </div>
          )}
        </div>
        <div className={`burgered ${burgerOpen && 'active' }`}>
          <a href='/catalog'>Catalog</a>
          <a href='/for-costumers'>For customers</a>
          <a href='/about'>About us</a>
          <a href='/contacts'>Contacts</a>
        </div>
    </header>
  )
}