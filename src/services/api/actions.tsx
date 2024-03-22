import {get} from '.';

/**
 * It makes a GET request to the server, and returns the result
 * @returns An array of objects.
 */

export const getEpisodes = async (page: number) => {
  return get('/episode', `?page=${page}`);
};
