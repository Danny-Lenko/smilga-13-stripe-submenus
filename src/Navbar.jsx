import React, { useContext } from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { Context } from './context'
import sublinks from './data'
import { nanoid } from 'nanoid'

const Navbar = () => {
  const { enter, leave, toggleSidebar } = useContext(Context)

  const allSublinks = sublinks.map(sublink => (
       <li 
          key={nanoid()}
          onMouseEnter={ (e) => enter(e, sublink) }
          onMouseLeave={leave}
       >
          <button className="link-btn">{sublink.page}</button>
       </li>
  ))
  
  return(
    <nav className="nav">
      <div className="nav-center">

        <header className="nav-header">
          <img src={logo} alt=""/>
          <button className="toggle-btn btn" onClick={toggleSidebar}>
            <FaBars />
          </button>
        </header>

        <ul className="nav-links">
          {allSublinks}
        </ul>

        <button className="signin-btn btn">sign in</button>
        
      </div>
    </nav>
  )
}

export default Navbar
