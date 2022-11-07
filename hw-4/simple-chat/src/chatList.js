import toChat from "./chat";

export default function toChatList() {
    const names = ["Дженнифер", "Крис", "Олег", "Екатерина", "Сергей",
        "Кристина", "Никита", "Барри", "Оливер", "Кларк"];

    document.getElementById('phone_screen2').style.display = "none";
    document.getElementById('phone_screen1').style.display = "flex";

    let fullChats = []
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

    let htmlContent = '';
    for (const chat of fullChats) {
        htmlContent += makeListObj(chat);
    }
    document.getElementById('chat_list').innerHTML = htmlContent;

    let chatListButtons = document.getElementsByClassName("list-object");
    for (let button of chatListButtons) {
        button.addEventListener("click", function () {
            const info = button.id.split(";");
            toChat(info[0], info[1]);
        });
    }
}

function makeListObj(fullChat) {
    const last = fullChat.chats.pop();
    let status = "";
    if (fullChat.status)
        status = "done_all";

    return `
                <button class="list-object" id="` + fullChat.name + ";" + fullChat.seen + `">
                    <div class="avatar">
                        <i class="material-icons account-circle">account_circle</i>
                    </div>
                    <div class="name-text">
                        <div class="list-object-name">` + fullChat.name + `</div>
                        <div class="list-object-text">` + last.text + `</div>
                    </div>
                    <div class="time-status">
                        <div class="list-object-time">` + new Date(last.time).toLocaleTimeString("ru-Ru").substring(0, 5) + `</div>
                        <div class="list-object-status">
                            <i class="material-icons status-icon">`+ status + `</i>
                        </div>
                    </div>
                </button>`;
}