import {get} from '.';

/**
 * It makes a GET request to the server, and returns the result
 * @returns An array of objects.
 * @param page The page number
 */

export const getEpisodes = async (page: number) => {
  return get('/episode', `?page=${page}`);
};

/**
 * It makes a GET request to the server, and returns the result
 * @returns An array of objects.
 * @param id The id of the episode
 */

export const getEpisodeById = async (id: number) => {
  return get(`/episode`, `/${id}`);
};

/**
 * It makes a GET request to the server, and returns the result
 * @returns An array of objects.
 * @param ids The id of the character
 */

export const getCharactersById = async (ids: number[]) => {
  return get(`/character`, `/${ids.join(',')}`);
};

/**
 * It makes a GET request to the server, and returns the result
 * @returns An array of objects.
 * @param id The id of the character
 */

export const getCharacterById = async (id: number) => {
  return get(`/character`, `/${id}`);
};
