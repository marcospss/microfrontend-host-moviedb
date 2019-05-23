import reducer from './creditsReducer';
import * as types from './../actions/actionTypes';
import MOCK from './../../mocks';

describe('CREDITS MEDIA', () => {
    
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            id: null,
            cast: [],
            crew: []
        });
    });

    it('should handle CREDITS_MEDIA.LOAD_SUCCESS', () => {
        expect(reducer({}, { 
            type: types.CREDITS_MEDIA.LOAD_SUCCESS,
            payload: MOCK.credits
         })).toEqual(MOCK.credits);
    });

});