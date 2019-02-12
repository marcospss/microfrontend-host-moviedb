import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

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
            <Figure>
                <Link to={ linkMedia }>
                    <img src={ helper.backdropImage(poster_path) } alt={ helper.title(props.data) } />
                </Link>
            </Figure>
            <Overview>
                <h3><Link to={ linkMedia }>{ helper.title(props.data).substring(0, 20) }</Link></h3>
                <p><Link to={ linkMedia }>{ overview.substring(0, 140) }</Link></p>
            </Overview>
        </>
    );
};

const Figure = styled.figure`
    float: left;
    margin-right: 10px;
    display: block;
`;

const Overview = styled.div`
    color: #777;
    a {
        color: #777;
    }
    p {
        overflow: hidden;
    }
    & h3::after, & p::after {
        content: "...";
    }
`;

export default CardPosterImage;
