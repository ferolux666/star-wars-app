import React, {Component} from "react";
import Spinner from "../Spinner/Spinner";
import ErrorIndicator from "../Error-indicator/Error-indicator";

const WithData = (View) => {

    return class extends Component {
        state = {
            data: null,
            loading: true,
            hasError: false
        }

        onItemSelected = this.props.onItemSelected;

        componentDidMount = () => {
            this.props.getData()
                .then(data => {
                    this.setState({
                        data,
                        loading: false
                    })
                })
                .catch(() => {
                    this.setState({
                        hasError: true,
                        loading: false
                    })
                })
        }

        render() {
            const { data, loading, hasError } = this.state;
            if(loading) {
                return (
                    <Spinner/>
                )
            } else if(hasError) {
                return <ErrorIndicator/>
            }
            return (
                <View data={data} onItemSelected={this.onItemSelected}/>
            )
        }
    }
}

export default WithData;