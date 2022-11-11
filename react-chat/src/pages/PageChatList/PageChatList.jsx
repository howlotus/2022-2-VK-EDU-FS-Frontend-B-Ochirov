import React from "react";
import "./PageChatList.scss";
import {ChatList} from "../../components/ChatList/ChatList";

export function PageChatList(props) {
    return (
        <div className={"chat-area"}>
            <ChatList changePage={props.changePage}></ChatList>
            <div className={"pulse"}>
                <i className={"material-icons create-icon"}>create</i>
            </div>
        </div>
    );
}