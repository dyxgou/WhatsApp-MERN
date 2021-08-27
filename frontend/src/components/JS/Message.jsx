import React from 'react'
import "../CSS/Message.css"

const Message = ({ author , message , timeStamp, colorAuthor , classTag }) => {
  return (
    <div className={`message ${classTag}`} >
      <span 
        className="message__author" 
        style={{color : colorAuthor || "black"}} 
      > { author } </span>

      <div className="message__content">
        <p > { message } </p>
        <span > {timeStamp} </span>
      </div>

    </div>
  )
}

export default Message
