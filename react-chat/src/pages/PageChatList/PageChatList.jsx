import React from "react";
import "./PageChatList.scss";
import {IconsTab} from "../../components/IconsTab/IconsTab";
import {ChatList} from "../../components/ChatList/ChatList";

export function PageChatList(props) {
    function handleChatPick() {
        props.changePage(true);
    }

    return (
        <div className={"phone-screen"}>
            <IconsTab page={props.page}></IconsTab>
            <ChatList handleClick={handleChatPick}></ChatList>
            <div className={"pulse"}>
                <i className={"material-icons create-icon"}>create</i>
            </div>
        </div>
    );
}