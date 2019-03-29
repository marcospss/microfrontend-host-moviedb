import React from "react";
import { Link } from "react-router-dom";

import { HelperProvider as helper } from './../services';
import FavoriteMedia from './FavoriteMedia';





const CardBackdropImage = (props) => {
    const { styleName, mediaType, showOverview, clearSearch } = props;
    const { id, backdrop_path, overview } = props.data;
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
                    <img src={ helper.backdropImage(backdrop_path) } alt={ helper.title(props.data) } />
                </Link>
                <figcaption>
                    <Link to={ linkMedia }>{ helper.title(props.data) }</Link>
                    {/* <FavoriteMedia media={ props.data } mediaType={ mediaType } /> */}
                </figcaption>
            </figure>
            { showOverview ? 
                <p data-show="showOverview">
                    <Link to={ linkMedia }
                        >{ overview.substring(0, 140) }
                    </Link>
                </p>
            : ''
            }
        </div>
    );
};

export default CardBackdropImage;
