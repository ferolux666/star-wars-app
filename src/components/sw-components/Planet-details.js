import ItemDetails, {Record} from "../Item-details/Item-details";
import React from "react";
import WithSwapiService from "../Hoc-helpers/WithSwapiService";

const PlanetDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record label="Name" field="name"/>
            <Record label="Diameter" field="diameter"/>
            <Record label="Rotation Period" field="rotationPeriod"/>
        </ItemDetails>
    )
}

const mapMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        imageUrl: swapiService.getPlanetImage
    }
}

export default WithSwapiService(PlanetDetails, mapMethodToProps);