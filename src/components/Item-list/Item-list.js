import React, {Component} from 'react';
import './Item-list.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../Spinner/Spinner";

export default class ItemList extends Component {

    swapi = new SwapiService();

    state = {
        itemList: null
    }

    componentDidMount = () => {
        const { getData } = this.props;
        getData()
            .then(itemList => {
                this.setState({
                    itemList
                })
            })
    }

    renderItems = (items) => {
        return items.map( item => {
            const {id} = item;
            const { renderItem } = this.props;
            debugger;
            const label = renderItem(item)
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {label}
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