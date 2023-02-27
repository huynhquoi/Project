import './ChatFriendsLists.css'
import ChatFriendItem from './ChatFriendItem';

function ChatFriendsList (props) {
    return (
        <div className="chatFL-main-list">
            {props.items.friend.map((friend) => (
                <ChatFriendItem 
                    key={friend.id}
                    name={friend.name}
                    mess={friend.last}
                    />
            ))}
        </div>
    );
};

export default ChatFriendsList;