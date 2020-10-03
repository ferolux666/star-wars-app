import WithData from "../Hoc-helpers/WithData";
import ItemList from "../Item-list/Item-list";
import React from "react";
import WithSwapiService from "../Hoc-helpers/WithSwapiService";

const WithChildFunction = (renderFunc) => (Wrapped) => {
    return (props) => {
        return (
            <Wrapped {...props} renderItem={renderFunc}/>
        )
    }
}

const renderNameFunc = (i) => i.name;

const mapPersonToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
}

const mapPlanetToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
}

const mapStarshipToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
}

const PersonList = WithSwapiService(mapPersonToProps)(WithData(WithChildFunction(renderNameFunc)(ItemList)))
const PlanetList = WithSwapiService(mapPlanetToProps)(WithData(WithChildFunction(renderNameFunc)(ItemList)))
const StarshipList= WithSwapiService(mapStarshipToProps)(WithData(WithChildFunction(renderNameFunc)(ItemList)))


export {
    PersonList,
    PlanetList,
    StarshipList
}