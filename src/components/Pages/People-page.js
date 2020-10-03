import React from "react";
import {PersonList} from "../sw-components/Item-list";
import PersonDetails from "../sw-components/Person-details";
import Row from "../Row/Row";
import ErrorBoundary from "../Error-boundary/Error-boundary";
import {withRouter} from "react-router-dom";

const PeoplePage = ({history, match}) => {

    const { id } = match.params;

    const selectedId = id || 1;

    return (
        <Row left={<PersonList onItemSelected={(id) => history.push(id)}/>}
             right={<ErrorBoundary>
                 <PersonDetails itemId={selectedId}/>
             </ErrorBoundary>}/>
    )
}

export default withRouter(PeoplePage);

