import React from "react";
import { Link } from "react-router-dom";

import { HelperProvider } from './../services/index';
import FavoriteMedia from './FavoriteMedia';

const helper = new HelperProvider();

const CardPosterImage = (props) => {
    const { mediaType } = props;
    const { id, poster_path, overview } = props.data;
    const linkMedia = `/details/${mediaType}/${id}`;
    return (
        <>
            <FavoriteMedia />
            <figure>
                <Link to={ linkMedia }>
                    <img src={ helper.backdropImage(poster_path) } alt={ helper.title(props.data) } />
                </Link>
            </figure>
            <div className="overview">
                <h3><Link to={ linkMedia }>{ helper.title(props.data).substring(0, 20) }</Link></h3>
                <p><Link to={ linkMedia }>{ overview.substring(0, 140) }</Link></p>
            </div>
        </>
    );
};

export default CardPosterImage;
