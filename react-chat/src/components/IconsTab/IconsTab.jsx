import React from "react";
import "./IconsTab.scss";
import {DownIconsTab} from "../DownIconsTab/DownIconsTab";

export function IconsTab(props) {
    return (
        <div className={"icons-tab"}>
            <div className={"up-icons-tab"}>
                <i className={"material-icons sca-icon"}>signal_cellular_alt</i>&nbsp;
                <i className={"material-icons wifi-icon"}>wifi</i>&nbsp;
                <i className={"material-icons battery-icon"}>battery_3_bar</i>
            </div>
            <DownIconsTab name={props.name} page={props.page} changePage={props.changePage}></DownIconsTab>
        </div>
    );
}