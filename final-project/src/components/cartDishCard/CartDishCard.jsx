import React from 'react'
import styles from './CartDishCard.module.css'

const CartDishCard = (props) => {

  const {dish, cartRemoveDish, cartUpdateCount} = props;

  return (
    <div className={styles['dish-card']}>
        <img className={styles['dish-card__img']} src={dish.img} alt={dish.name} />
        <h2 className={styles['dish-card__name']}>{dish.name}</h2>
        <span className={styles['dish-card__price']}>{dish.price}$</span>
        <span>кол-во</span>
        <input className={styles['dish-card__input']} value={dish.count} onChange={e => cartUpdateCount(dish.id, e.target.value)} type="number" min="1" max="20" />
        <button onClick={() => cartRemoveDish(dish.id)} className={styles['dish-card__btn']}>X</button>
    </div>
  )
}

export default CartDishCard