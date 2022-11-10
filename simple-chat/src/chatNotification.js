import toChatList from "./chatList";

function notificationUp() {
    let notifications = document.getElementsByClassName('hidden');

    const f0 = () => {
        for (let note of notifications) {
            note.style.display = "flex";
        }
    }

    const f1 = () => {
        for (let note of notifications) {
            note.style.opacity = "1";
        }
    }

    const f2 = () => {
        for (let note of notifications) {
            note.style.opacity = "0";
        }
    }
    const f3 = () => {
        for (let note of notifications) {
            note.style.display = "none";
        }
    }
    f0();
    setTimeout(f1, 1000);
    setTimeout(f2, 5000);
    setTimeout(f3, 7000);

    toChatList()
}

export default function newMessage(chatName, chatText) {
    let names = document.getElementsByClassName("name-hidden");
    let texts = document.getElementsByClassName("text-hidden");

    let chat = localStorage.getItem(chatName);

    if (chat) {
        let fullChat = JSON.parse(chat);

        for (let i of Array(names.length).keys()) {
            names[i].innerText = fullChat.name;
            texts[i].innerText = chatText;
        }

        let chatsList = fullChat.chats;
        const obj = {id: chatsList.length, class: 1, name: fullChat.name, text: chatText, time: new Date()};
        chatsList.push(obj);

        fullChat = {chats: chatsList, name: fullChat.name, seen: "был(а) 2 часа назад", status: false};

        localStorage.setItem(fullChat.name, JSON.stringify(fullChat));
    }

    setTimeout(notificationUp, 2500);
}