import React from "react";
import './DownIconsTab.scss';

export function DownIconsTab(props) {
    const status = props.page === "chat_list";
    let info = localStorage.getItem("currentValue").split(";");

    return (
        <div>
            { status ? (
                <div className="down-icons-tab">
                    <i className="material-icons menu-icon">menu</i>
                    <div className="messenger-caption">Messenger</div>
                    <i className="material-icons search-icon">search</i>
                </div>
            ) : (
                <div className="down-icons-tab">
                <button id="return_arrow" className="return-arrow" onClick={props.onClick}>
                    <i className="material-icons arrow-icon">arrow_back</i>
                </button>
                <i className="material-icons account-icon">account_circle</i>
                <div className="user">
                    <div className="username" id="user_name">{info[0]}</div>
                    <div className="userseen" id="user_seen">{info[1]}</div>
                </div>
                <i className="material-icons search-icon">search</i>
                <i className="material-icons vert-icon">more_vert</i>
            </div>)}
        </div>
    );
}