import React, { useRef, useEffect, useContext } from 'react'
import { Context } from './context'

const Submenu = () => {
  const {submenuContent, coordinates, enterSubmenu, leave} = useContext(Context)
  const { page, links } = submenuContent
  const { x, y } = coordinates

  const submenuRef = useRef(null)

  useEffect(() => {
    submenuRef.current.style.left=`${x}px`
    submenuRef.current.style.top=`${y}px`
  }, [submenuContent])

  const allLinks = links ? links.map(link => (
    <div>
      <a href={link.url} >
        {link.icon} {link.label}
      </a>
    </div>
  )) : ''
  
  return(
    <div 
      className={`submenu ${submenuContent ? 'show' : ''}`}
      onMouseEnter={enterSubmenu}
      onMouseLeave={leave}
      ref={submenuRef}
    >
      <h4>{page}</h4>
      <div className={`submenu-center col-${links ? links.length : ''}`}>
        {allLinks}
      </div>
    </div>
  )
}

export default Submenu
