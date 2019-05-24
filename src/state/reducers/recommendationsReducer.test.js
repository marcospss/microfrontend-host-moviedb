import reducer from './recommendationsReducer';
import * as types from './../actions/actionTypes';
import MOCK from './../../mocks';

describe('RECOMMENDATIONS MEDIA', () => {
    
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            page: null,
            results: [],
            total_pages: null,
            total_results: null
        });
    });

    it('should handle RECOMMENDATIONS_MEDIA.LOAD_SUCCESS', () => {
        expect(reducer({}, { 
            type: types.RECOMMENDATIONS_MEDIA.LOAD_SUCCESS,
            payload: MOCK.recommendations
         })).toEqual(MOCK.recommendations);
    });

});