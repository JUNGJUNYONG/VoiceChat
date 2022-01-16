import React from 'react';
import './ConversationList'

export default class ConversationList extends React.Component<unknown, unknown> {
    constructor(props: any) {
    super(props);
    }

    render() {
        const {children} = this.props;
        return (
            <div className="ConversationList">
                <div className="scrollbar">
                    <ul>
                       {children}
                    </ul>
                </div>
            </div>
        );
    }
};