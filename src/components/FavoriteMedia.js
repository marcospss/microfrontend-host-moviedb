import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import styled from 'styled-components';

import * as favoritesActions from "./../state/actions/favoritesActions";

import { HelperProvider as helper, LocalStorage } from './../services';
import { toast } from "react-toastify";
class FavoriteMedia extends Component {

    // _isMounted = false;

    // state = {
    //     collection: [],
    //     isLoading: false
    // }

    handleSaveFavorite = async media => {
        try {
            await this.props.actions.saveFavorite(media);
            toast.success("Favorite save success");
        } catch(error) {
            toast.error("Save failed. " + error.message);
        }
    };
    
    handleRemoveFavorite = async media => {
        try {
            await this.props.actions.removeFavorite(media);
            toast.success("Favorite removed success");
        } catch(error) {
            toast.error("Delete failed. " + error.message);
        }
    };

    // componentDidMount() {
    //     // const { actions } = this.props;
    //     // this._isMounted = true;
    //     // actions.loadFavorites();
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
                    !data.isFavorite ? (
                    <Button onClick={()=> this.handleRemoveFavorite(data)} title={ 'Remover: ' + helper.title(data) }>
                        <span className="fa fa-heart"></span>
                    </Button>
                    ) : (
                    <Button onClick={()=> this.handleSaveFavorite(data)} title={ 'Adicionar: ' +  helper.title(data) }>
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
        favorites: state.favorites.length === 0 ? []
        : state.favorites.map(media => {
            return {
              ...media,
              isFavorite: !!media.id === media.id
            };
        })
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            saveFavorite: bindActionCreators(favoritesActions.saveFavorite, dispatch),
            removeFavorite: bindActionCreators(favoritesActions.removeFavorite, dispatch)
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
    background: none;
`;

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(FavoriteMedia);
