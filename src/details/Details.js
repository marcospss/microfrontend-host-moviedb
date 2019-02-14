import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import { CommonProvider, HelperProvider } from './../core/services/index';
import { LoadingAnimation, FavoriteMedia, CardCast, CardPosterImage } from './../core/components/index';
class Details extends Component {
    
    state = {
        details: null,
        credits: null,
        recommendations: null,
        isLoading: true,
        error: null
    }

    constructor(props) {
        super(props);
        this.common = new CommonProvider();
        this.helper = new HelperProvider();
        this.filterDetails = props.match.params;
    }
    componentDidMount() {
        axios.all([
            this.common.getDetails(this.filterDetails), 
            this.common.getCredits(this.filterDetails),
            this.common.getRecommendations(this.filterDetails)
        ])
        .then(axios.spread((details, credits, recommendations) => {
            this.setState({
                details: details.data,
                credits: credits.data.cast,
                recommendations: recommendations.data.results,
                isLoading: false
              });
        }))
        .catch(error => this.setState({ error, isLoading: false }));
}

    genres() {
        return this.state.details && this.state.details.genres.map((genre) => genre.name).join(' | ');
    }

    voteAverage() {
        return this.state.details && (this.state.details.vote_average * 10);
    }

    runtime() {
        const time = this.state.details && (this.state.details.runtime);
        return this.helper.convertMinutesToTime(time);
    }
  render() {
    const { details, credits, recommendations, isLoading } = this.state;
    const { mediaType } = this.filterDetails;
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
                                <img src={ this.helper.backdropImage(details.backdrop_path, 'w780') } alt={ this.helper.title(details) } />
                                <FavoriteMedia media={ details } mediaType={ mediaType } />
                            </figure>
                        </div>
                        <div className="col-md-6">
                            <h2 className="movie-title">{ this.helper.title(details) }</h2>
                            <div className="movie-summary">
                                <p>{ details.overview }</p>
                            </div>
                            <ul className="movie-meta">
                                <li><strong>Rating:</strong>
                                    <div className="star-rating" title={ 'Rated ' + this.voteAverage() + ' out of 100'}><span><strong className="rating"> { this.voteAverage() } </strong> out of 100</span></div>
                                </li>
                                <li><strong>Length:</strong> { this.runtime() }</li>
                                <li><strong>Premiere:</strong> { details.release_date }</li>
                                <li><strong>Category:</strong> { this.genres() }</li>
                            </ul>
                        </div>
                    </div>
                    {!!credits.length ? (
                        <div className="row">
                            <header className="col-sm-12">
                                <h1 className="section-title">Cast</h1>
                            </header>
                            { 
                                credits.splice(0,9).map(item => {
                                    const { id } = item;
                                    return (
                                    <div key={id} className="col-sm-6 col-md-3">
                                        <CardCast data={item} />
                                    </div>
                                    )
                                })
                            }
                        </div>
                    )
                    : '' }
                    {!!recommendations.length ? (
                        <div className="row">
                            <header className="col-sm-12">
                                <h1 className="section-title">Recommendations</h1>
                            </header>
                            <div className="col-sm-12">
                                <ul className="recommendations list-unstyled">
                                { 
                                    recommendations.splice(0,9).map(item => {
                                        const { id } = item;
                                        return (
                                        <li key={id} className="col-sm-12 col-md-4">
                                            <CardPosterImage 
                                                data={item}
                                                mediaType={ mediaType }
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

export default Details;
