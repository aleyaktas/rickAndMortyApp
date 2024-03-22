import {getCharacterById, getEpisodeById} from '../../services/api/actions';
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

export const getCharacterDetails = async (id: number) => {
  const res = await getCharacterById(id);
  return res;
};
