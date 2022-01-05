import { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

const AllCatagories = ['all', ...new Set(items.map((item) => item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories] = useState(AllCatagories)

  function handleFilter(category) {
    if (category === 'all') return setMenuItems(items)
    const newMenuItems = items.filter((item) => item.category === category)
    setMenuItems(newMenuItems)
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} handleFilter={handleFilter} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  )
}

export default App
