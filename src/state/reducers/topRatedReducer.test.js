import reducer from './topRatedReducer';
import * as types from './../actions/actionTypes';
import MOCK from './../../mocks';

describe('TOP RATED MEDIAS', () => {
    
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            page: null,
            results: [],
            total_pages: null,
            total_results: null
        });
    });

    it('should handle TOP_RATED_MEDIAS.LOAD_SUCCESS', () => {
        expect(reducer({}, { 
            type: types.TOP_RATED_MEDIAS.LOAD_SUCCESS,
            payload: MOCK.topRated
         })).toEqual(MOCK.topRated);
    });

});