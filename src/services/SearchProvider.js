import { SETTINGS } from './../config/settings';
import axios from 'axios';

export class SearchProvider {

   /**
   * Multi Search
   * Search multiple models in a single request. Multi search currently supports searching for movies, tv shows and people in a single request.
   * @method getMultiSearch(query: object)
   * @param { String } query
   * @returns  Movies, tv shows and people in a single request.
   */
  getMultiSearch(query) {
    return axios.get(`${SETTINGS.apiEndpoint}/search/multi?api_key=${SETTINGS.apikey}&language=${SETTINGS.language}&query=${query}`);
  }

}