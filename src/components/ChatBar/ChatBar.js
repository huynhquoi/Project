import '../ChatBar/ChatBar.css'
import ChatInfor from './ChatInfo';
import ChatMenu from './ChatMenu';

function ChatBar() {
    return (
        <div className="chat-bar">
            <ChatInfor />
            <ChatMenu />
        </div>
    );
};

export default ChatBar;