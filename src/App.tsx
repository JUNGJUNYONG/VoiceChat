import React from 'react';
import './App.css';
import SideBar from "./sidebar/SideBar";

export default class App extends React.Component<unknown, unknown> {

    render() {
        return (
            <div className="App">
                <SideBar />
            </div>
        );
    }
};