import React from "react";
import ItemDetails, {Record} from "../Item-details/Item-details";
import WithSwapiService from "../Hoc-helpers/WithSwapiService";

const StarshipDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record label="Model" field="model"/>
            <Record label="Length" field="length"/>
            <Record label="Crew" field="crew"/>
        </ItemDetails>
    )
}

const mapMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        imageUrl: swapiService.getStarshipImage
    }
}

export default WithSwapiService(mapMethodToProps)(StarshipDetails);