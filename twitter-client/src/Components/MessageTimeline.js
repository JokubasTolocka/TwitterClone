import React from 'react';
import MessageList from '../Containers/MessageList';

const MessageTimeline = props => {
    return (
        <div className='row'>
            <MessageList/>
        </div>
    );
};

export default MessageTimeline;