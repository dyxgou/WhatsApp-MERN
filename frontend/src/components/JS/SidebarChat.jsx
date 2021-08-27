import { Avatar } from '@material-ui/core'
import React from 'react'
import "../CSS/SidebarChat.css"


const SidebarChat = ({ name , info }) => {
  return (
    <div className="sidebarChat" >
      <Avatar className="sidebarChat__avatar" />
      <div className="sidebarChat__info">
        <h2> {name} </h2>
        <p> {info} </p>
      </div>
    </div>
  )
}

export default SidebarChat
