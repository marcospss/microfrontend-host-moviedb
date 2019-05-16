import SETTINGS from './../config/settings';
import INSTANCE from './../config/instance';

/**
 * Get Credits
 * Get the cast and crew for a movie.
 * Get the credits (cast and crew) that have been added to a TV show.
 * @method getCredits(properties)
 * @param properties
 * @returns Returns the cast and crew of a movie or TV show.
 */
export function getCredits(properties) {
  const mediaType = properties.mediaType,
    id = properties.mediaId;
  return INSTANCE.get(`/${mediaType}/${id}/credits?api_key=${SETTINGS.apikey}&language=${SETTINGS.language}`);
}

/**
 * Get Recommendations
 * Get a list of recommended movies for a movie or list of TV show recommendations for this item.
 * @param properties
 */
export function getRecommendations(properties) {
  const mediaType = properties.mediaType,
    id = properties.mediaId;
  return INSTANCE.get(`/${mediaType}/${id}/recommendations?api_key=${SETTINGS.apikey}&language=${SETTINGS.language}`);
}

/**
 * Get Similar
 * Get a list of similar movies. This is not the same as the "Recommendation" system you see on the website.
 * Get a list of similar TV shows. These items are assembled by looking at keywords and genres.
 * @param properties
 */
export function getSimilar(properties) {
  const mediaType = properties.mediaType,
    id = properties.mediaId;
  return INSTANCE.get(`/${mediaType}/${id}/similar?api_key=${SETTINGS.apikey}&language=${SETTINGS.language}`);
}

/**
 * Get Top Rated
 * Get the top rated movies/tv shows on TMDb.
 * @param properties
 */
export function getTopRated(properties) {
  const mediaType = properties.mediaType;
  return INSTANCE.get(`/${mediaType}/top_rated?api_key=${SETTINGS.apikey}&language=${SETTINGS.language}`);
}

/**
 * Get Details
 * Get the primary information about a movies/tv shows.
 * @param properties
 */
export function getDetails(properties) {
  const mediaType = properties.mediaType,
    id = properties.mediaId;
  return INSTANCE.get(`/${mediaType}/${id}?api_key=${SETTINGS.apikey}&language=${SETTINGS.language}`);
}

/**
 * Get Genres
 * Get the list of official genres for movies/TV shows.
 * @param properties
 */
export function getGenres(mediaType) {
  return INSTANCE.get(`/genre/${mediaType}/list?api_key=${SETTINGS.apikey}&language=${SETTINGS.language}`);
}

/**
 * Get Years
 * Return list years
 */
export function getYears() {
  let arrYears = [],
    date = new Date(),
    currentYear = date.getFullYear();

  for (let year = currentYear + 1; year >= 1900; year -= 1) {
    arrYears = [...arrYears, year]
  }
  return arrYears;
}