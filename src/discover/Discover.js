import React, { Component } from "react";
import { Link } from "react-router-dom";

import { DiscoverProvider } from './../core/services/index';
import { LoadingAnimation, Filters, CardBackdropImage } from './../core/components/index';
class Discover extends Component {
  state = {
        popular: [],
        errors: null
    }

    constructor() {
      super();
      this.discover = new DiscoverProvider();
  }

    componentDidMount() {
      this.filterDiscoverProperties = {
          mediaType: 'movie',
          sortBy: 'popularity.desc',
          year: '',
          genre: ''
      };
      this.discover.getDiscover(this.filterDiscoverProperties)
          .then(response => {
              this.setState({
                  popular: response.data.results,
                  isLoading: false
                });
          })
          .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { popular, isLoading } = this.state;
    return (
      <>
        {!isLoading ? (
      <div className="page">
        <div className="breadcrumbs">
          <Link activeClassName="current-menu-item" to='/'>Home</Link>
          <span>Movie Review</span>
        </div>
        <Filters />
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
          <div className="">

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

export default Discover;
