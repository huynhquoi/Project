import './Message.css';

function MessageOther(props) {
    return (
        <div className='message-area other'>
            <div className='message other-color'>{props.messages}</div> 
        </div>
    );
}

export default MessageOther;