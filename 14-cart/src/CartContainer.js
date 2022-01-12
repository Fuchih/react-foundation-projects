import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from './context'

const CartContainer = () => {
  const { loading, cart, removeCart, total } = useGlobalContext()

  if (loading) {
    return (
      <section className="cart">
        <header>
          <h2 className="loading">loading...</h2>
        </header>
      </section>
    )
  }

  if (!loading && cart.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    )
  }

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <CartItem />
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total
            <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={removeCart}>
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer
