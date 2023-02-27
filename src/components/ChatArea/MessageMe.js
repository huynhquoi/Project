import './Message.css';

function MessageMe(props) {
    return (
        <div className='message-area me'>
            <div className='message me-color'>{props.messages}</div> 
        </div>
    );
}

export default MessageMe;