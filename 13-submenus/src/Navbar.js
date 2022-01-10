import subLinks from './data'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()

  function displaySubmenu(e) {
    const page = e.target.textContent
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2

    openSubmenu(page, center)
  }

  function handleSubmenu(e) {
    if (!e.target.classList.contains('link-btn')) closeSubmenu()
  }

  return (
    <div className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="nav-logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {subLinks.map((item, index) => {
            const { page } = item
            return (
              <li key={index}>
                <button className="link-btn" onMouseEnter={displaySubmenu}>
                  {page}
                </button>
              </li>
            )
          })}
        </ul>
        <button className="btn signin-btn">sign in</button>
      </div>
    </div>
  )
}

export default Navbar
