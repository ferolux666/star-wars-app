import React from "react";
import {StarshipList} from "../sw-components/Item-list";
import { withRouter } from "react-router-dom";


const StarshipPage = ({history}) => {

    const onItemSelected = (selectedItem) => history.push(selectedItem);

    return (
        <StarshipList onItemSelected={onItemSelected}/>
    )
}

export default withRouter(StarshipPage)