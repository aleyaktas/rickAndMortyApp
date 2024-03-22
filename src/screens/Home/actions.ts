import React from 'react';
import {getEpisodes} from '../../services/api/actions';
import {EpisodeData} from '../../services/api/types';

export const getAllEpisodes = async (
  currentPage: number,
  setEpisodes: React.Dispatch<React.SetStateAction<EpisodeData>>,
) => {
  const res = await getEpisodes(currentPage);
  if (res?.results) {
    setEpisodes(prevState => ({
      info: res.info,
      results: [...prevState.results, ...res.results],
    }));
  }
};
