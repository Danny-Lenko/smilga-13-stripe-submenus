import React, { useState, createContext } from 'react'

const Context = createContext()

function ContextProvider(props) {
   const [sidebarOpen, setSidebarOpen] = useState(false)
   const [submenuContent, setSubmenuContent] = useState('')
   const [coordinates, setCoordinates] = useState({})
   const [savedContent, setSavedContent] = useState('')

   function toggleSidebar() {
      setSidebarOpen(!sidebarOpen)
   }

   function enter(e, content) {
      const info = e.target.getBoundingClientRect()
      const x = (info.left + info.right) / 2
      const y = info.bottom - 3

      setSubmenuContent(content)
      setSavedContent(content)
      setCoordinates({x, y})
   }

   function enterSubmenu() {
      setSubmenuContent(savedContent)
   }

   function leave() {
      setSubmenuContent('')
   }

   return(
      <Context.Provider value={{
         enter,
         enterSubmenu,
         leave,
         sidebarOpen,
         toggleSidebar,
         submenuContent,
         coordinates
      }}>
         {props.children}
      </Context.Provider>
   )
}

export { Context, ContextProvider }