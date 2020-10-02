import React, {Component} from "react";
import {PersonList} from "../sw-components/Item-list";
import PersonDetails from "../sw-components/Person-details";
import Row from "../Row/Row";
import ErrorBoundary from "../Error-boundary/Error-boundary";

export default class PeoplePage extends Component {

    state = {
        selectedItem: 2
    }

    onItemSelected = (selectedItem) => {
        this.setState({
            selectedItem
        })
    }

    render() {
        return (
            <Row left={<PersonList onItemSelected={this.onItemSelected}/>}
                 right={<ErrorBoundary>
                     <PersonDetails itemId={this.state.selectedItem}/>
                 </ErrorBoundary>}/>
        )
    }
}