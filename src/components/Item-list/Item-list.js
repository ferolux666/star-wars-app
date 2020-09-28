import React, {Component} from 'react';

import './Item-list.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../Spinner/Spinner";
import ErrorButton from "../Error-button/Error-button";

export default class ItemList extends Component {

    swapi = new SwapiService();

    state = {
        itemList: null
    }

    componentDidMount = () => {
        this.swapi.getAllPeople()
            .then(itemList => {
                this.setState({
                    itemList
                })
            })
    }

    renderItems = (items) => {
        return items.map(({id, name}) => {
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {name}
                </li>
            )
        })
    }


    render() {

        const { itemList } = this.state;

        if(!itemList) {
            return (
                <Spinner/>
            )
        }

        const items = this.renderItems(itemList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}