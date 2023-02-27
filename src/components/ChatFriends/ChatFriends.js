import './ChatFriends.css';
import ChatFriendsHeader from './ChatFriendsHeader';
import ChatFriendsList from './ChatFriendsLists';

function ChatFriends(props) {
    return (
        <div className='chat-friend'>
            <ChatFriendsHeader />
            <ChatFriendsList items = {props}/>
        </div>
    );
};

export default ChatFriends;