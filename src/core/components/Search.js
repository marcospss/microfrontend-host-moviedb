import React, { Component } from "react";
import styled from 'styled-components';

import { HelperProvider, SearchProvider } from './../services/index';
import CardBackdropImage from './CardBackdropImage';
class Search extends Component {
    state = {
        collection: [],
        showInputSearch: false,
        isLoading: true
    }

    constructor() {
        super();
        this.helper = new HelperProvider();
        this.search = new SearchProvider();
        this.inputSearch = React.createRef();
    }

    searchMedia(query) {
        this.search.getMultiSearch(query)
            .then(result => {
                this.setState({
                    collection: result.data.results,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    };
    
    showInputSearch(e) {
        e.preventDefault();
        this.setState({
            showInputSearch: !this.state.showInputSearch
        });
    };

    clearSearch() {
        this.setState({
            collection: [],
            showInputSearch: false,
            isLoading: true
        });
        this.inputSearch.current.value = '';
    };
    render() {
        const { showInputSearch, isLoading, collection } = this.state;
        return (
            <>
            <form className="search-form" role="search">
                <input onChange={ (e) => this.searchMedia(e.currentTarget.value) } type="text" name="query" id="query" placeholder="Search..." maxLength="30" className={ showInputSearch ? 'active' : '' } ref={ this.inputSearch } />
                <button onClick={ (e) => this.showInputSearch(e) }><i className="fa fa-search"></i></button>
            </form>
            {
                !isLoading ? (
                    <ListDropSearch>
                        { 
                        collection.map(item => {
                            const { id, media_type } = item;
                            return (
                                <div key={id} className="col-sm-6 col-md-3">
                                    <CardBackdropImage
                                        data={item}
                                        styleName="latest-movie"
                                        mediaType={media_type}
                                        showOverview={false}
                                        clearSearch = {this.clearSearch.bind(this)}
                                    />
                                </div>
                            )
                        })
                    }
                    </ListDropSearch>
                ) : (
                    ''
                )
            }
            </>
        );
    }
};

const ListDropSearch = styled.div`
    position: absolute;
    z-index: 9;
    width: 100%;
    left: 0;
    background: #00000094;
`

export default Search;
