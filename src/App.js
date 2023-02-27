import './App.css'
import ChatBar from './components/ChatBar/ChatBar';
import ChatFriends from './components/ChatFriends/ChatFriends';
import ChatArea from './components/ChatArea/ChatArea';
import ChatAreaSend from './components/ChatAreaSend/ChatAreaSend';
import { useState } from "react";

const MESSAGE_INFO = [
  {
    send: '2',
    receive: '1',
    message: 'What are you doing ?',
  },
  {
    send: '1',
    receive: '2',
    message: 'I am breathing....',
  },
  {
    send: '2',
    receive: '1',
    message: 'you are kidding again',
  },
  {
    send: '1',
    receive: '2',
    message: 'What is up ?',
  },
  {
    send: '2',
    receive: '1',
    message: 'Have you done your homework yet?',
  },
  {
    send: '2',
    receive: '1',
    message: 'I don\'t quite understand question 3, can you help me ?',
  },
  {
    send: '1',
    receive: '2',
    message: 'I did it',
  },
  {
    send: '1',
    receive: '2',
    message: 'Wait a minute, I\'ll send it right away',
  },
  {
    send: '2',
    receive: '1',
    message: 'Thank you',
  },
  {
    send: '2',
    receive: '1',
    message: 'I love youuuu....',
  },
  {
    send: '1',
    receive: '2',
    message: 'No problem',
  },
  {
    send: '2',
    receive: '1',
    message: 'Haha',
  },

];


const FRIEND_LIST =[
  {
    id: '2',
    name: 'Bella',
    last: 'Haha', 
  },
];

function App() {
  const [message, setMessage] = useState(MESSAGE_INFO);
  const [lastMess, setLastMess] = useState(FRIEND_LIST);
  
  function addMessage(message){
    setMessage(preMessage =>{
      return [...preMessage, message];
    });
  }
  
  function updateMessage(lastMess){
    setLastMess(preLastMess => {
      return[{id: lastMess.id, name: lastMess.name, last:lastMess.last}]
    })
  }

  return (
    <div className='main'>
      <ChatBar />
      <ChatFriends friend={lastMess}/>
      <ChatArea messageItem = {message}/>
      <ChatAreaSend onAddMessage={addMessage} onUpdateLastMessage={updateMessage} friend={lastMess}/>
    </div>
  );
}

export default App;

