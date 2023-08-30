import React, { Component } from 'react'
import Categories from '../components/Categories'
import CatalogItem from '../components/Catalog item'

export class catalog extends Component {
  render() {
    return (
      <main>
        <div class="catalog__container">
          <div className='categories__container'>
            <Categories chooseCategory={ this.props.chooseCategory }/>
          </div>
          <div class="catalog-items__block">
            {this.props.currentItems.map(e => (
             <CatalogItem key={e.id} item={e} onAdd={this.props.onAdd} items={this.props.items}/>
            ))}
          </div>
        </div>
      </main>
    )
  }
}

export default catalog

