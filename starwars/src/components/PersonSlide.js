import React from 'react';
import styled from 'styled-components';

const Slide = styled.div`
    background: linear-gradient(to top, rgba(243, 243, 243, .7), rgba(243, 243, 243, .7));
    color: black;
    width: 200px;
    padding: 5px;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 5px black;
`;

function PersonSlide(props) {
    return(
        <Slide>
            <h1>{props.name}</h1>
            <p>Height: {(props.height / 30.48).toFixed(1)}ft</p>
            <p>Weight: {Math.round(props.mass * 2.205)}lbs</p>
            <p>Hair Color: {props.hair}</p>
            <p>Skin Color: {props.skin}</p>
            <p>Eye Color: {props.eyes}</p>
            <p>Birth Year: {props.birthYear}</p>
        </Slide>
    )
}

export default PersonSlide;