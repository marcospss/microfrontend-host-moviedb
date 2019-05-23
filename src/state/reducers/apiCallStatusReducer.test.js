import reducer from './apiCallStatusReducer';
import * as types from './../actions/actionTypes';
import initialState from "./initialState"; 

describe('API CALL STATUS', () => {
    
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState.apiCallsInProgress);
    });

    it('should return the increment of the initial state', () => {
        expect(reducer(initialState.apiCallsInProgress, { 
            type: types.API_CALLS_IN_PROGRESS.BEGIN_CALL
         })).toEqual(1);
    });

    it('should return the decrement of the initial state', () => {
        expect(reducer(4, { 
            type: types.POPULAR_MEDIAS.LOAD_SUCCESS 
         })).toEqual(3);
    })

});