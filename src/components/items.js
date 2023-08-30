import React, { Component } from 'react'
import Item from '../components/Item'
export class items extends Component {

  render() {
    return (
      <main>
        <div class="items__block">
          {this.state.currentItems.map(e => (
            <Item key={e.id} item={e} onAdd={this.props.onAdd}  />
          ))}
        </div>
      </main>
    )
  }
}

export default items