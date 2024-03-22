import colors from '../../../themes/colors';
import {StyleProps} from './types';

export default (): StyleProps => {
  return {
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      color: colors.slimyGreen,
    },
    text: {
      fontSize: 16,
    },
    infoCard: {
      borderWidth: 0.5,
      borderColor: colors.quickSilver,
      borderRadius: 12,
      padding: 16,
      flexDirection: 'row',
    },
  };
};
