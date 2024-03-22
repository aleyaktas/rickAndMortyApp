import {getCharacterById} from '../../services/api/actions';
import {CharacterItem} from './types';

export const getCharacterDetails = async (
  id: number,
  setCharacter: React.Dispatch<React.SetStateAction<CharacterItem>>,
) => {
  const res = await getCharacterById(id);
  if (res) {
    setCharacter(res);
  }
};
