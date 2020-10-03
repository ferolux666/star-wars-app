import React from 'react';
import Header from "../Header/Header";
import './App.css';
import ErrorBoundary from "../Error-boundary/Error-boundary";
import {SwapiServiceProvider} from "../swapi-service-context/swapi-service-context";
import SwapiService from "../../services/swapi-service";
import RandomPlanet from "../Random-planet/Random-planet";
import PeoplePage from "../Pages/People-page";
import PlanetPage from "../Pages/Planet-page";
import StarshipPage from "../Pages/Starship-page";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import StarshipDetails from "../sw-components/Starship-details";

export default class App extends React.Component {

    swapiService = new SwapiService();

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        })
    }

    render() {
        return (
            <SwapiServiceProvider value={this.swapiService}>
                <ErrorBoundary>
                    <div className="container">
                        <Router>
                            <Header/>
                            <RandomPlanet/>
                            <Switch>
                                <Route path="/people/:id?" exact component={PeoplePage}/>
                                <Route path="/planet" exact component={PlanetPage}/>
                                <Route path="/starship" exact component={StarshipPage}/>
                                <Route path="/starship/:id" render={({match}) => {
                                    const {id} = match.params;
                                    return (
                                        <ErrorBoundary>
                                            <StarshipDetails itemId={id}/>
                                        </ErrorBoundary>
                                    )
                                }}/>
                                <Route component={PlanetPage}/>
                            </Switch>

                        </Router>
                    </div>
                </ErrorBoundary>
            </SwapiServiceProvider>
        );
    }
}