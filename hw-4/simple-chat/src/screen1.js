function toChatList() {
    const names = ["Дженнифер", "Крис", "Олег", "Екатерина", "Сергей",
        "Кристина", "Никита", "Барри", "Оливер", "Кларк"];

    document.getElementById('phone_screen2').style.display = "none";
    document.getElementById('phone_screen1').style.display = "flex";

    let htmlContent = '';
    for (const chatName of names) {
        const chat = localStorage.getItem(chatName);

        let fullChat;
        if (chat) {
            fullChat = JSON.parse(chat);
        }
        else {
            const obj = {id: 0, class: 1, name: chatName, text: "cwed!", time: "00:01"};
            fullChat = {chats: [obj], name: chatName, seen: "был(а) 2 часа назад", status: false};

            localStorage.setItem(chatName, JSON.stringify(fullChat));
        }

        htmlContent += makeListObj(fullChat);
    }
    document.getElementById('chat_list').innerHTML = htmlContent;
}

function makeListObj(fullChat) {
    const last = fullChat.chats.pop();
    let status = "";
    if (fullChat.status)
        status = "done_all";

    return `
                <button class="list-object">
                    <div class="avatar">
                        <i class="material-icons account-circle">account_circle</i>
                    </div>
                    <div class="name-text">
                        <div class="list-object-name">` + fullChat.name + `</div>
                        <div class="list-object-text">` + last.text + `</div>
                    </div>
                    <div class="time-status">
                        <div class="list-object-time">` + last.time + `</div>
                        <div class="list-object-status">
                            <i class="material-icons status-icon">`+ status + `</i>
                        </div>
                    </div>
                </button>`;
}