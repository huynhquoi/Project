import './ChatAreaFriend.css'

function ChatAreaFriend() {
    return (
        <div className='chat-area-friend__main'>
            <div className='chat-area-friend__image'>
                <div className='image'></div>
            </div>
            <div className='line'>
                <div className='chat-area-friend__name'>Bella</div>
                <div className='chat-area-friend__active'> <i class="fa-solid fa-circle"></i>  Active</div>
            </div>
        </div>
    );
}

export default ChatAreaFriend;