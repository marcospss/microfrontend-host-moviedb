import React, { Component } from "react";
import styled from 'styled-components';

import { HelperProvider, LocalStorage } from './../services';

class FavoriteMedia extends Component {

    _isMounted = false;

    state = {
        collection: [],
        isLoading: false,
        isFavorite: false
    }

    constructor(props) {
        super(props);
        this.helper = new HelperProvider();
        this.store = new LocalStorage();
    }

    saveFavorite = (data) => {
        this.store.save(data);
    };
    
    removeFavorite = (data) => {
        this.store.remove(data);
    };

    checkFavorite(collection) {
        const { id } = this.props.media;
        this.setState({
            isFavorite: id && collection.indexOf(id) > -1
        });
      }

    componentDidMount() {
        this._isMounted = true;
        this.store.getAll().then(data => {
            if (this._isMounted) {
                if(!!data.length) {
                    this.setState({
                        collection: data.map((media)=> {
                            return media.id
                        }),
                        isLoading: true
                    });
                }
                this.setState({
                    isLoading: true
                });
            }
        });
        this.checkFavorite(this.state.collection);
    }

    componentWillUnmount() {
        this._isMounted = false;
      }

    render() {
        const { media, mediaType } = this.props;
        const data = Object.assign(media, { mediaType: mediaType});
        const { isLoading, isFavorite } = this.state;
        return (
            <>
                { !isLoading ? (
                    'CARREGANDO...'
                    ) : (
                    isFavorite ? (
                        <Button onClick={()=> this.removeFavorite(data)} title={ 'Remover: ' + this.helper.title(media) }>
                            <span className="fa fa-heart"></span>
                        </Button>
                        ) : (
                            <Button onClick={()=> this.saveFavorite(data)} title={ 'Adicionar: ' +  this.helper.title(media) }>
                            <span className="fa fa-heart-o"></span>
                        </Button>
                        )
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
