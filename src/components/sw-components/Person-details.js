import ItemDetails, {Record} from "../Item-details/Item-details";
import React from "react";
import WithSwapiService from "../Hoc-helpers/WithSwapiService";

const PersonDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record label="Name" field="name"/>
            <Record label="Eye Color" field="eyeColor"/>
            <Record label="Birth Year" field="birthYear"/>
        </ItemDetails>
    )
}

const mapMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        imageUrl: swapiService.getPersonImage
    }
}

export default WithSwapiService(PersonDetails, mapMethodToProps);