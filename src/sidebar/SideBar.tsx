import React from 'react';
import './SideBar.css'
import Search from "./Search/Search";
import ConversationList from "./ConversationList/ConversationList";
import ConversationItem from "./ConversationItem/ConversationItem";

export default class SideBar extends React.Component<unknown, unknown> {

    private _clickHandler (e: MouseEvent){
        console.log('click!!!');
    }
    render() {
        return (
            <div className="SideBar">
                <Search/>
                <ConversationList>
                    <ConversationItem onClick={this._clickHandler}>
                        <div className={"SideBarImgItem"}>
                            <img src={"http://photo.hankooki.com/newsphoto/2010/01/19/alba03201001191522340.jpg"} />
                        </div>
                        <div style={{display: "inline-block"}}>
                            <p>
                                채팅방 이름!
                            </p>
                        </div>
                    </ConversationItem>
                </ConversationList>
            </div>
        );
    }
};