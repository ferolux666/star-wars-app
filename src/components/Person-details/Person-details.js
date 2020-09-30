import React, { Component } from 'react';
import './Person-details.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../Spinner/Spinner";
import ErrorButton from "../Error-button/Error-button";

export default class PersonDetails extends Component {

    swapi = new SwapiService();

    state = {
        itemDetails: null,
    }

    componentDidMount() {
        this.updateItemInfo();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.itemSelected !== this.props.itemSelected) {
            this.updateItemInfo();
        }
    }

    onLoaded = (id) => {
        this.swapi.getPerson(id)
            .then(item => {
                this.setState({
                    itemDetails: item,
                })
            })
    }

    updateItemInfo = () => {
        const id = this.props.itemSelected;
        if(!id) {
            return;
        }
        this.onLoaded(id);
    }

    render() {
        const { itemDetails } = this.state

        if (!itemDetails) {
            return <Spinner/>
        }

        return (
            <div className="person-details card">
                <ViewItem itemDetails={itemDetails}/>
            </div>
        )
    }
}

const ViewItem = ({itemDetails}) => {
    const { id, name, gender, birthYear, eyeColor } = itemDetails;
    return (
        <React.Fragment>
            <img className="person-image"
                 src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt={name}/>
            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Birth Year</span>
                        <span>{birthYear}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Eye Color</span>
                        <span>{eyeColor}</span>
                    </li>
                </ul>
                <ErrorButton/>
            </div>
        </React.Fragment>
    )
}