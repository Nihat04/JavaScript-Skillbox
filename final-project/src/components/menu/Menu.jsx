import React, { useState, useEffect } from 'react'
import DishCard from '../dishCard/DishCard'
import styles from './Menu.module.css'

const Menu = (props) => {

  const {cartDishes, setCartDishes} = props;

  let [dishList, setDishList] = useState([]);
  const [dishListCopy, setDishListCopy] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('./db.json');
      const result = await response.json();
      setDishList(result);
      setDishListCopy(result);
    }

    fetchData()
  }, []);

  
  function cartAppend(obj) {
    let cart = JSON.parse(localStorage.getItem('cart'));

    if(!cart) {
      cart = [];
    }
    let newCart = [...cart, obj]
    
    if(cart && cart.some(el => el.id === obj.id)) {
      const elToChange = cart.find(el => el.id === obj.id);
      elToChange.count++;
      newCart = cart;
    }

    setCartDishes(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  }

  function filterDishes(value) {
    setDishList(dishListCopy.filter((dish) => dish.name.includes(value)));
    console.log(dishListCopy);
  }

  function filterDishesCateg(categName) {
    setDishList(dishListCopy.filter((dish) => dish.category.includes(categName)));
    console.log(dishListCopy);
  }

  return (
    <div className={styles['content']}>
      <div className={styles['filter']}>
        <input className={styles['filter__input']} onChange={(e) => filterDishes(e.target.value)} type="text" placeholder='Название' />
        <ul className={styles['filter__categ__list']}>
          <li className={styles['filter__categ__link']}><a onClick={() => filterDishesCateg('')}>Всё</a></li>
          <li className={styles['filter__categ__link']}><a onClick={() => filterDishesCateg('pizza')}>Пицца</a></li>
          <li className={styles['filter__categ__link']}><a onClick={() => filterDishesCateg('salad')}>Салаты</a></li>
          <li className={styles['filter__categ__link']}><a onClick={() => filterDishesCateg('soup')}>Супы</a></li>
          <li className={styles['filter__categ__link']}><a onClick={() => filterDishesCateg('drink')}>Напитки</a></li>
        </ul>
      </div>
      <div className={styles['dishes']}>
        {dishList.map(dish => <DishCard key={dish.id} dish={dish} cartAppend={cartAppend} />)}
      </div>
    </div>
  )
}

export default Menu