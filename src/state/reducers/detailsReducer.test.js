import reducer from './detailsReducer';
import * as types from './../actions/actionTypes';
import MOCK from './../../mocks';

describe('DETAILS MEDIA', () => {
    
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            adult: false,
            backdrop_path: null,
            belongs_to_collection: {},
            budget: null,
            genres: [],
            homepage: null,
            id: null,
            imdb_id: null,
            original_language: null,
            original_title: null,
            overview: null,
            popularity: null,
            poster_path: null,
            production_companies: [],
            production_countries: [],
            release_date: null,
            revenue: null,
            runtime: null,
            spoken_languages: [],
            status: null,
            tagline: null,
            title: null,
            video: null,
            vote_average: null,
            vote_count: null
        });
    });

    it('should handle DETAILS_MEDIA.LOAD_SUCCESS', () => {
        expect(reducer({}, { 
            type: types.DETAILS_MEDIA.LOAD_SUCCESS,
            payload: MOCK.details
         })).toEqual(MOCK.details);
    });

});