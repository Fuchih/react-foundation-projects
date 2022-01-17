import { useState, useContext, createContext } from 'react'
import useFetch from './useFetch'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('Harry Potter')
  const { loading, movies } = useFetch(searchTerm)
  const imgURL = 'http://image.tmdb.org/t/p/w1280'
  const noImg =
    'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

  return (
    <AppContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        loading,
        movies,
        imgURL,
        noImg
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }
