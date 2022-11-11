import React from "react";
import "./ChatList.scss";
import {ChatListButton} from "../ChatListButton/ChatListButton";

export function ChatList(props) {
    const names = ["Дженнифер", "Крис", "Олег", "Екатерина", "Сергей",
        "Кристина", "Никита", "Барри", "Оливер", "Кларк"];

    let fullChats = [];
    for (const chatName of names) {
        const chat = localStorage.getItem(chatName);

        let fullChat;
        if (chat) {
            fullChat = JSON.parse(chat);
        }
        else {
            const obj = {id: 0, class: 1, name: chatName, text: "Привет!", time: "Nov 04 2022 00:01:00 AM"};
            fullChat = {chats: [obj], name: chatName, seen: "был(а) 2 часа назад", status: false};

            localStorage.setItem(chatName, JSON.stringify(fullChat));
        }

        fullChats.push(fullChat);
    }

    fullChats.sort((a, b) => new Date(b.chats[b.chats.length - 1].time).getTime() - new Date(a.chats[a.chats.length - 1].time).getTime());

    return (
        <div className={"chat-list"}>
            {fullChats ?
                fullChats.map((chat, i) =>
                <ChatListButton chat={chat} key={i} changePage={props.changePage}/>)
                : null}
        </div>
    );
}