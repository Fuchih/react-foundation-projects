import { useState, useContext, createContext } from 'react'
import subLinks from './data'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [isSiderOpen, setIsSiderOpen] = useState(false)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
  const [page, setPage] = useState({ page: '', links: [] })
  const [location, setLocation] = useState(0)

  function openSidebar() {
    setIsSiderOpen(true)
  }

  function closeSidebar() {
    setIsSiderOpen(false)
  }

  function openSubmenu(text, coordinate) {
    const page = subLinks.find((item) => item.page === text)
    setPage(page)
    setLocation(coordinate)
    setIsSubmenuOpen(true)
  }

  function closeSubmenu() {
    setIsSubmenuOpen(false)
  }

  return (
    <AppContext.Provider
      value={{
        isSiderOpen,
        setIsSiderOpen,
        openSidebar,
        closeSidebar,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        page,
        location
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export { AppProvider, useGlobalContext }
