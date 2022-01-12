import { ACTIONS } from './context'

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.LOADING:
      return { ...state, loading: true }
    case ACTIONS.DISPLAY_ITEMS:
      return { ...state, loading: false, cart: action.payload.cartItems }
    case ACTIONS.REMOVE_CART:
      return { ...state, cart: [] }
    case ACTIONS.REMOVE_ITEM: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id)
      }
    }
    case ACTIONS.TOGGLE_AMOUNT: {
      let newCart = state.cart
        .map((item) => {
          if (
            item.id === action.payload.id &&
            action.payload.type === 'increment'
          ) {
            return { ...item, amount: item.amount + 1 }
          }
          if (
            item.id === action.payload.id &&
            action.payload.type === 'decrement'
          ) {
            return { ...item, amount: item.amount - 1 }
          }
          return item
        })
        .filter((item) => item.amount !== 0)
      return { ...state, cart: newCart }
    }
    case ACTIONS.TOTAL_PRICE: {
      let { total, amount } = state.cart.reduce(
        (cartTotal, item) => {
          const { amount, price } = item
          const totalPrice = amount * price

          cartTotal.amount += amount
          cartTotal.total += totalPrice
          return cartTotal
        },
        {
          amount: 0,
          total: 0
        }
      )

      total = total.toFixed(2)
      return { ...state, total, amount }
    }
    default:
      return state
  }
}

export default reducer
