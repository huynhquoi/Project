import './ChatFriendItem.css'

function ChatFriendItem(props) {
    return (
        <div className='chatFL-friend'>
            <div className='chatFL-friend__image'>
                <div className='friend-img'></div>
            </div>
            <div className='chatFL-friend__infor'>
                <div className='chatFL-friend__name'>
                    <div>{props.name}</div>
                </div>
                <div className='chatFL-friend__newMess'>
                    <div>{props.mess} </div>
                </div>
            </div>
        </div>
    );
}

export default ChatFriendItem;