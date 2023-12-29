import React, {useState, useEffect} from "react"
import Header from "./components/header/Header"
import Menu from "./components/menu/Menu"
import './App.css'

const App = () => {

  let [cartDishes, setCartDishes] = useState(JSON.parse(localStorage.getItem('cart')))

  return (
    <div className="container">
      <Header cartDishes={cartDishes} setCartDishes={setCartDishes}/>
      <Menu cartDishes={cartDishes} setCartDishes={setCartDishes}/>
    </div>
  )
};

export default App;