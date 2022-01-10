import { FaTimes } from 'react-icons/fa'
import subLinks from './data'
import { useGlobalContext } from './context'

const Sidebar = () => {
  const { isSiderOpen, closeSidebar } = useGlobalContext()

  return (
    <div className={isSiderOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'}>
      <aside className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {subLinks.map((item, index) => {
            const { page, links } = item
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((item, index) => {
                    const { label, url, icon } = item
                    return (
                      <a href={url} key={index}>
                        {icon}
                        {label}
                      </a>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </aside>
    </div>
  )
}

export default Sidebar
