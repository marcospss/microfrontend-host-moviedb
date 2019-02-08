import React from "react";
import { Link } from "react-router-dom";

const CardBackdropImage = () => {
    return (
        <div className="{{ className }}">
            <figure>
                <Link to='/details'><img src="" alt="" /></Link>
                <figcaption>
                <Link to='/details'>utilsProvider.title</Link>
                    <p>mps-favorite-media</p>
                </figcaption>
            </figure>
            <p data-show="showOverview">
                <Link to='/details'>item.overview | slice:0:140</Link>
            </p>
        </div>
    );
};

export default CardBackdropImage;
