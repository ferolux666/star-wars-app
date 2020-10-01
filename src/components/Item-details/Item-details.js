import React, { Component } from 'react';
import './Item-details.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../Spinner/Spinner";
import ErrorButton from "../Error-button/Error-button";

export const Record = ({label, field, itemDetails}) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}:</span>
            <span>{itemDetails[field]}</span>
        </li>
    )
}

export default class ItemDetails extends Component {

    swapi = new SwapiService();

    state = {
        itemDetails: null,
        imageUrl: null
    }

    componentDidMount() {
        this.updateItemInfo();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.itemSelected !== this.props.itemSelected) {
            this.updateItemInfo();
        }
    }

    onLoaded = (id, imageUrl) => {
        this.props.getData(id)
            .then(item => {
                this.setState({
                    itemDetails: item,
                    imageUrl: imageUrl(id),
                })
            })
    }

    updateItemInfo = () => {
        const { itemId, imageUrl } = this.props
        if(!itemId) {
            return;
        }
        this.onLoaded(itemId, imageUrl);
    }

    render() {
        const { itemDetails, imageUrl } = this.state

        if (!itemDetails) {
            return <Spinner/>
        }

        return (
            <div className="person-details card">
                <ViewItem itemDetails={itemDetails} imageUrl={imageUrl} children={this.props.children}/>
            </div>
        )
    }
}

const ViewItem = ({itemDetails, imageUrl, children}) => {
    debugger;
    const { name } = itemDetails;
    return (
        <React.Fragment>
            <img className="person-image"
                 src={imageUrl} alt={name}/>
            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {React.Children.map(children, child => {
                        return React.cloneElement(child, {itemDetails})
                    })}
                </ul>
                <ErrorButton/>
            </div>
        </React.Fragment>
    )
}