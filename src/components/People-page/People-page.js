import React, {Component} from "react";
import ItemList from "../Item-list/Item-list";
import PersonDetails from "../Person-details/Person-details";
import ErrorIndicator from "../Error-indicator/Error-indicator";

export default class PeoplePage extends Component {

    state = {
        itemSelected: 2,
        hasError: false
    }

    onItemSelected = (id) => {
        this.setState({
            itemSelected: id
        })
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        })
    }

    render() {

        console.log("render people page")

        if (this.state.hasError) {
            return (
                <ErrorIndicator/>
            )
        }

        return (
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList onItemSelected={this.onItemSelected}/>
                </div>
                <div className="col-md-6">
                    <PersonDetails itemSelected={ this.state.itemSelected } />
                </div>
            </div>
        )
    }
}