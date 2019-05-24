import reducer from './popularReducer';
import * as types from './../actions/actionTypes';
import MOCK from './../../mocks';

describe('POPULAR MEDIA', () => {
    
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            page: null,
            results: [],
            total_pages: null,
            total_results: null
        });
    });

    it('should handle POPULAR_MEDIAS.LOAD_SUCCESS', () => {
        expect(reducer({}, { 
            type: types.POPULAR_MEDIAS.LOAD_SUCCESS,
            payload: MOCK.popular
         })).toEqual(MOCK.popular);
    });

});