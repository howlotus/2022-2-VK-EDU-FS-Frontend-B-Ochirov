import './App.css';
import React from "react";
import {PageChatList} from "./pages/PageChatList/PageChatList"
import {PageChat} from "./pages/PageChat/PageChat";
import {NotificationMessage} from "./components/NotificationMessage/NotificationMessage";
import {IconsTab} from "./components/IconsTab/IconsTab";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.changePage = this.changePage.bind(this);

        window.history.replaceState(null, '','/#chat_list');
        this.state = {
            page: "chat_list",
            chatName: null
        }
    }

    componentDidMount() {
        this.newMessage("Никита", "Как дела?");
    }

    changePage(swap, name) {
        if (swap) {
            window.history.pushState(null, '/#chat_list', '/#chat')
            this.setState({
                    page: "chat",
                    chatName: name
                }
            )
        } else {
            window.history.replaceState(null, '','/#chat_list')
            this.setState({
                    page: "chat_list",
                    chatName: name
                }
            )
        }
    }

    render() {
        return (
            <div className={"phone-screen"}>
                {this.state.isNotification &&
                    <NotificationMessage notification={this.state.notification} opacity={this.state.opacity}/>}
                <IconsTab name={this.state.chatName} page={this.state.page} changePage={this.changePage}/>
                {this.state.page === 'chat_list' &&
                    <PageChatList changePage={this.changePage}/>}
                {this.state.page === 'chat' &&
                    <PageChat name={this.state.chatName}/>}
            </div>
        )
    }

    newMessage(chatName, chatText) {
        let chat = localStorage.getItem(chatName);

        if (chat) {
            let fullChat = JSON.parse(chat);

            let chatsList = fullChat.chats;
            const obj = {id: chatsList.length, class: 1, name: fullChat.name, text: chatText, time: new Date()};
            chatsList.push(obj);

            fullChat = {chats: chatsList, name: fullChat.name, seen: "был(а) 2 часа назад", status: false};
            localStorage.setItem(fullChat.name, JSON.stringify(fullChat));

            this.setState({
                notification: {
                    name: chatName,
                    text: chatText
                }
            })

            const update = (display, opacity) => {
                this.setState({
                    isNotification: display,
                    opacity: opacity
                })
            }

            let timings = [0, 1000, 5000, 7000];
            let states = [
                {display: true, opacity: "0"},
                {display: true, opacity: "1"},
                {display: true, opacity: "0"},
                {display: false, opacity: "0"}
            ];

            for (let i in timings) {
                setTimeout(() => {
                    update(states[i].display, states[i].opacity);
                }, timings[i]);
            }
        }
    }
}

export default App;
