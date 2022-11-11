import React, {useState} from "react";
import "./PageChat.scss";
import {IconsTab} from "../../components/IconsTab/IconsTab";
import {Chat} from "../../components/Chat/Chat";
import {ChatInput} from "../../components/ChatInput/ChatInput"

export function PageChat(props) {
    const chats = JSON.parse(localStorage.getItem(props.name)).chats;
    const [chat, setChatState] = useState(chats);

    const handleChatUpdate = () => {
        const chats = JSON.parse(localStorage.getItem(props.name)).chats;
        setChatState(chats);
    }

    function handleChangePage() {
        props.changePage(false, null);
    }

    return (
        <div className="phone-screen">
            <IconsTab name={props.name} page={props.page} changePage={handleChangePage}/>
            <Chat chats={chat}/>
            <ChatInput name={props.name} updateChat={handleChatUpdate}/>
        </div>
    );
}