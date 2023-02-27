import './ChatArea.css'
import ChatAreaHeader from './ChatAreaHeader';
import ChatAreaFriend from './ChatAreaFriend';
import ChatAreaMessage from './ChatAreaMessage';

function ChatArea(props) {
    return (
        <div className="chat-area">
            <ChatAreaHeader />
            <ChatAreaFriend />
            <ChatAreaMessage message={props}/>
        </div>
    );
};

export default ChatArea;
