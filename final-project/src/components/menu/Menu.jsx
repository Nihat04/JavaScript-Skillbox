import React, { useState } from 'react'
import DishCard from '../dishCard/DishCard'
import styles from './Menu.module.css'

const Menu = (props) => {

  // function getDishMaxId() {
  //   return dishList.find(dish => Math.max(dish.id))
  // }

  const [dishList, setDishList] = useState([{
    id: 1,
    name: 'Pepperoni',
    description: 'very good pizza pepperoni',
    price: '4.50$',
    img: './src/assets/pepperoni.png'
  },
  {
    id: 2,
    name: 'Pepperoni',
    description: 'very good pizza pepperoni',
    price: '4.50$',
    img: './src/assets/pepperoni.png'
  }]);

  return (
    <div className={styles['content']}>
      {dishList.map(dish => <DishCard key={dish.id} dish={dish} />)}
    </div>
  )
}

export default Menu