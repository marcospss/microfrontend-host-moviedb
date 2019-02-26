import { SETTINGS } from './../config/settings';
import axios from 'axios';

export class CommonProvider {

  /**
   * Get Credits
   * Get the cast and crew for a movie.
   * Get the credits (cast and crew) that have been added to a TV show.
   * @method getCredits(properties)
   * @param properties
   * @returns Returns the cast and crew of a movie or TV show.
   */
  getCredits(properties) {
    const mediaType = properties.mediaType,
    id = properties.mediaId;
    return axios.get(`${SETTINGS.apiEndpoint}/${mediaType}/${id}/credits?api_key=${SETTINGS.apikey}&language=${SETTINGS.language}`);
  }

  /**
   * Get Recommendations
   * Get a list of recommended movies for a movie or list of TV show recommendations for this item.
   * @param properties
   */
  getRecommendations(properties) {
    const mediaType = properties.mediaType,
    id = properties.mediaId;
    return axios.get(`${SETTINGS.apiEndpoint}/${mediaType}/${id}/recommendations?api_key=${SETTINGS.apikey}&language=${SETTINGS.language}`);
  }

  /**
   * Get Similar
   * Get a list of similar movies. This is not the same as the "Recommendation" system you see on the website.
   * Get a list of similar TV shows. These items are assembled by looking at keywords and genres.
   * @param properties
   */
  getSimilar(properties) {
    const mediaType = properties.mediaType,
    id = properties.mediaId;
    return axios.get(`${SETTINGS.apiEndpoint}/${mediaType}/${id}/similar?api_key=${SETTINGS.apikey}&language=${SETTINGS.language}`);
  }

  /**
   * Get Top Rated
   * Get the top rated movies/tv shows on TMDb.
   * @param properties
   */
  getTopRated(properties) {
    const mediaType = properties.mediaType;
    return axios.get(`${SETTINGS.apiEndpoint}/${mediaType}/top_rated?api_key=${SETTINGS.apikey}&language=${SETTINGS.language}`);
  }

  /**
   * Get Details
   * Get the primary information about a movies/tv shows.
   * @param properties
   */
  getDetails(properties) {
    const mediaType = properties.mediaType,
    id = properties.mediaId;
    return axios.get(`${SETTINGS.apiEndpoint}/${mediaType}/${id}?api_key=${SETTINGS.apikey}&language=${SETTINGS.language}`);
  }

  /**
   * Get Genres
   * Get the list of official genres for movies/TV shows.
   * @param properties
   */
  getGenres(mediaType) {
    return axios.get(`${SETTINGS.apiEndpoint}/genre/${mediaType}/list?api_key=${SETTINGS.apikey}&language=${SETTINGS.language}`);
  }

  /**
   * Get Years
   * Return list years
   */
    getYears() {
        const arrYears = [],
            date = new Date(),
            currentYear = date.getFullYear();

        for (let year = currentYear + 1; year >= 1900; year -= 1) {
            arrYears.push(year);
        }
        return arrYears;
    }

}