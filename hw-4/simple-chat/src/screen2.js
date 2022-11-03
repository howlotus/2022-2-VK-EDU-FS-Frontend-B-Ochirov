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
    let returnButton = document.getElementById("return_arrow");
    returnButton.addEventListener("click", toChatList);

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