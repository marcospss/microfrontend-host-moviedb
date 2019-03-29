import React from "react";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

import { HelperProvider as helper } from './../services';
import FavoriteMedia from './FavoriteMedia';
const CarouselPopular = ({ data, mediaType }) => {
    return (
        <Carousel>
            { 
                data && data.map(item => {
                    const { id, backdrop_path, overview } = item;
                    const linkMedia = `/details/${mediaType}/${id}`;
                    return (
                        <Carousel.Item key={id} >
                            {/* <FavoriteMedia media={ item } mediaType={ mediaType } /> */}
                            <Link to={ linkMedia }>
                                <img src={ helper.backdropImage(backdrop_path, 'w780') } alt={ helper.title(data) } />
                            </Link>
                            <Carousel.Caption>
                            <h3><Link to={ linkMedia }>{ helper.title(item) }</Link></h3>
                            <p><Link to={ linkMedia }>{ overview.substring(0, 140) }</Link></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })
            }
            
        </Carousel>
    );
};

export default CarouselPopular;
