if (localStorage.getItem("messages")) {
    const ids = localStorage.getItem("messages").split(";");

    const makePost = (id) => `
<div class="message message--user-2" id="` + id + `">
                    <time class="message__time">21.02.2017 21:12:07</time>
                    <figure class="message__author-pic">
                        <img src="https://placeimg.com/40/40/people">
                    </figure>
                    <div class="message__text">
                        <p class="inner-text">` + id + `</p>
                    </div>
                </div>`;

    let htmlContent = ''

    ids.forEach(id => {
        htmlContent += makePost(id)
    })

    const d1 = document.getElementById('dynamic-content');
    d1.insertAdjacentHTML('beforeend', htmlContent);
}

const form = document.querySelector('form');
const input = document.querySelector('.form-input');
const message = document.querySelector('.messageabcd');

let a = localStorage.getItem("messages");

if (a) {
    message.innerText = a;
}

form.addEventListener('submit', this.handleSubmit.bind(this));
form.addEventListener('keypress', this.handleKeyPress.bind(this));

let tmp = "";
function handleSubmit (event) {
    event.preventDefault();
    let tmp;
    let a = localStorage.getItem("messages");
    if (a) {
        tmp = a + ";" + input.value;
    }
    else {
        tmp = input.value;
    }
    localStorage.setItem("messages", tmp);
    message.innerText = localStorage.getItem("messages");

    const makePost = (id) => `
<div class="message message--user-2" id="` + id + `">
                    <time class="message__time">21.02.2017 21:12:07</time>
                    <figure class="message__author-pic">
                        <img src="https://placeimg.com/40/40/people">
                    </figure>
                    <div class="message__text">
                        <p class="inner-text">` + id + `</p>
                    </div>
                </div>`;

    let htmlContent = ''

    htmlContent += makePost(input.value)

    const d1 = document.getElementById('dynamic-content');
    d1.insertAdjacentHTML('beforeend', htmlContent);
    input.value = ""
}