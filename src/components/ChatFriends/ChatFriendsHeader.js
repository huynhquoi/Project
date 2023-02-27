import './ChatFriendsHeader.css'

function ChatFriendsHeader() {
    return (
        <div className="chatFH-main">
            <div className="chatFH-title">CHAT</div>
            <div className="chatFH-search">
                <input type='text' placeholder='Search' className='chatFH-search__input'></input>
            </div>
        </div>
    );
};

export default ChatFriendsHeader;