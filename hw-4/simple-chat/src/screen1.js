toChatList();

let returnButton = document.getElementById("return_arrow");
returnButton.addEventListener("click", toChatList);

let chatListButton = document.getElementsByClassName("list-object");
for (let button of chatListButton) {
    button.addEventListener("click", toChat);
}

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
            const obj = {id: 0, class: 1, name: chatName, text: "Привет!", time: "00:01"};
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

function toChat(name, seen) {
    document.getElementById('phone_screen1').style.display = "none";
    document.getElementById('phone_screen2').style.display = "flex";

    let htmlContent = '';
    const chats = JSON.parse(localStorage.getItem(name)).chats;
    for (const obj of chats) {
        htmlContent += makeMessage(obj);
    }
    document.getElementById('dynamic_content').innerHTML = htmlContent;

    document.getElementById('user_name').innerText = name;
    document.getElementById('user_seen').innerText = seen;

    let input = document.getElementById('message_input');
    const form = document.getElementById('my_form');

    input.value = "";
    form.addEventListener('submit', handleSubmit);

    function handleSubmit(event) {
        event.preventDefault();

        const inputValue = input.value;
        if (inputValue === "")
            return;
        input.value = "";

        const name = document.getElementById('user_name').innerText;
        let fullChat = JSON.parse(localStorage.getItem(name));
        let array = fullChat.chats;
        const obj = {
            id: array.length,
            class: 2,
            name: "Я",
            text: inputValue,
            time: (new Date()).toLocaleTimeString("ru-Ru").substring(0, 5)
        };

        array.push(obj);
        fullChat.chats = array;
        fullChat.status = true;
        localStorage.setItem(name, JSON.stringify(fullChat));

        document.getElementById('dynamic_content').insertAdjacentHTML('beforeend', makeMessage(obj));
    }
}

function makeMessage(obj) {
    return `
                <div class="message message--user-`+ obj.class + `" id="message` + obj.id + `">
                    <div class="message-text">
                        <div class="name">` + obj.name + `</div>
                        <div class="text">` + obj.text + `</div>
                        <div class="time">` + obj.time + `   <i class="material-icons" id="done">done_all</i></div>
                    </div>
                </div>`;
}