import React from "react";
import "./NotificationMessage.scss"

export function NotificationMessage(props) {
    let notification = props.notification;

    return (
        <div className="hidden" style={{opacity: props.opacity}}>
            <div className="avatar-hidden">
                <i className="material-icons account-circle">account_circle</i>
            </div>
            <div className="name-text-hidden">
                <div className="name-hidden">{notification.name}</div>
                <div className="text-hidden">{notification.text}</div>
            </div>
        </div>
    );
}
