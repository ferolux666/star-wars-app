import React, {Component} from 'react';
import './Random-planet.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../Spinner/Spinner";
import ErrorIndicator from "../Error-indicator/Error-indicator";

export default class RandomPlanet extends Component {

    state = {
        planet: {},
        loading: true,
        error: false,
    }


    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 100000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    swApi = new SwapiService();

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        })
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 10 + 2);
        this.swApi.getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    }

    render() {
        const {planet, loading, error} = this.state;

        const hasData = !(error || loading);
        const errorIndicator = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = hasData ? <ViewPlanet planet={planet}/> : null;

        return (
            <div className="random-planet jumbotron rounded">
                {spinner}
                {content}
                {errorIndicator}
            </div>
        );
    }
}

const ViewPlanet = ({planet}) => {

    const { id, name, population, rotationPeriod, diameter } = planet;

    return (
        <React.Fragment>
            <img className="planet-image"
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                 alt="Картинка рандомной планеты"/>
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}
