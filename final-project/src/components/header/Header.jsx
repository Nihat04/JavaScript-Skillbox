import React, { useState, useMemo } from "react";
import CartDishCard from "../cartDishCard/CartDishCard";
import CartIcon from "../cartIcon/CartIcon";
import styles from "./Header.module.css";

const Header = (props) => {

  const {cartDishes, setCartDishes} = props;

  let totalCost = useMemo(() => {
    return cartDishes.reduce((total, dish) => total + dish.price * dish.count, 0);
  }, [cartDishes]);

  function cartRemoveDish(id) {
    const newCart = cartDishes.filter(dish => dish.id !== id);
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCartDishes(newCart);
  }

  function cartUpdateCount(id, value) {

    if(value <= 0) {
      cartRemoveDish(id);
      return
    }

    const newCart = [...cartDishes];

    newCart.map(el => {
      if(el.id === id) {
        el.count = value;
      }
    });

    setCartDishes(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart))
  }
 
  return (
    <header className={styles['header']}>
      <div className={styles['header__top']}>
        <div className="header__location">
          <p>Екатеринбург</p>
        </div>
        <img src="src/assets/pizza-logo.png" alt="MiaMamaPizza" className={styles['header__logo']} />
        <address>
          <a className="header__phone" href="tel:+70000000000">
            +7 000 000-00-00
          </a>
        </address>
      </div>
      <div className={styles['header__bottom']}>
        <nav className={styles['nav']}>
          <a href="#" className={styles['nav__link']}>
            Меню
          </a>
          <a href="#" className={styles['nav__link']}>
            Акции
          </a>
          <a href="#" className={styles['nav__link']}>
            О нас
          </a>
        </nav>

        <div className={styles['header__cart']}>
          <a href="#">
            <CartIcon />
          </a>
          <div className={styles['header__cart__menu']}>
            <div className={styles['cart__menu__list']}>
              {cartDishes && cartDishes.map(dish => {
                return <CartDishCard key={dish.id} dish={dish} cartRemoveDish={cartRemoveDish} cartUpdateCount={cartUpdateCount}/>
              })}
            </div>
            <button className={styles['cart__menu__btn']}>Оформить</button>
            <span className={styles['cart__menu__total']}>total: {totalCost}$</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
