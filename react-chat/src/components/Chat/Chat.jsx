import React from "react";
import "./Chat.scss"
import {Message} from "../Message/Message";

export function Chat(props) {
    const chats = props.chats;

    return (
        <div className="chat">
            <div className="dynamic_content">
                {chats ? chats.map((obj, i) =>
                    <Message obj={obj} key={i}/>) : null}
            </div>
        </div>
    );
}