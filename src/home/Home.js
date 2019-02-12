import React, { Component } from "react";
import { DiscoverProvider, CommonProvider } from './../core/services/index';
class Home extends Component {
    
   

    constructor() {
        super();
        this.discover = new DiscoverProvider();
        this.common = new CommonProvider();
    }

    

    componentDidMount() {
        this.filterDiscoverProperties = {
            mediaType: 'movie',
            sortBy: 'popularity.desc',
            year: '',
            genre: ''
        };
        this.discover.getDiscover(this.filterDiscoverProperties).then(response => {
            console.log('DISCOVER -> ', response.data);
        });
    }
      
  render() {
    return (
      <div className="page">
            <article className="row">
                <header className="col-sm-12">
                    <h1 className="section-title">Popular Movies</h1>
                </header>
                <div className="col-md-9">
                    <div className="slider">
                        <h1>Carrossel</h1>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="row">
                        <div className="col-sm-6 col-md-12">
                        </div>
                    </div>
                </div>
            </article>
            <article className="row">
                <div className="col-sm-6 col-md-3">
                </div>
            </article>
            <article className="row">
                <header className="col-sm-12">
                    <h1 className="section-title">Top Rated Movies</h1>
                </header>
                <div className="col-sm-12">
                    <ul className="list-unstyled">
                        <li className="col-sm-12 col-md-4">
                        </li>
                    </ul>
                </div>
            </article>
      </div>
    );
  }
}

export default Home;