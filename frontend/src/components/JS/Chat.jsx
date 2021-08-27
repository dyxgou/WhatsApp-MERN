import { Avatar, IconButton } from "@material-ui/core";
import React, { useState }  from "react";
import "../CSS/Chat.css";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import Message from "./Message";
import ChatInput from "./ChatInput";
import axios from "../../data/axios"

const Chat = ({ msg }) => {

  const sendMessage = async e =>
  {
    e.preventDefault()

    if(input === "" || !input)
    {
      return
    }
    else
    {
      await axios.post("/messages/new" , {
        message : input,
        name : "DEMO APP",
        timestamp : "So far far away",
        received : true
      })
  
      setInput("")
    }
  }

  const [ input , setInput ] = useState("")

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />

        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>last seen at...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
          <IconButton>
            <SearchOutlined />
          </IconButton>
        </div>
      </div>

      <div className="chat__body" key={msg._id}  >
        { msg.map(message =>
          {
            return <Message 
                key={message._id}
                author={message.name || `${message.received ? "Tu" : "Tu Contacto"}` }
                message={message.message}
                timeStamp={message.timestamp}
                classTag={ message.received && "message__received" }
                colorAuthor={"#f35f5f"}
              />
          }) 
        }
      </div>

      <div className="chat__foother">
        <ChatInput 
          onClickButton={sendMessage} 
          valueInput={input} 
          onChangeInput={e => setInput(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Chat;
