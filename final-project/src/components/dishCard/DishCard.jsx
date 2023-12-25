import React from 'react'
import styles from './DishCard.module.css'

const DishCard = (params) => {

  const {dish} = params
  const {img, name, description, price} = dish  

  return (
    <div className={styles['dish-card']}>
        <img className={styles['dish-card__img']} src={img} alt={name} />
        <h2 className={styles['dish-card__name']}>{name}</h2>
        <p className={styles['dish-card__descr']}>{description}</p>
        <span className={styles['dish-card__price']}>{price}</span>
        <button className={styles['dish-card__btn']}>Добавить</button>
    </div>
  )
}

export default DishCard