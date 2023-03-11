import React from 'react';
import './App.css';
import {Sidebar} from "./features/sidebar/Sidebar";
import {ConstructorCalculator} from "./features/constructorCalculator/ConstructorCalculator";

function App() {
    return (
        <div className="App">
            <Sidebar/>
            <ConstructorCalculator/>
        </div>
    );
}

export default App;
