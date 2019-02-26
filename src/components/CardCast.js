import React from "react";
import styled from 'styled-components';

import { HelperProvider } from './../services';
const helper = new HelperProvider();
const CardCast = (props) => {
    const { profile_path, character, name } = props.data;
    return (
        <Team>
            <figure className="team-image">
                <img src={ helper.backdropImage(profile_path) } alt={ character } />
            </figure>
            <h2 className="team-name">{ character }</h2>
            <small className="team-title">{ name }</small>
        </Team>
    );
};

const Team = styled.div`
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 10px;
    text-align: center;
    height: 312px;
    margin-bottom: 10px;
    figure {
        width: 160px;
        height: 200px;
        border-radius: 50%;
        overflow: hidden;
        margin: 0 auto 30px;
    }
    h2 {
        font-size: 1.06666667em;
        margin: 0;
    }
    small {
        font-size: 0.8em;
    }
`;

export default CardCast;
