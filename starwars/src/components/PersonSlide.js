import React from 'react';

function PersonSlide(props) {
    return(
        <div>
            <h1>{props.name}</h1>
            <p>Height: {(props.height / 30.48).toFixed(1)}ft</p>
            <p>Weight: {Math.round(props.mass * 2.205)}lbs</p>
            <p>Hair Color: {props.hair}</p>
            <p>Skin Color: {props.skin}</p>
            <p>Eye Color: {props.eyes}</p>
            <p>Birth Year: {props.birthYear}</p>
        </div>
    )
}

export default PersonSlide;