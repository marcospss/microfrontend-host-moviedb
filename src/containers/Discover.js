import React, { Component } from "react";
import { Link } from "react-router-dom";

import { DiscoverProvider, CommonProvider } from './../services';
import { LoadingAnimation, Filters, CardBackdropImage } from './../components';
class Discover extends Component {
  state = {
        popular: [],
        genres: [],
        errors: null
    }

    constructor() {
      super();
      this.discover = new DiscoverProvider();
      this.common = new CommonProvider();
  }

    listYears = [];
    date =  new Date();
    currentYear = this.date.getFullYear();

    getYears = () => {
        for (let year = this.currentYear + 1; year >= 1900; year -= 1) {
            this.listYears.push(year);
        };
    }

    getDiscover = (properties) => {

      this.setState({
        isLoading: true
      });

      this.discover.getDiscover(properties)
          .then(response => {
              this.setState({
                  popular: response.data.results,
                  isLoading: false
                });
          })
          .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount() {
      this.getYears();
      this.filterDiscoverProperties = {
          mediaType: 'movie',
          sortBy: 'popularity.desc',
          year: '',
          genre: ''
      };

      this.common.getGenres(this.filterDiscoverProperties.mediaType)
      .then(response => {
          this.setState({
              genres: response.data.genres
            });
      })
      .catch(error => this.setState({ error, isLoading: false }));

      this.getDiscover(this.filterDiscoverProperties);
  }

  render() {
    const { popular, genres, isLoading } = this.state;
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
            <Filters Years={ this.listYears } Genres={ genres } changePropertiesFilter={ this.getDiscover } />
          </div>
        </div>
        <article className="row">
          { 
              popular.map(item => {
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

export default Discover;
