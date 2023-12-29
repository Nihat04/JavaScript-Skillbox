import React from 'react'
import styles from './DishCard.module.css'

const DishCard = (params) => {

  const {dish, cartAppend} = params;

  return (
    <div className={styles['dish-card']}>
        <img className={styles['dish-card__img']} src={dish.img} alt={dish.name} />
        <h2 className={styles['dish-card__name']}>{dish.name}</h2>
        <p className={styles['dish-card__descr']}>{dish.description}</p>
        <span className={styles['dish-card__price']}>{dish.price}$</span>
        <button onClick={() => cartAppend(dish)} className={styles['dish-card__btn']}>Добавить</button>
    </div>
  )
}

export default DishCard