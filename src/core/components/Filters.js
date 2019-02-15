import React from "react";

const Filters = (props) => {
    const { Years, Genres, changePropertiesFilter } = props;

    const filterDiscoverProperties = {
        mediaType: 'movie',
        sortBy: 'popularity.desc',
        year: '',
        genre: ''
    };

    return (
        <form className="filters" onSubmit={e => e.preventDefault()}>
            <label htmlFor="year"><span>Year</span>
                    <select id="year" name="year" onChange={ e => filterDiscoverProperties.year = e.target.value }>
                        <option value="">None</option>
                            { 
                                Years.map(year => {
                                    return (
                                        <option key={ year } value={ year }>{ year }</option>
                                    )
                                })
                            }
                    </select>
                </label>
            <label htmlFor="sortBy"><span>Sort By</span>
                <select id="sortBy" name="sortBy" onChange={ e => filterDiscoverProperties.sortBy = e.target.value }>
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
            <label htmlFor="genre"><span>Genres</span>
                <select id="genre" name="genre" onChange={ e => filterDiscoverProperties.genre = e.target.value }>
                    <option value="">None</option>
                    { 
                        Genres.map(genre => {
                            return (
                                <option key={ genre.id } value={ genre.id }>{ genre.name }</option>
                            )
                        })
                    }
                </select>
            </label>
            <button onClick= { () => changePropertiesFilter(filterDiscoverProperties) }>Filter <i className="fa fa-search"></i></button>
        </form>
    );
};



export default Filters;
