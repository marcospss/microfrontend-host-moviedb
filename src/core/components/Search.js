import React, { Component } from "react";
import { HelperProvider, SearchProvider } from './../services/index';
class Search extends Component {
    state = {
        collection: [],
        showInputSearch: false
    }

    constructor() {
        super();
        this.helper = new HelperProvider();
        this.search = new SearchProvider();
    }

    searchMedia(query) {
        this.search.getMultiSearch(query)
            .then(result => {
                this.setState({
                    collection: result.data.results
                });
                console.log('getMultiSearch -> ', result.data);
            })
            .catch(error => this.setState({ error, isLoading: false }));
    };
    
    showInputSearch(e) {
        e.preventDefault();
        this.setState({
            showInputSearch: !this.state.showInputSearch
        });
    };
    render() {
        const { showInputSearch } = this.state;
        return (
            <form className="search-form" role="search">
                <input onChange={ (e) => this.searchMedia(e.currentTarget.value) } type="text" name="query" id="query" placeholder="Search..." maxLength="30" className={ showInputSearch ? 'active' : '' } />
                <button onClick={ (e) => this.showInputSearch(e) }><i className="fa fa-search"></i></button>
            </form>
        );
    }
};

export default Search;
