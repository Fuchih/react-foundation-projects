import { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
  const {
    isSubmenuOpen,
    page: { page, links },
    location
  } = useGlobalContext()

  const [columns, setColumns] = useState('col-2')
  const container = useRef(null)

  useEffect(() => {
    setColumns('col-2')
    const submenu = container.current
    submenu.style.left = `${location}px`
    if (links.length === 3) setColumns('col-3')
    if (links.length > 3) setColumns('col-4')
  }, [location, links])

  return (
    <aside
      className={isSubmenuOpen ? 'submenu show' : 'submenu'}
      ref={container}
    >
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
          {links.map((item, index) => {
            const { icon, url, label } = item
            return (
              <a href={url} key={index}>
                {icon}
                {label}
              </a>
            )
          })}
        </div>
      </section>
    </aside>
  )
}
export default Submenu
