import './App.css';
import React from "react";
import {PageChatList} from "./pages/PageChatList/PageChatList"
import {PageChat} from "./pages/PageChat/PageChat";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.changePage = this.changePage.bind(this)
        window.history.replaceState(null, '','/#chat_list')
        this.state = {
            page: "chat_list"
        }

        window.addEventListener('popstate', () => {
                if (this.state.page === "chat") {
                    this.changePage(false)
                } else {
                    this.changePage(true)
                }
            }
        )
    }

    changePage(swap) {
        if (swap) {
            window.history.pushState(null, '/#chat_list', '/#chat')
            this.setState({
                    page: "chat"
                }
            )
        } else {
            window.history.replaceState(null, '','/#chat_list')
            this.setState({
                    page: "chat_list"
                }
            )
        }
    }

    render() {
        return (
            <div>
                {this.state.page === 'chat_list' && <PageChatList page={"chat_list"} changePage={this.changePage}>
                </PageChatList>}
                {this.state.page === 'chat' &&
                    <PageChat page={"chat"} changePage={this.changePage}>
                    </PageChat>}
            </div>
        )
    }
}

export default App;
