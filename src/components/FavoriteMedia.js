import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from 'styled-components';


import * as favoritesActions from "./../state/actions/favoritesActions";
import { HelperProvider } from './../services';

class FavoriteMedia extends Component {

    _isMounted = false;

    state = {
        isFavorite: false,
        mediaId: null
    }

    saveFavorite = (data) => {
        this.props.actions.saveFavorite(data);
        HelperProvider.toastContainer('success', `${data.title} saved successfully!`);
        this.props.actions.loadFavorites();
    };
    
    removeFavorite = (data) => {
        this.props.actions.removeFavorite(data);
        HelperProvider.toastContainer('info', `${data.title} removed successfully!`);
        this.props.actions.loadFavorites();
    };

    checkFavorite() {
        const { media: { id }, favorites } = this.props;
        favorites.forEach(item => {
            const isFavoriteMedia = item.id === id;
            if (isFavoriteMedia) {
                this.setState({
                    isFavorite: isFavoriteMedia
                })
            }
        });
    }

    componentDidMount() {
        this._isMounted = true;
        const { media: { id } } = this.props;
        this.setState({
            mediaId: id
        })
        this.checkFavorite();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    componentWillReceiveProps(nextProps){
        // 
        this.checkFavorite();
    }

    render() {
        const { media, mediaType } = this.props;
        const data = Object.assign(media, { mediaType: mediaType});
        const { isFavorite } = this.state;
        return (
            <>
                { isFavorite ? (
                    <Button onClick={()=> this.removeFavorite(data)} title={ 'Remover: ' + HelperProvider.title(media) }>
                        <span className="fa fa-heart"></span>
                    </Button>
                    ) : (
                    <Button onClick={()=> this.saveFavorite(data)} title={ 'Adicionar: ' +  HelperProvider.title(media) }>
                        <span className="fa fa-heart-o"></span>
                    </Button>
                    )
                }
            </>
        );
        
    }
};

function mapStateToProps(state) {
    return {
        // popular: Object.keys(state.popular).length === 0 ? []
        // : state.popular.results.map(media => {
        //     return {
        //       ...media,
        //       isFavorite: !!state.favorites.find(favorite => favorite.id === media.id)
        //     };
        // }),
        favorites: state.favorites
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            saveFavorite: bindActionCreators(favoritesActions.saveFavorite, dispatch),
            removeFavorite: bindActionCreators(favoritesActions.removeFavorite, dispatch),
            loadFavorites: bindActionCreators(favoritesActions.loadFavorites, dispatch)
        }
    }
}

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
    background: #4950576e;
    
`;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FavoriteMedia);
  
