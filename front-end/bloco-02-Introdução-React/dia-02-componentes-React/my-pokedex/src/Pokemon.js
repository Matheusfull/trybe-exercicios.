import React from "react";
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render() {
        const { name, type, image, averageWeight } = this.props.dataItem
        return (
            <div className="card">
                <div className="info">
                    <h1>{name}</h1>
                    <h1>{type}</h1>
                    <h1>{`averageWeight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</h1>
                </div>
                <div className="img">
                    <img src={image} alt="" />
                </div>
            </div>
        )
    }
}

 Pokemon.protoType = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        averageWeight: PropTypes.shape({
            measurementUnit: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired
        }),
        image: PropTypes.string.isRequired
    })
} 

export default Pokemon

