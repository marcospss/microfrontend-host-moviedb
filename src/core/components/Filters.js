import React from "react";

const Filters = () => {
    return (
        <form className="filters" role="filter">
            <label for="year"><span>Year</span>
                    <select id="year" name="year" formControlName="year">
                        <option value="">None</option>
                        <option>year</option>
                    </select>
                </label>
            <label for="sortBy"><span>Sort By</span>
                <select id="sortBy" name="sortBy" formControlName="sortBy">
                    <option value="popularity.desc">Popularity Descending</option>
                    <option value="popularity.asc">Popularity Ascending</option>
                    <option value="vote_average.desc">Rating Descending</option>
                    <option value="vote_average.asc">Rating Ascending</option>
                    <option value="primary_release_date.desc">Release Date Descending</option>
                    <option value="primary_release_date.asc">Release Date Ascending</option>
                    <option value="title.asc">Title (A-Z)</option>
                    <option value="title.desc">Title (Z-A)</option>
                </select>
            </label>
            <label for="genre"><span>Genres</span>
                <select id="genre" name="genre" formControlName="genre">
                    <option value="">None</option>
                    <option>genre.name</option>
                </select>
            </label>
            <button>Filter <i className="fa fa-search"></i></button>

        </form>
    );
};

export default Filters;
