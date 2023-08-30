import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
      super(props)
      this.state = {
         categories: [
            {
                key: '1',
                name: 'all'
            },
            {
                key: '2',
                name: 'rolls'
            },
            {
                key: '3',
                name: 'other'
            },
         ]
      }
    }
  render() {
    return (
      <div className="categories__block"> { this.state.categories.map(e => 
        <div className="category__item" key={e.key} onClick={() => this.props.chooseCategory(e.name)}>{e.name}</div>
        )} </div>
    )
  }
}

export default Categories