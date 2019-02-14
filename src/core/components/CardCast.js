import React from "react";

import { HelperProvider } from './../services/index';
const helper = new HelperProvider();
const CardCast = (props) => {
    const { profile_path, character, name } = props.data;
    return (
        <div className="team">
            <figure className="team-image">
                <img src={ helper.backdropImage(profile_path) } alt={ character } />
            </figure>
            <h2 className="team-name">{ character }</h2>
            <small className="team-title">{ name }</small>
        </div>
    );
};

export default CardCast;
