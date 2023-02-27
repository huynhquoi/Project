import './Message.css';
import MessageMe from './MessageMe';
import MessageOther from './MessageOther';

function Message(props) {

    if (props.idsend === '1') {
        return (
            <MessageMe messages = {props.messages} />
        );
    }
    else if (props.idsend === '2') {
        return (
            <MessageOther messages = {props.messages} />
        );
    }
}

export default Message;