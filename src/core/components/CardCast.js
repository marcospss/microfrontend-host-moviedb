import React from "react";
import { Link } from "react-router-dom";

const CardCast = () => {
    return (
        <div className="team">
            <figure className="team-image">
                <img src="" alt="item.name" />
            </figure>
            <h2 className="team-name">item.character</h2>
            <small className="team-title">item.name</small>
        </div>
    );
};

export default CardCast;
