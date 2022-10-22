let elem = document.getElementById('phone_screen');
elem.remove();
let htmlContent = `<div class="phone-screen">
        <div class="icons-tab">
            <div class="up-icons-tab">
                <i class="material-icons"  id="sca_icon">signal_cellular_alt</i>&nbsp;
                <i class="material-icons" id="wifi_icon">wifi</i>&nbsp;
                <i class="material-icons" id="battery_icon">battery_3_bar</i>
            </div>
            <div class="down-icons-tab">
                <i class="material-icons" id="arrow_icon">arrow_back</i>
                <i class="material-icons" id="account_icon">account_circle</i>
                <div class="user">
                    <div class="username">Дженнифер</div>
                    <div class="userseen">была 2 часа назад</div>
                </div>
                <i class="material-icons" id="search_icon">search</i>
                <i class="material-icons" id="vert_icon">more_vert</i>
            </div>
        </div>
        <div class="chat">
            <div id="dynamic_content"></div>
        </div>
        <div class="input-field">
            <div class="spaces"></div>
            <form id="myForm" class="form">
                <span class="in-span">
                    <label for="message"></label>
                    <input class="form-input" type="text" id="message" name="message" placeholder="Сообщение">
                </span>
            </form>
            <i class="material-icons" id="attachment_icon">attachment</i>
        </div>
    </div>`;
document.getElementById('body').insertAdjacentHTML('beforeend', htmlContent);

htmlContent = '';
const jenChat = localStorage.getItem("jennifer_chat");

if (jenChat) {
    const array = JSON.parse(jenChat);
    for (const obj of array) {
        htmlContent += makePost(obj);
    }
}
else {
    const obj = {id: 0, class: 1, name: "Дженнифер", text: "Привет!", time: "00:01"};

    htmlContent += makePost(obj);
    localStorage.setItem("jennifer_chat", JSON.stringify([obj]));
}
document.getElementById('dynamic_content').insertAdjacentHTML('beforeend', htmlContent);

const form = document.querySelector('form');
const input = document.querySelector('.form-input');

form.addEventListener('submit', handleSubmit);

function makePost(obj) {
    return `<div class="message message--user-`+ obj.class + `" id="message` + obj.id + `">
                <div class="message-text">
                    <div class="name">` + obj.name + `</div>
                    <div class="text">` + obj.text + `</div>
                    <div class="time">` + obj.time + `   <i class="material-icons" id="done">done_all</i></div>
                </div>
            </div>`;
}

function handleSubmit (event) {
    event.preventDefault();

    const inputValue = input.value;
    if (inputValue === "")
        return;
    input.value = "";

    let array = JSON.parse(localStorage.getItem("jennifer_chat"));
    const obj = {
        id: array.length,
        class: 2,
        name: "Я",
        text: inputValue,
        time: (new Date()).toLocaleTimeString("ru-Ru").substring(0, 5)
    };

    array.push(obj);
    localStorage.setItem("jennifer_chat", JSON.stringify(array));

    document.getElementById('dynamic_content').insertAdjacentHTML('beforeend', makePost(obj));
}