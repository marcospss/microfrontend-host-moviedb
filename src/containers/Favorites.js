import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HelperProvider, LocalStorage } from './../services';
import { LoadingAnimation } from './../components';
class Favorites extends Component {

  state = {
    collection: [],
    isLoading: true
}

componentDidMount() {
  LocalStorage.getAll().then(data => {
      if(!!data.length) {
          this.setState({
              collection: data
          });
      }
      this.setState({
          isLoading: false
      });
  });
}
  render() {
    const { isLoading, collection } = this.state;
    return (
      <>
        { !isLoading ? (
            <div className="page">
              <div className="breadcrumbs">
                <Link to='/'>Home</Link>
                <span>Favorites</span>
              </div>
              <div className="row">
                {
                  collection.map(item => {
                    const { id, mediaType, poster_path, overview } = item;
                    let linkMedia = `/details/${mediaType}/${id}`;
                    return (
                      <article key={id} className="col-md-3">
                        <div  className="team">
                          <figure className="team-image">
                          <Link to={ linkMedia }>
                              <img src={ HelperProvider.posterImage(poster_path, 'w185') } alt={ HelperProvider.title(item) } />
                          </Link>
                          </figure>
                          <h2 className="team-name">
                            <Link to={ linkMedia }>{ HelperProvider.title(item) }</Link>
                          </h2>
                          <small className="team-title">{ overview.substring(0, 160) }...</small>
                        </div>
                      </article>
                    )
                  })
                }
              </div>
            </div>
            ) : (
              <LoadingAnimation />
            )
        }
    </>
    );
  }
}

export default Favorites;
