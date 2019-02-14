import React from "react";
import styled from 'styled-components';

import { HelperProvider } from './../services/index';

const helper = new HelperProvider();

const saveFavorite = (data) => {
    console.log('saveFavorite -> ', data);
};

const FavoriteMedia = (props) => {
    const { media, mediaType } = props;
    const data = Object.assign(media, { mediaType: mediaType});

    return (
        <>
            <Button onClick={()=> saveFavorite(data)} title={ 'Adicionar: ' +  helper.title(media) }>
                <span className="fa fa-heart-o"></span>
            </Button>
            {/*
            <Button title={ 'Remover: ' + helper.title(media) }>
                <span className="fa fa-heart"></span>
            </Button>
            */}
        </>
    );
};

const Button = styled.button`
    position: absolute;
    z-index: 100;
    display: block;
    height: 30px;
    width: 30px;
    top: 5px;
    right: 5px;
    overflow: hidden;
    border: none;
    cursor: pointer;
    font-size: 1.5em;
    background: none;
`;

export default FavoriteMedia;
