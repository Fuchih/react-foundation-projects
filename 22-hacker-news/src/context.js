import { useContext, useEffect, useReducer, createContext } from 'react'
import reducer from './reducer'
import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH
} from './actions'

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'

const AppContext = createContext()

const initialState = {
  isLoading: true,
  hits: [],
  query: 'vue',
  nbPages: 0,
  page: 0
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    async function fetchData() {
      dispatch({ type: SET_LOADING })
      try {
        const data = await (
          await fetch(`${API_ENDPOINT}query=${state.query}&page=${state.page}`)
        ).json()
        dispatch({
          type: SET_STORIES,
          payload: { hits: data.hits, nbPages: data.nbPages }
        })
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [state.query, state.page])

  function handleSearch(query) {
    dispatch({ type: HANDLE_SEARCH, payload: query })
  }

  function removeStory(id) {
    dispatch({ type: REMOVE_STORY, payload: id })
  }

  function handlePage(value) {
    dispatch({ type: HANDLE_PAGE, payload: value })
  }

  return (
    <AppContext.Provider
      value={{ ...state, handleSearch, removeStory, handlePage }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
