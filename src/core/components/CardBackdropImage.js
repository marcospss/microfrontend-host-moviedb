import React from "react";
import { Link } from "react-router-dom";

import { HelperProvider } from './../services/index';
import FavoriteMedia from './FavoriteMedia';

const helper = new HelperProvider();

const CardBackdropImage = (props) => {
    const { styleName, mediaType, showOverview } = props;
    const { id, backdrop_path, overview } = props.data;
    const linkMedia = `/details/${mediaType}/${id}`;

    return (
        <div className={ styleName }>
            <figure>
                <Link to={ linkMedia }>
                    <img src={ helper.backdropImage(backdrop_path) } alt={ helper.title(props.data) } />
                </Link>
                <figcaption>
                    <Link to={ linkMedia }>{ helper.title(props.data) }</Link>
                    <FavoriteMedia />
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
