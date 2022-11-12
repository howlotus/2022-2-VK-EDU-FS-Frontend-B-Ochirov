import React from "react";
import "./Message.scss"

export function Message(props) {
    let obj = props.obj;

    return (
        <div className={"message message--user-"+ obj.class} id={"message" + obj.id}>
            <div className="message-text">
                <div className="name">{obj.name}</div>
                <div className="text">{obj.text}</div>
                <div className="time">
                    {new Date(obj.time).toLocaleTimeString("ru-Ru").substring(0, 5)}
                    <i className="material-icons" id="done">done_all</i>
                </div>
            </div>
        </div>
    );
}