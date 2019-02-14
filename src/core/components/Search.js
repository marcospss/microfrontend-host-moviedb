import React from "react";

const Search = () => {
    return (
        <form class="search-form" role="search">
            <input type="text" name="query" id="query" placeholder="Search..." />
            <button><i class="fa fa-search"></i></button>
        </form>
    );
};

export default Search;
