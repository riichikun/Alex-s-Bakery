import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/items"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Catalog from "./pages/catalog"
import MainPageItems from './components/Main page items'
import Modal from "./components/Modal"
import routes from "./routes";
import ItemCard from "./components/Item card";
import PageNotFound from "./pages/Page not found";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Sweet cinnamon roll',
          img: 'sweet-cinnamon-roll.jpg',
          price: '3.99',
          category: 'rolls',
          ordered: 0,
        },
        {
          id: 2,
          title: 'Sweet strawberry roll',
          img: 'sweet-strawberry-roll.jpg',
          price: '3.99',
          category: 'rolls',
          ordered: 0,
        },
        {
          id: 3,
          title: 'Baklava',
          img: 'baklava.jpg',
          price: '3.99',
          category: 'other',
          ordered: 0,
        },
      ],
      currentItems: [
      ],
      cartEmpty: true
    }
    this.state.currentItems=this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.checkCartEmptyness = this.checkCartEmptyness.bind(this)
    this.checkIfInStorage = this.checkIfInStorage.bind(this)

  }



  render() {
    return (
      <div class="wrapper">
        <Router>



        <Header checkIfInStorage={this.checkIfInStorage} cartEmpty={this.state.cartEmpty} orders={this.state.orders} onDelete={this.deleteOrder} items={this.state.items}/>
        <Routes>
            <Route path="/catalog" element={ <Catalog currentItems={this.state.currentItems} onAdd={this.addToOrder} chooseCategory={ this.chooseCategory }/>} />
            <Route path="/" element={ <MainPageItems items={this.state.items} onAdd={this.addToOrder}/> } />     
            <Route path="/items/:id" element={<ItemCard currentItems={this.state.currentItems}  items={this.state.items} onAdd={this.addToOrder} onDelete={this.deleteOrder}/>} />
            <Route path="/for-costumers" element={<PageNotFound />} />
            <Route path="/about" element={<PageNotFound />} />
            <Route path="/contacts" element={<PageNotFound />} />
            <Route path="/personal-data-policy" element={<PageNotFound />} />
        </Routes>
        <Footer />
        </Router>
      </div>
    );    
  }

  checkIfInStorage() {
    for(let i=0; i<this.state.items.length; i++) {
      if(window.localStorage.getItem(`id ${i + 1}`) != null && this.state.cartEmpty == true) {
        this.setState({cartEmpty: false})
        this.setState({orders: [...this.state.orders, this.state.items[i]]})    
        let witems = [...this.state.items];
        let witem = {...witems[this.state.items[i].id - 1]};
        witem.ordered = Number(window.localStorage.getItem(`id ${this.state.items[i].id}`));
        witems[this.state.items[i].id - 1] = witem;
        this.setState({items: witems}) 
        window.localStorage.setItem(`id ${this.state.items[i].id}`, Number(window.localStorage.getItem(`id ${this.state.items[i].id}`)))
      }
    }
  }

checkCartEmptyness(added) {
  if(this.state.orders.length + added == 0) this.setState({cartEmpty: true})
  else(this.setState({cartEmpty: false}))

}
  componentWillReceiveProps(nextProps) {
    
  }
  addToOrder(item) {
      let isInArray = false
      this.state.orders.forEach(el => {
        if(el.id === item.id) {
          isInArray = true;
        }
      })
      if (!isInArray) {
        if(window.localStorage.getItem(`id ${item.id}`) != null) {
          this.setState({orders: [...this.state.orders, item]})    
          let witems = [...this.state.items];
          let witem = {...witems[item.id - 1]};
          witem.ordered = Number(window.localStorage.getItem(`id ${item.id}`)) + 1;
          witems[item.id - 1] = witem;
          this.setState({items: witems}) 
          window.localStorage.setItem(`id ${item.id}`, Number(window.localStorage.getItem(`id ${item.id}`)))
        }
        else {
          this.setState({orders: [...this.state.orders, item]})  
          let witems = [...this.state.items];
          let witem = {...witems[item.id - 1]};
          witem.ordered = 1;
          witems[item.id - 1] = witem;
          this.setState({items: witems})            
          window.localStorage.setItem(`id ${item.id}`, 0)
          console.log(localStorage.getItem("id 5"))          
        }

      //let orderedForStorage = [...this.state.orders, item].map((itemObj) => item.id)

      }    

    else {
      let witems = [...this.state.items];
      let witem = {...witems[item.id - 1]};
      witem.ordered = witem.ordered + 1;
      witems[item.id - 1] = witem;
      this.setState({items: witems})}
      this.checkCartEmptyness(1)
      window.localStorage.setItem(`id ${item.id}`, Number(window.localStorage.getItem(`id ${item.id}`)) + 1)

      console.log(localStorage.getItem("id 3")) 
   
  }
deleteOrder(id) {
  this.setState({orders: this.state.orders.filter(e => e.id !== id)});
  console.log(this.state.orders)
  this.checkCartEmptyness(-1)
  window.localStorage.removeItem(`id ${id}`)
}
chooseCategory(category) {
  if(category == 'all') {
    this.setState(
      { currentItems: this.state.items }
    )    
  }
  else {
    this.setState(
      { currentItems: this.state.items.filter(e => e.category === category) }
    ) 
  }

}
}

export default App;
