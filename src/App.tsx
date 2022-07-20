import React from 'react';
import './App.css';
import SideBar from "./sidebar/SideBar";

export default class App extends React.Component<unknown, unknown> {

    render() {
        return (
            <div className="App">
                <video controls>
                    <source src="/media/movie.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
        );
    }
};