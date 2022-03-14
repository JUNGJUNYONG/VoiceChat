import React, {MouseEvent} from 'react';
import './ConversationItem.css'

export default class ConversationItem extends React.Component<{ onClick?: Function }, unknown> {
    constructor(props: any) {
    super(props);
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