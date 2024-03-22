import {getCharactersById, getEpisodeById} from '../../services/api/actions';
import {Episode} from '../../services/api/types';

export const getEpisodesDetails = async (
  id: number,
  setEpisode: React.Dispatch<React.SetStateAction<Episode>>,
) => {
  const res = await getEpisodeById(id);
  if (res) {
    setEpisode(res);
  }
};

export const getMultipleCharacters = async (
  ids: number[],
  setCharacterData: React.Dispatch<
    React.SetStateAction<{id: number; image: string; name: string}[]>
  >,
) => {
  const res = await getCharactersById(ids);
  if (res) {
    setCharacterData(res);
  }
};
