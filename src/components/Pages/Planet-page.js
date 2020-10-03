import React, {Component} from "react";
import Row from "../Row/Row";
import ErrorBoundary from "../Error-boundary/Error-boundary";
import PlanetDetails from "../sw-components/Planet-details";
import {PlanetList} from "../sw-components/Item-list";

export default class PlanetPage extends Component {

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
            <Row left={<PlanetList onItemSelected={this.onItemSelected}/>}
                 right={<ErrorBoundary>
                     <PlanetDetails itemId={this.state.selectedItem}/>
                 </ErrorBoundary>}/>
        )
    }
}