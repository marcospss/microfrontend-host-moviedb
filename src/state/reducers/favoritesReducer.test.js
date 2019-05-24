import reducer from './favoritesReducer';
import * as types from './../actions/actionTypes';
import MOCK from './../../mocks';

describe('FAVORITES MEDIA', () => {
    
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual([]);
    });

    it('should handle FAVORITES_MEDIAS.LOAD_SUCCESS', () => {
        expect(reducer({}, { 
            type: types.FAVORITES_MEDIAS.LOAD_SUCCESS,
            payload: MOCK.favorites
         })).toEqual(MOCK.favorites);
    });

    it('should handle FAVORITES_MEDIAS.LOAD_FAILURE', () => {
        expect(reducer({}, { 
            type: types.FAVORITES_MEDIAS.LOAD_FAILURE,
            payload: {}
         })).toEqual({});
    });

    it('should handle FAVORITES_MEDIAS.SAVE', () => {
        expect(reducer({}, { 
            type: types.FAVORITES_MEDIAS.SAVE,
            payload: {
                "adult": false,
                "backdrop_path": "/8kPozGb4BDrcWBSsGPrkULG2tP9.jpg",
                "genre_ids": [28, 12, 16, 35, 10751, 878, 14],
                "id": 280217,
                "original_language": "en",
                "original_title": "The Lego Movie 2: The Second Part",
                "overview": "It's been five years since everything was awesome and the citizens are facing a huge new threat: LEGO DUPLO® invaders from outer space, wrecking everything faster than they can rebuild.",
                "poster_path": "/QTESAsBVZwjtGJNDP7utiGV37z.jpg",
                "release_date": "2019-01-26",
                "title": "The Lego Movie 2: The Second Part",
                "video": false,
                "vote_average": 6.6,
                "vote_count": 471,
                "popularity": 49.222,
                "mediaType": "movie"
            }
         })).toEqual(MOCK.favorites[2]);
    });

    it('should handle FAVORITES_MEDIAS.REMOVE', () => {
        expect(reducer(MOCK.favorites, {
            type: types.FAVORITES_MEDIAS.REMOVE,
            state: MOCK.favorites,
            payload: MOCK.favorites
            })).toEqual(MOCK.favorites);
    });

});