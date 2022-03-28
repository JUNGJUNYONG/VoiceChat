import React, {MouseEvent} from 'react';
import './ConversationItem.css'

export type ConversationItemType = { onClick?: Function }

export type ConversationItemStateType = any;


export default class ConversationItem extends React.Component<ConversationItemType, ConversationItemStateType> {
    constructor(props: ConversationItemType | undefined) {
        if(!!props) super(props);
    }

    onClick(e: MouseEvent){
        if(this.props.onClick){
            this.props.onClick(e);
        }
    }


    render() {
        const {children} = this.props;
        return (
            <li className="ConversationItem" onClick={this.onClick.bind(this)}>
                {children}
            </li>
        );
    }
};