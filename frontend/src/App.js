import { useEffect, useState } from 'react';
import './App.css';
import Chat from './components/JS/Chat';
import Sidebar from './components/JS/Sidebar';
import Pusher from "pusher-js"
import axios from "./data/axios"

function App() {

  const [ messages , setMessages ] = useState([])

  useEffect(() =>
  {
    axios.get("/messages/sync").then((res) =>
    {
      setMessages(res.data)
    })

  } , [])

  useEffect(() =>
  {
    const pusher = new Pusher('e1d5c19b1e95cc6fc7ca', {
      cluster: 'us2'
    });

    const channel = pusher.subscribe('messagecontents');
    channel.bind('inserted', (data) => {
      setMessages([ ...messages , data ])
    });

    return () =>
    {
      channel.unbind_all()
      channel.unsubscribe()
    }

  } , [messages])

  return (
    <div className="app">
      {/* App Body */}

      <div className="app__body">
        {/* Sidebar */}
        <Sidebar />
        {/* Chat */}
        <Chat msg={messages} />
      </div>



    </div>
  );
}

export default App;
