import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

import * as detailsActions from "./../state/actions/detailsActions";
import * as creditsActions from "./../state/actions/creditsActions";
import * as recommendationsActions from "./../state/actions/recommendationsActions";
import * as favoritesActions from "./../state/actions/favoritesActions";

import { HelperProvider as helper} from './../services';
import { LoadingAnimation, FavoriteMedia, CardCast, CardPosterImage } from './../components';

class Details extends Component {

    fetchData = (paramsUrl) => {
        const { actions  } = this.props;
        actions.loadDetails(paramsUrl);
        actions.loadCredits(paramsUrl);
        actions.loadRecommendations(paramsUrl);
        actions.loadFavorites();
    }
    
    componentDidMount() {
        const { match: { params } } = this.props;
        this.fetchData(params);
    }

    componentDidUpdate(prevProps) {
        const { match: { params } } = this.props;
        if (this.props.match.params.mediaId !== prevProps.match.params.mediaId) {
            helper.scrollTopPage();
            this.fetchData(params);
        }
    }

    render() {
        const { isLoading, details, credits: { cast:castMedia }, recommendations: { results:recommendationsMedia }, match: { params } } = this.props;
        return (
            <>
        {!isLoading ? (
            <div className="page">
            <div className="breadcrumbs">
                <Link to='/'>Home</Link>
                <Link to='/discover'>Discover</Link>
                <span>{ details.title }</span>
            </div>
            <article className="content">
                <div className="row">
                    <div className="col-md-6">
                        <figure className="movie-poster">
                            <img src={ helper.backdropImage(details.backdrop_path, 'w780') } alt={ helper.title(details) } />
                        </figure>
                    </div>
                    <div className="col-md-6">
                        <FavoriteMedia media={ details } mediaType={ params.mediaType } />
                        <h2 className="movie-title">{ helper.title(details) }</h2>
                        <div className="movie-summary">
                            <p>{ details.overview }</p>
                        </div>
                        <ul className="movie-meta">
                            <li><strong>Rating:</strong>
                                <div className="star-rating" title={ 'Rated ' + voteAverage(details) + ' out of 100'}><span style={ this.styleVoteAverage }><strong className="rating"> { voteAverage(details) } </strong> out of 100</span></div>
                            </li>
                            <li><strong>Length:</strong> { runtime(details) }</li>
                            <li><strong>Premiere:</strong> { details.release_date }</li>
                            <li><strong>Category:</strong> { genres(details) }</li>
                        </ul>
                    </div>
                </div>
                {castMedia && !!castMedia.length ? (
                    <div className="row">
                        <header className="col-sm-12">
                            <h1 className="section-title">Cast</h1>
                        </header>
                        { 
                            castMedia.slice(0,8).map(item => {
                                return (
                                <div key={item.id} className="col-sm-6 col-md-3">
                                    <CardCast data={item} />
                                </div>
                                )
                            })
                        }
                    </div>
                )
                : '' }
                {recommendationsMedia && !!recommendationsMedia.length ? (
                    <div className="row">
                        <header className="col-sm-12">
                            <h1 className="section-title">Recommendations</h1>
                        </header>
                        <div className="col-sm-12">
                            <ul className="recommendations list-unstyled">
                            { 
                                recommendationsMedia.slice(0,8).map(item => {
                                    const { id } = item;
                                    return (
                                    <li key={id} className="col-sm-12 col-md-4">
                                        <CardPosterImage 
                                            data={item}
                                            mediaType={ params.mediaType }
                                        />
                                    </li>
                                    )
                                })
                            }
                            </ul>
                        </div>
                    </div>
                )
                : '' }
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

function genres(details) {
    return details && details.genres && details.genres.map((genre) => genre.name).join(' | ');
};

function voteAverage(details) {
    return details && (details.vote_average * 10);
};

function runtime(details) {
    const time = details && (details.runtime);
    return helper.convertMinutesToTime(time);
};

function mapStateToProps(state) {
    return {
        details: state.details,
        credits: state.credits,
        recommendations: state.recommendations,
        isLoading: state.apiCallsInProgress > 0
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadDetails: bindActionCreators(detailsActions.loadDetails, dispatch),
            loadCredits: bindActionCreators(creditsActions.loadCredits, dispatch),
            loadRecommendations: bindActionCreators(recommendationsActions.loadRecommendations, dispatch),
            loadFavorites: bindActionCreators(favoritesActions.loadFavorites, dispatch)
        }
    }
}

Details.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    details: PropTypes.object.isRequired,
    credits: PropTypes.object.isRequired,
    recommendations: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(Details));
  