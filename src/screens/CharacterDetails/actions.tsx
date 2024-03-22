import {getCharacterById} from '../../services/api/actions';
import {ICharacter} from '../../store/features/user/types';

export const getCharacterDetails = async (
  id: number,
  setCharacter: React.Dispatch<React.SetStateAction<ICharacter>>,
) => {
  const res = await getCharacterById(id);
  if (res) {
    setCharacter(res);
  }
};
