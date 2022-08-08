import React from "react";

const Card = ({name, element, description}) => {
    const num = Math.floor(Math.random() * 100);
    const image_link = "https://placeimg.com/250/250/animals/" + num;
    return (
        <div className="card">
            <div className="card-image">
                <img src={image_link} alt="card" />
            </div>
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