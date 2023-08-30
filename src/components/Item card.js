import React from 'react'
import { useParams } from "react-router-dom"
import Item from './Item'
import AddToCartButton from './Add to cart button'

export const ItemCard = (props) => {
    let x
    const { id } = useParams()
    props.items.map((e) => e.id == id ? x=e : null)
  return (
    <div  className='item-page__container'>
        { x == undefined ? <p>Ooops! There is nothing to see here...</p> :
        <div>
            <div className='links-chain'>
              <a href='/catalog'>Catalog</a>
              <p> / </p>
              <a>{x.title}</a>
            </div>
            <div class="item-card-header__block">
            <h1 className='for-mobile'>{x.title}</h1>
              <img src={"../img/" + x.img}></img>
              <div className='item-card-header-text__block'>
                <h1 className='not-mobile'>{x.title}</h1>
                <p>Price: <span>${x.price}</span></p>
                <AddToCartButton items={props.items} item={x} onAdd={props.onAdd}/>
              </div>
            </div>
        </div>
        }
    </div>
  )
}


export default ItemCard 