import React from "react";
import { Link } from "react-router-dom";

import { HelperProvider } from './../services';
import FavoriteMedia from './FavoriteMedia';


const CardBackdropImage = (props) => {
    const { styleName, mediaType, showOverview, clearSearch, data: { id, backdrop_path, overview }  } = props;
    const linkMedia = `/details/${mediaType}/${id}`;

    const handleclearSearch = () => {
        if (typeof props.clearSearch === 'function') {
            clearSearch();
        }
    }

    return (
        <div className={ styleName } onClick={ () => { handleclearSearch() } }>
            <figure>
                <Link to={ linkMedia }>
                    <img src={ HelperProvider.backdropImage(backdrop_path) } alt={ HelperProvider.title(props.data) } />
                </Link>
                <figcaption>
                    <Link to={ linkMedia }>{ HelperProvider.title(props.data) }</Link>
                    <FavoriteMedia media={ props.data } mediaType={ mediaType } />
                </figcaption>
            </figure>
            { showOverview ? 
                <p data-show="showOverview">
                    <Link to={ linkMedia }>{ overview.substring(0, 140) }</Link>
                </p>
            : ''
            }
        </div>
    );
};

export default CardBackdropImage;
