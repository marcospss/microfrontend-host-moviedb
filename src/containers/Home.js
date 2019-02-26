import React, { Component } from "react";

import { DiscoverProvider, CommonProvider, HelperProvider } from './../services';
import { LoadingAnimation, CardBackdropImage, CardPosterImage, CarouselPopular } from './../components';
class Home extends Component {
    state = {
        popular: [],
        topRated: [],
        isLoading: true,
        errors: null
    }

    constructor() {
        super();
        this.discover = new DiscoverProvider();
        this.common = new CommonProvider();
        this.helper = new HelperProvider();
    }
    
    componentDidMount() {
        this.filterDiscoverProperties = {
            mediaType: 'movie',
            sortBy: 'popularity.desc',
            year: '',
            genre: ''
        };
        const filterTopRatedProperties = {
            mediaType: 'movie'
        };
        this.helper.multipleRequests([this.discover.getDiscover(this.filterDiscoverProperties), this.common.getTopRated(filterTopRatedProperties)])
            .then(response => {
                this.setState({
                    popular: response[0].data.results,
                    topRated: response[1].data.results,
                    isLoading: false
                  });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }
      
  render() {
    const { popular, topRated, isLoading } = this.state;
    return (
        <>
        {!isLoading ? (
            <div className="page">
                <article className="row">
                    <header className="col-sm-12">
                        <h1 className="section-title">Popular Movies</h1>
                    </header>
                    <div className="col-md-9">
                        <CarouselPopular 
                            data={popular.splice(0,4)}
                            mediaType="movie" 
                        />
                    </div>
                    <div className="col-md-3">
                        <div className="row">
                            { 
                                popular.splice(4,3).map(item => {
                                    const { id } = item;
                                    return (
                                        <div key={id} className="col-sm-6 col-md-12">
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
                        popular.splice(4,4).map(item => {
                            const { id } = item;
                            return (
                                <div key={id} className="col-sm-6 col-md-3">
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
                                topRated.splice(0,9).map(item => {
                                    const { id } = item;
                                    return (
                                        <li key={id} className="col-sm-12 col-md-4">
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

export default Home;
