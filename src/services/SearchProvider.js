import SETTINGS from './../config/settings';
import INSTANCE from './../config/instance';
/**
 * Multi Search
 * Search multiple models in a single request. Multi search currently supports searching for movies, tv shows and people in a single request.
 * @method getMultiSearch(query: object)
 * @param { String } query
 * @returns  Movies, tv shows and people in a single request.
 */
export function getMultiSearch(query) {
  return INSTANCE.get(`/search/multi?api_key=${SETTINGS.apikey}&language=${SETTINGS.language}&query=${query}`);
}