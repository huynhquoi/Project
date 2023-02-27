import './ChatAreaSend.css'
import React, {useState} from 'react';

function ChatAreaSend(props) {
    const [enteredMessage, setEnteredMessage] = useState('');

    function messageChange(event) {
        setEnteredMessage(event.target.value)
    }

    function submitMessage(event){
        event.preventDefault();

        const messageData={
            send:'1',
            receive:'2',
            message: enteredMessage,
        }


        props.onAddMessage(messageData);

        const lastMessData = {
            id: messageData.receive,
            name: props.friend[0].name,
            last: messageData.message
        }
        
        props.onUpdateLastMessage(lastMessData);

        setEnteredMessage('');
    }
    return (
        <div className='chat-area-send'>
            <form onSubmit={submitMessage} className='chat-area-send__form'>
                <input type='text' placeholder='Enter...' className='chat-area-send__input' value={enteredMessage} onChange={messageChange}></input>
                <button type='submit' className='chat-area-send__submit'><i className="fa-solid fa-paper-plane"></i></button>
            </form>
        </div>
    );
}

export default ChatAreaSend;