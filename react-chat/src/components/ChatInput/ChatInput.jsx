import React from "react";
import "./ChatInput.scss";

export function ChatInput(props) {
    function handleSubmit(event) {
        event.preventDefault()

        const inputValue = event.target[0].value;
        if (inputValue === "")
            return;
        event.target[0].value = "";

        const name = props.name;
        let fullChat = JSON.parse(localStorage.getItem(name));
        let array = fullChat.chats;
        const obj = {
            id: array.length,
            class: 2,
            name: "Я",
            text: inputValue,
            time: (new Date())//.toLocaleTimeString("ru-Ru").substring(0, 5)
        };

        array.push(obj);
        fullChat.chats = array;
        fullChat.status = true;
        localStorage.setItem(name, JSON.stringify(fullChat));

        props.updateChat();

        event.target[0].value = ""
    }

    return (
        <div className="input-field">
            <div className="spaces"></div>
            <form id="my_form" className="form" onSubmit={handleSubmit}>
                <span className="in-span">
                    <label htmlFor="message_input"></label>
                    <input className="form-input" type="text" id="message_input" name="message" placeholder="Сообщение"/>
                </span>
            </form>
            <i className="material-icons attachment-icon">attachment</i>
        </div>
    );
}