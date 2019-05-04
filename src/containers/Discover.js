import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

import { CommonProvider } from './../services';
import * as popularActions from "./../state/actions/popularActions";
import { LoadingAnimation, Filters, CardBackdropImage } from './../components';

class Discover extends Component {

  state = {
    genres: []
  };

  getDiscover = (filterProperties, prevProps) => {
    const { actions } = this.props;
    console.log('getDiscover', filterProperties, 'prevProps', prevProps);
    actions.loadPopular(filterProperties);
  };

  componentDidMount() {
    const { actions, filterProperties } = this.props;
    getYears();
    /**
     * GENRES
     */
     CommonProvider.getGenres(filterProperties.discover.mediaType)
    .then(response => {
      this.setState({
        genres: response.data.genres
      });
    })
    .catch(error => console.error('getGenres'));
    actions.loadPopular(filterProperties.discover);
}

  render() {
    const { isLoading, popular: { results:popularResults } } = this.props;
    const { genres } = this.state;
    return (
      <>
        {!isLoading ? (
      <div className="page">
        <div className="breadcrumbs">
          <Link to='/'>Home</Link>
          <span>Movie Review</span>
        </div>
        <div className="row">
          <div className="col-sm-12">
          <Filters Years={ getYears() } Genres={ genres } changePropertiesFilter={ this.getDiscover } />
          </div>
        </div>
        <article className="row">
          { 
              popularResults && popularResults.map(item => {
                  const { id } = item;
                  return (
                      <div key={id} className="col-sm-6 col-md-3">
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

function getYears() {
  const date =  new Date(),
  currentYear = date.getFullYear();
  let listYears = [];

  for (let year = currentYear + 1; year >= 1900; year -= 1) {
      listYears.push(year);
  };

  return listYears;
}

function mapStateToProps(state) {
  return {
      popular: state.popular,
      isLoading: state.apiCallsInProgress > 0
  }
}

function mapDispatchToProps(dispatch) {
  return {
      actions: {
          loadPopular: bindActionCreators(popularActions.loadPopular, dispatch)
      }
  }
}

Discover.defaultProps = {
  filterProperties: {
      discover: {
          mediaType: 'movie',
          sortBy: 'popularity.desc',
          year: '',
          genre: ''
      }
  }
}

Discover.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  popular: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  filterProperties: PropTypes.object.isRequired
};

export default connect(
mapStateToProps,
mapDispatchToProps
)(Discover);
