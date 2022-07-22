import React from "react";

const Card = ({name, element, description}) => {
    return (
        <div className="card">
            <div className="card-header">
                <h3>{name}</h3>
            </div>
            <div className="card-body">
                <div className="card-element"><span>Element</span>: {element}</div>
                <div className="card-description"><span>Description</span>: {description}</div>
            </div>
        </div>
    );
}


export default Card;