import React from 'react';
import './App.scss';
import { TopBar } from "./components/TopBar";
import { DesktopMenu } from "./components/DesktopMenu";

function App() {
    return (<div className="App">
        <TopBar />
        <div className="header-block">
            <DesktopMenu />
        </div>
    </div>)
}

export default App;
