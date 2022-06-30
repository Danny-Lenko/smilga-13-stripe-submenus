import React, { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { Context } from './context'

const Sidebar = () => {
  const { sidebarOpen, toggleSidebar } = useContext(Context)

  const allSublinks = sublinks.map(sublink => (
    <article key={sublink.page}>
      <h4>{sublink.page}</h4>
      <div className="sidebar-sublinks">
        {sublink.links.map(link => (
          <a href={link.url} key={link.label}>{link.icon} {link.label}</a>
        ))}
      </div>
    </article>
  ))
  
  return(
    <div className={`sidebar-wrapper ${sidebarOpen ? 'show' : ''}`} >
      <div className="sidebar">
        <FaTimes className="close-btn" onClick={toggleSidebar} />
        {allSublinks}
      </div>
    </div>
  )
}

export default Sidebar
