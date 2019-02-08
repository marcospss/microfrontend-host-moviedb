import React from "react";
import { Link } from "react-router-dom";

const CardPosterImage = () => {
    return (
        <>
            <p>mps-favorite-media</p>
            <figure>
                <Link to='/details'><img src="" alt="" /></Link>
            </figure>
            <div className="overview">
                <h3><Link to='/details'>utilsProvider.title(item) | slice:0:20</Link></h3>
                <p><Link to='/details'>item.overview | slice:0:140</Link></p>
            </div>
        </>
    );
};

export default CardPosterImage;
