import React, { useState } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
    ChatContainer, 
    ConversationHeader, 
    Avatar,
    Message,
    MessageList,
    MessageInput,
    VoiceCallButton,
    VideoCallButton,
    InfoButton
} from '@chatscope/chat-ui-kit-react'

function ChattingPage(user) {

    const [currentMessage, setCurrentMessage] = useState("")
    const [currentMessages, setCurrentMessages] = useState([]);

    const handleChange = (value) => {
        setCurrentMessage(value);
    };

    const handleSend = (text) => {
        const newArray = [...currentMessages];
        newArray.push(text);
        setCurrentMessages(newArray);
        setCurrentMessage('');
    };

    return (
        <div>
            <div>Chatting Page</div>
            <div>
                <ChatContainer>
                    <ConversationHeader>
                        <Avatar src = '/avatar/userMale.svg' size = 'md' />
                        <ConversationHeader.Actions>
                            <VoiceCallButton />
                            <VideoCallButton />
                            <InfoButton />
                        </ConversationHeader.Actions>
                    </ConversationHeader>
                    <MessageList>
                        {
                            currentMessages.map( (m, key) => 
                                <Message key = {key} model = {{
                                    message: m,
                                    sentTime: "15 mins ago",
                                    sender: "Eliot",
                                    direction: "incoming",
                                    position: "single"
                                }} />
                            )
                        }
                    </MessageList>
                    <MessageInput 
                        value = {currentMessage} 
                        onChange = {handleChange} 
                        onSend = {handleSend} 
                        disabled = {false} 
                        attachButton = {false}
                        placeholder = 'Type here...'
                    />
                </ChatContainer>
            </div>
        </div>
    );
}

export default ChattingPage;