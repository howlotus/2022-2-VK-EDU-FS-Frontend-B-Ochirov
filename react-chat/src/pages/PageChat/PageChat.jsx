import React, {useState} from "react";
import "./PageChat.scss";
import {Chat} from "../../components/Chat/Chat";
import {ChatInput} from "../../components/ChatInput/ChatInput"

export function PageChat(props) {
    const chats = JSON.parse(localStorage.getItem(props.name)).chats;
    const [chat, setChatState] = useState(chats);

    const handleChatUpdate = () => {
        const chats = JSON.parse(localStorage.getItem(props.name)).chats;
        setChatState(chats);
    }

    return (
        <div className={"chat-area"}>
            <Chat chats={chat}/>
            <ChatInput name={props.name} updateChat={handleChatUpdate}/>
        </div>
    );
}