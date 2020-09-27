import React from 'react';
import Header from "../Header/Header";
import ItemList from "../Item-list/Item-list";
import PersonDetails from "../Person-details/Person-details";
import RandomPlanet from "../Random-planet/Random-planet";

import './App.css';

const App = () => {
    return (
        <div className="container">
            <Header />
            <RandomPlanet />

            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList />
                </div>
                <div className="col-md-6">
                    <PersonDetails />
                </div>
            </div>
        </div>
    );
};

export default App;