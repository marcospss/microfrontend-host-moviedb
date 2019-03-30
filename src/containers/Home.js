import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

import * as popularActions from "./../state/actions/popularActions";
import * as topRatedActions from "./../state/actions/topRatedActions";
// import * as favoritesActions from "./../state/actions/favoritesActions";
import {
  LoadingAnimation,
  CardBackdropImage,
  CardPosterImage,
  CarouselPopular
} from "./../components";

class Home extends Component {  
    componentDidMount() {
        const { actions, filterProperties } = this.props;
        actions.loadPopular(filterProperties.discover);
        actions.loadTopRated(filterProperties.topRated);
        // actions.loadFavorites();
    }

    render() {
        const { isLoading, popular: { results:popularResults }, topRated: { results:topRatedResults } } = this.props;
        return(
            <>
        {!isLoading ? (
            <div className="page">
                    <article className="row">
                        <header className="col-sm-12">
                            <h1 className="section-title">Popular Movies</h1>
                        </header>
                        <div className="col-md-9">
                            <CarouselPopular 
                                data={popularResults}
                                mediaType="movie" 
                            />
                        </div>
                    <div className="col-md-3">
                        <div className="row">
                            { 
                                popularResults && popularResults.splice(3,3).map(item => {
                                    return (
                                        <div key={item.id} className="col-sm-6 col-md-12">
                                            <CardBackdropImage
                                                data={item}
                                                styleName="latest-movie"
                                                mediaType="movie"
                                                showOverview={false}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </article>
                <article className="row">
                    { 
                        popularResults && popularResults.splice(4,4).map(item => {
                            return (
                                <div key={item.id} className="col-sm-6 col-md-3">
                                    <CardBackdropImage
                                        data={item}
                                        styleName="latest-movie"
                                        mediaType="movie"
                                        showOverview={true}
                                    />
                                </div>
                            )
                        })
                    }
                </article>
                <article className="row">
                    <header className="col-sm-12">
                        <h1 className="section-title">Top Rated Movies</h1>
                    </header>
                    <div className="col-sm-12">
                        <ul className="list-unstyled">
                            { 
                                topRatedResults && topRatedResults.splice(0,9).map(item => {
                                    return (
                                        <li key={item.id} className="col-sm-12 col-md-4">
                                            <CardPosterImage 
                                                data={item}
                                                mediaType="movie"
                                            />
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </article>
            </div>
            ) : (
                <LoadingAnimation />
              )
            }
            </>
        );
    }
    
}

function mapStateToProps(state) {
    return {
        // popular: Object.keys(state.popular).length === 0 ? []
        // : state.popular.results.map(media => {
        //     return {
        //       ...media,
        //       isFavorite: !!state.favorites.find(favorite => favorite.id === media.id)
        //     };
        // }),
        popular: state.popular,
        topRated: state.topRated,
        // favorites: state.favorites,
        isLoading: state.apiCallsInProgress > 0
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadPopular: bindActionCreators(popularActions.loadPopular, dispatch),
            loadTopRated: bindActionCreators(topRatedActions.loadTopRated, dispatch)
            // loadFavorites: bindActionCreators(favoritesActions.loadFavorites, dispatch),
        }
    }
}

Home.defaultProps = {
    filterProperties: {
        discover: {
            mediaType: 'movie',
            sortBy: 'popularity.desc',
            year: '',
            genre: ''
        },
        topRated: {
            mediaType: 'movie'
        }
    }
}

Home.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    popular: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    filterProperties: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
