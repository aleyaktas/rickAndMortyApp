import colors from '../../../themes/colors';
import {StyleProps} from './types';

export default (): StyleProps => {
  return {
    infoCard: {
      borderWidth: 0.5,
      borderColor: colors.quickSilver,
      borderRadius: 12,
      padding: 16,
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      flex: 1,
    },
  };
};
