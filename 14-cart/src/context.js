import { useEffect, useContext, createContext, useReducer } from 'react'
import reducer from './reducer'
import axios from 'axios'

const url =
  'https://res.cloudinary.com/t19887348/raw/upload/v1641884647/kpd6spykkflvfqpi8vgc.json'

const AppContext = createContext()

const initialState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 0
}

const ACTIONS = {
  LOADING: 'loading',
  DISPLAY_ITEMS: 'display-items',
  TOGGLE_AMOUNT: 'toggle-amount',
  REMOVE_ITEM: 'remove-item',
  REMOVE_CART: 'remove-cart',
  TOTAL_PRICE: 'total-price'
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    dispatch({ type: ACTIONS.TOTAL_PRICE })
  }, [state.cart])

  async function fetchData() {
    dispatch({ type: ACTIONS.LOADING })
    const res = await axios.get(url)
    const cartItems = res.data
    dispatch({ type: ACTIONS.DISPLAY_ITEMS, payload: { cartItems } })
  }

  function toggleAmount(id, type) {
    dispatch({ type: ACTIONS.TOGGLE_AMOUNT, payload: { id, type } })
  }

  function removeItem(id) {
    dispatch({ type: ACTIONS.REMOVE_ITEM, payload: { id } })
  }

  function removeCart() {
    dispatch({ type: ACTIONS.REMOVE_CART })
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        toggleAmount,
        removeItem,
        removeCart
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext, ACTIONS }
