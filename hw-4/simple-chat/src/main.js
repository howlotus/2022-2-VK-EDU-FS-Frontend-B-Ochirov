toChatList();

let chatListButtons = document.getElementsByClassName("list-object");
for (let button of chatListButtons) {
    button.addEventListener("click", toChat);
}