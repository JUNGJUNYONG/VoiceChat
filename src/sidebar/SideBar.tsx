import React from 'react';
import './SideBar.css'
import Search from "./Search/Search";
import ConversationList from "./ConversationList/ConversationList";
import ConversationItem from "./ConversationItem/ConversationItem";


type RoomListType = {
    name: string
    icon: string
}

enum ICON {
    default = 'http://photo.hankooki.com/newsphoto/2010/01/19/alba03201001191522340.jpg'
}

export default class SideBar extends React.Component<unknown, { RoomList: Array<RoomListType> }> {

    constructor(props: unknown) {
        super(props);
        this.state = {
            RoomList: [{name: 'test1',icon: ICON.default},{name: 'test2',icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNpTHC8ac6uBrRtR59nhWU8gc4U7APeN-KIQ&usqp=CAU"}]
        }
    }

    private _clickHandler(e: MouseEvent) {
        console.log('click!!!',e);
    }


    render() {
        return (
            <div className="SideBar">
                <Search/>
                <ConversationList>
                    {this.state.RoomList.map((data,key) => {
                        return (
                            <ConversationItem onClick={this._clickHandler} key={key}>
                                <div className={"SideBarImgItem"}>
                                    <img
                                        src={data.icon}/>
                                </div>
                                <div style={{display: "inline-block"}}>
                                    <p>
                                        {data.name}
                                    </p>
                                </div>
                            </ConversationItem>)
                    })}
                </ConversationList>
            </div>
        );
    }
};