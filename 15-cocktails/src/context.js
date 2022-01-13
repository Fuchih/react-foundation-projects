import axios from 'axios'
import {
  useState,
  useContext,
  useEffect,
  useCallback,
  createContext
} from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [cocktailsList, setCocktailsList] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('a')

  const fetchData = useCallback(async () => {
    setLoading(true)
    try {
      const res = await axios.get(`${url}${searchTerm}`)
      const { drinks } = res.data
      if (drinks) {
        const cocktailsData = drinks.map((item) => {
          const { idDrink, strAlcoholic, strDrink, strDrinkThumb, strGlass } =
            item
          return {
            id: idDrink,
            name: strDrink,
            info: strAlcoholic,
            img: strDrinkThumb,
            glass: strGlass
          }
        })
        setCocktailsList(cocktailsData)
      } else {
        setCocktailsList([])
      }
      setLoading(false)
    } catch (error) {
      setLoading(false)
      alert('Oops! Something wrong with TheCocktailDB')
    }
  }, [searchTerm])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <AppContext.Provider value={{ cocktailsList, loading, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export { AppProvider, useGlobalContext }
