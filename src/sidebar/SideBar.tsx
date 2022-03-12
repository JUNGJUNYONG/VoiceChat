import React, {ChangeEvent} from 'react';
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

export default class SideBar extends React.Component<unknown, { renderList: Array<RoomListType> }> {

    constructor(props: unknown) {
        super(props);
        this.state = {
            renderList: [],
        }

    }
    private roomList = [{name: 'test1',icon: ICON.default},{name: 'test2',icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNpTHC8ac6uBrRtR59nhWU8gc4U7APeN-KIQ&usqp=CAU"}];

    componentDidMount(){
        this.setState({renderList: this.roomList});
    }


    private _clickHandler(e: MouseEvent) {
        console.log('click!!!',e);
    }
    private searchOnChange(e: ChangeEvent){
        const searchText =(e.target as HTMLInputElement).value;
        this.setState({renderList: this.roomList.filter((Room)=>{ return Room.name.includes(searchText)})})
    }


    render() {
        return (
            <div className="SideBar">
                <Search onChange={this.searchOnChange.bind(this)}/>
                <ConversationList>
                    {this.state.renderList.map((data,key) => {
                        return (
                            <ConversationItem onClick={this._clickHandler.bind(this)} key={key}>
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