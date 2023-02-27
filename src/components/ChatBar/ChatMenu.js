import './ChatMenu.css'

function ChatMenu(){
    return (
        <div className="chat-menu">
            <div className='chat-menu__option'>
                <i className="fa-solid fa-house"></i>
                PROPERTIES
            </div>
            <div className='chat-menu__option color'>
                <i className="fa-regular fa-comments"></i>
                CHAT
            </div>
            <div className='chat-menu__option'>
                <i className="fa-regular fa-calendar-days"></i>
                CALENDAR
            </div>
            <div className='chat-menu__option'>
                <i className="fa-solid fa-tags"></i>
                OFFER
            </div>
            <div className='chat-menu__option'>
                <i className="fa-regular fa-file"></i>
                DOCUMENT
            </div>
            <div className='chat-menu__option'>
                <i className="fa-solid fa-gears"></i>
                SETTING
            </div>
        </div>
    );
};

export default ChatMenu;