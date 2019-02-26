import { SETTINGS } from './../config/settings';
import axios from 'axios';

export class DiscoverProvider {

   /**
    * Movie/TV Discover
    * Discover movies by different types of data like average rating, number of votes, genres and certifications. You can get a valid list of certifications from the  method.
    * Discover TV shows by different types of data like average rating, number of votes, genres, the network they aired on and air dates.
    * @method getDiscover(properties: object)
    * @param { String } mediaType
    * @param { String } sortBy
    * @param { String } year
    * @param { String } genre
    * @param { String } fieldFilter
    * @returns Movie List Result Object
   */
  getDiscover(properties) {
    const mediaType = properties.mediaType,
    sortBy = properties.sortBy,
    year = properties.year,
    genre = properties.genre,
    fieldFilter = (mediaType === 'movie') ? 'year' : 'first_air_date_year';

    return axios.get(`${SETTINGS.apiEndpoint}/discover/${mediaType}?api_key=${SETTINGS.apikey}&language=${SETTINGS.language}&sort_by=${sortBy}&with_genres=${genre}&${fieldFilter}=${year}`);
  }

}