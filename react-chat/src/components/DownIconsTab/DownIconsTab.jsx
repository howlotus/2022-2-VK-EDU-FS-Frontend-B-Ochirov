import React from "react";
import './DownIconsTab.scss';

export function DownIconsTab(props) {
    function handleChangePage() {
        props.changePage(false, null);
    }

    const status = props.page === "chat_list";

    if (status) {
        return (
            <div className="down-icons-tab">
                <i className="material-icons menu-icon">menu</i>
                <div className="messenger-caption">Messenger</div>
                <i className="material-icons search-icon">search</i>
            </div>
        );
    }
    else {
        return (
            <div className="down-icons-tab">
                <button id="return_arrow" className="return-arrow" onClick={handleChangePage}>
                    <i className="material-icons arrow-icon">arrow_back</i>
                </button>
                <i className="material-icons account-icon">account_circle</i>
                <div className="user">
                    <div className="username" id="user_name">{props.name}</div>
                    <div className="userseen" id="user_seen">был(а) 2 часа назад</div>
                </div>
                <i className="material-icons search-icon">search</i>
                <i className="material-icons vert-icon">more_vert</i>
            </div>
        );
    }
}