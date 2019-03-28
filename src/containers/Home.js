import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

import * as popularActions from "./../state/actions/popularActions";
import {
  LoadingAnimation,
  CardBackdropImage,
  CardPosterImage,
  CarouselPopular
} from "./../components";

const filterDiscoverProperties = {
    mediaType: 'movie',
    sortBy: 'popularity.desc',
    year: '',
    genre: ''
};

const filterTopRatedProperties = {
    mediaType: 'movie'
};
class Home extends Component {  
    componentDidMount() {
        const { popular, actions } = this.props;
        
        if (popular.length === 0) {
            actions.loadPopular(filterDiscoverProperties)
                .catch(error => {
                    console.error("Loading popular failed " + error);
                });
        }
        
    }

    render() {
        const { popular: { data: popular } } = this.props;
        return(
            <div className="page">
                <h1>Marcos</h1>
                <pre>[{ popular }]</pre>
            </div>
            
        );
    }
    // render() {
    //     const { popular, topRated, isLoading } = this.state;
    //     return (
    //         <>
    //         {!isLoading ? (
    //             <div className="page">
    //                 <article className="row">
    //                     <header className="col-sm-12">
    //                         <h1 className="section-title">Popular Movies</h1>
    //                     </header>
    //                     <div className="col-md-9">
    //                         <CarouselPopular 
    //                             data={popular.splice(0,4)}
    //                             mediaType="movie" 
    //                         />
    //                     </div>
    //                     <div className="col-md-3">
    //                         <div className="row">
    //                             { 
    //                                 popular.splice(4,3).map(item => {
    //                                     const { id } = item;
    //                                     return (
    //                                         <div key={id} className="col-sm-6 col-md-12">
    //                                             <CardBackdropImage
    //                                                 data={item}
    //                                                 styleName="latest-movie"
    //                                                 mediaType="movie"
    //                                                 showOverview={false}
    //                                             />
    //                                         </div>
    //                                     )
    //                                 })
    //                             }
    //                         </div>
    //                     </div>
    //                 </article>
    //                 <article className="row">
    //                     { 
    //                         popular.splice(4,4).map(item => {
    //                             const { id } = item;
    //                             return (
    //                                 <div key={id} className="col-sm-6 col-md-3">
    //                                     <CardBackdropImage
    //                                         data={item}
    //                                         styleName="latest-movie"
    //                                         mediaType="movie"
    //                                         showOverview={true}
    //                                     />
    //                                 </div>
    //                             )
    //                         })
    //                     }
    //                 </article>
    //                 <article className="row">
    //                     <header className="col-sm-12">
    //                         <h1 className="section-title">Top Rated Movies</h1>
    //                     </header>
    //                     <div className="col-sm-12">
    //                         <ul className="list-unstyled">
    //                             { 
    //                                 topRated.splice(0,9).map(item => {
    //                                     const { id } = item;
    //                                     return (
    //                                         <li key={id} className="col-sm-12 col-md-4">
    //                                             <CardPosterImage 
    //                                                 data={item}
    //                                                 mediaType="movie"
    //                                             />
    //                                         </li>
    //                                     )
    //                                 })
    //                             }
    //                         </ul>
    //                     </div>
    //                 </article>
    //             </div>
    //           ) : (
    //             <LoadingAnimation />
    //           )
    //         }
    //         </>
    //     );
    //   }
}

function mapStateToProps(state) {
    return {
        popular: state.popular
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadPopular: bindActionCreators(popularActions.loadPopular, dispatch)
        }
    }
}

Home.propTypes = {
  popular: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
