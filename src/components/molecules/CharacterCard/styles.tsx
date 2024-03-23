import {StyleProps} from './types';

export default (): StyleProps => {
  return {
    card: {
      flexDirection: 'row',
      backgroundColor: 'white',
      padding: 16,
      borderRadius: 10,
      gap: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    details: {
      flex: 1,
      padding: 10,
      justifyContent: 'center',
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    statusContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
    },
    statusIndicator: {
      width: 12,
      height: 12,
      borderRadius: 6,
    },
    footer: {
      flexDirection: 'row',
      gap: 6,
      alignItems: 'center',
    },
  };
};
