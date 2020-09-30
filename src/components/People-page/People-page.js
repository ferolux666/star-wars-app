import React, {Component} from "react";
import ItemList from "../Item-list/Item-list";
import PersonDetails from "../Person-details/Person-details";
import SwapiService from "../../services/swapi-service";
import Row from "../Row/Row";
import ErrorBoundary from "../Error-boundary/Error-boundary";

export default class PeoplePage extends Component {

    swapi = new SwapiService();

    state = {
        itemSelected: 2,
    };

    onItemSelected = (id) => {
        this.setState({
            itemSelected: id
        })
    };

    render() {
        const itemList = (
            <ItemList onItemSelected={this.onItemSelected}
                      getData={this.swapi.getAllPeople}
                      renderItem = { (i) => `${i.name} - (${i.birthYear})`}/>);

        const personDetails = (
            <ErrorBoundary>
                <PersonDetails itemSelected={this.state.itemSelected}/>
            </ErrorBoundary>
        );

        return (
            <Row left={itemList} right={personDetails}/>
        );
    }
}