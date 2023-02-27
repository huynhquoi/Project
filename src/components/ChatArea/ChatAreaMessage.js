import './ChatAreaMessage.css';
import Message from './Message';
import React, { useEffect, useRef } from 'react';


function ChatAreaMessage(props) {
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
      }, [props.message.messageItem]);

    return (
        <div className='chat-area-message'>
            {props.message.messageItem.map((mess) => (
                <Message
                messages = {mess.message}
                idsend = {mess.send}/>
            ))}
            <li ref={messagesEndRef}></li>
        </div>
    );
};

export default ChatAreaMessage;