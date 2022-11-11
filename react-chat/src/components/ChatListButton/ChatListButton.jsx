import React from "react";
import "./ChatListButton.scss";

export function ChatListButton(props) {
    let chat = props.chat;
    let last = chat.chats[chat.chats.length - 1];
    let status = "";
    if (chat.status)
        status = "done_all";

    function handleChangePage() {
        props.changePage(true, chat.name);
    }

    return (
        <button className={"list-object"} id={chat.name + ";" + chat.seen} onClick={handleChangePage}>
            <div className={"avatar"}>
                <i className={"material-icons account-circle"}>account_circle</i>
            </div>
            <div className={"name-text"}>
                <div className={"list-object-name"}>{chat.name}</div>
                <div className={"list-object-text"}>{last.text}</div>
            </div>
            <div className={"time-status"}>
                <div className={"list-object-time"}>{new Date(last.time).toLocaleTimeString("ru-Ru").substring(0, 5)}</div>
                <div className={"list-object-status"}>
                    <i className="material-icons status-icon">{status}</i>
                </div>
            </div>
        </button>
    );
}