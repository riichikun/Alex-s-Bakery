import React, { Component } from 'react'
import Item from '../components/Item'


export class MainPageItems extends Component {
  addMainPageItems() {
    let mainPageItems = []
    for(let i=0; i<3; i++) {
      mainPageItems.push(
        <Item key={this.props.items[i].id} item={this.props.items[i]} onAdd={this.props.onAdd} />    
      )
    }
    return mainPageItems
  }
  render() {
    return (

      <main>
      <div className="catalog-top">
        <h2>Our goods</h2>
        <a className='button' href='/catalog'>See more</a>
      </div>     
        <div class="items__block">{ this.addMainPageItems() }</div>
        </main>
     /* <main>
        { mainPageItems.map(e => (
          <Item key={e.id} item={e} onAdd={this.props.onAdd} />
        ))}
      </main> */
    )
  }
}

export default MainPageItems