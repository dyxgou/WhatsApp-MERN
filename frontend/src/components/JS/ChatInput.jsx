import React from 'react'
import EmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicroIcon from "@material-ui/icons/Mic";
import "../CSS/ChatInput.css"
import { IconButton } from '@material-ui/core';

const ChatInput = ({ onClickButton , valueInput , onChangeInput }) => {
  return (
    <div className="chatInput" >
      <IconButton>
        <EmoticonIcon className="chatInput__icon"  />
      </IconButton>
      <form className="chatInput__form" >
        <input value={valueInput} onChange={onChangeInput} type="text" placeholder="Type a text" />
        <button onClick={onClickButton}  type="submit" >Send Message</button>
      </form>

      <IconButton>
        <MicroIcon className="chatInput__icon"  />
      </IconButton>
    </div>
  )
}

export default ChatInput
