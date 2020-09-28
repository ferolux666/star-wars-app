import React from 'react';
import Header from "../Header/Header";
import RandomPlanet from "../Random-planet/Random-planet";

import './App.css';
import PeoplePage from "../People-page/People-page";
import ErrorIndicator from "../Error-indicator/Error-indicator";
import ErrorButton from "../Error-button/Error-button";

export default class App extends React.Component {

    state = {
        hasError: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        })
    }

    render() {

        if(this.state.hasError) {
            return (
                <ErrorIndicator/>
            )
        }

        return (
            <div className="container">
                <Header />
                <RandomPlanet />
                <ErrorButton/>
                <PeoplePage/>
            </div>
        );
    }
}