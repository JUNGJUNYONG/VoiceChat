import React from 'react';
import './SideBar.css'
import Search from "./Search/Search";
import ConversationList from "./ConversationList/ConversationList";

export default class SideBar extends React.Component<unknown, unknown> {

    render() {
        return (
            <div className="SideBar">
                <Search/>
                <ConversationList>
                    <li>
                        <p>testttt</p>
                    </li>
                </ConversationList>
            </div>
        );
    }
};