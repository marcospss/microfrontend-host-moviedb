import React, { Component } from "react";
import styled from 'styled-components';

import { HelperProvider as helper, LocalStorage } from './../services';

class FavoriteMedia extends Component {

    // _isMounted = false;

    state = {
        collection: [],
        isLoading: false
    }

    saveFavorite = (data) => {
        LocalStorage.save(data);
    };
    
    removeFavorite = (data) => {
        LocalStorage.remove(data);
    };

    // componentDidMount() {
    //     this._isMounted = true;
    // }

    // componentWillUnmount() {
    //     this._isMounted = false;
    //   }

    render() {
        const { media, mediaType } = this.props;
        const data = Object.assign(media, { mediaType: mediaType});
        return (
            <>
                { 
                    data.isFavorite ? (
                    <Button onClick={()=> this.removeFavorite(data)} title={ 'Remover: ' + helper.title(data) }>
                        <span className="fa fa-heart"></span>
                    </Button>
                    ) : (
                        <Button onClick={()=> this.saveFavorite(data)} title={ 'Adicionar: ' +  helper.title(data) }>
                        <span className="fa fa-heart-o"></span>
                    </Button>
                    )
                }
            </>
        );
        
    }
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
