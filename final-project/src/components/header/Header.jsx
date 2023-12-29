import React, { useState } from "react";
import CartDishCard from "../cartDishCard/CartDishCard";
import styles from "./Header.module.css";

const Header = (props) => {

  const {cartDishes, setCartDishes} = props;
  let totalCost = 0;

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
            <svg
              className={styles['header__cart__svg']}
              fill="#000000"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="800px"
              height="800px"
              viewBox="0 0 902.86 902.86"
              xmlSpace="preserve"
            >
              <g>
                <g>
                  <path
                    d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z
			            M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"
                  />
                  <path
                    d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717
                        c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744
                        c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742
                        C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744
                        c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z
                        M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742
                        S619.162,694.432,619.162,716.897z"
                  />
                </g>
              </g>
            </svg>
          </a>
          <div className={styles['header__cart__menu']}>
            <div className={styles['cart__menu__list']}>
              {cartDishes && cartDishes.map(dish => {
                totalCost += dish.price * dish.count;

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
