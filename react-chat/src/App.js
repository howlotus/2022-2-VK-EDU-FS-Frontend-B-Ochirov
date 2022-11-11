import './App.css';
import React from "react";
import {PageChatList} from "./pages/PageChatList/PageChatList"
import {PageChat} from "./pages/PageChat/PageChat";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.changePage = this.changePage.bind(this);

        window.history.replaceState(null, '','/#chat_list');
        this.state = {
            page: "chat_list",
            currentChatName: null
        }
    }

    changePage(swap, name) {
        if (swap) {
            window.history.pushState(null, '/#chat_list', '/#chat')
            this.setState({
                    page: "chat",
                    currentChatName: name
                }
            )
        } else {
            window.history.replaceState(null, '','/#chat_list')
            this.setState({
                    page: "chat_list",
                    currentChatName: name
                }
            )
        }
    }

    render() {
        return (
            <div>
                {this.state.page === 'chat_list' &&
                    <PageChatList page={"chat_list"} changePage={this.changePage}/>}
                {this.state.page === 'chat' &&
                    <PageChat name={this.state.currentChatName} page={"chat"} changePage={this.changePage}/>}
            </div>
        )
    }
}

export default App;
