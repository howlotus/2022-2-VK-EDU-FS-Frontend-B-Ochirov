import React, {useState} from "react";
import "./PageChat.scss";
import {IconsTab} from "../../components/IconsTab/IconsTab";
import {Chat} from "../../components/Chat/Chat";
import {ChatInput} from "../../components/ChatInput/ChatInput"

export function PageChat(props) {
    let info = localStorage.getItem("currentValue").split(";");
    const chats = JSON.parse(localStorage.getItem(info[0])).chats;
    const [value, setValue] = useState(chats);

    const handleAddValue = () => {
        let info = localStorage.getItem("currentValue").split(";");
        const chats = JSON.parse(localStorage.getItem(info[0])).chats;
        setValue(chats);
    }

    function handleChatPick(event) {
        props.changePage(false);
    }

    return (
        <div className={"phone-screen"}>
            <IconsTab page={props.page} onClick={handleChatPick}/>
            <Chat chats={value}/>
            <ChatInput handleAddValue={handleAddValue}/>
        </div>
    );
}