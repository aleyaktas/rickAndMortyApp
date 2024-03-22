import {StyleProps} from './types';

export default (): StyleProps => {
  return {
    card: {
      backgroundColor: 'white',
      padding: 10,
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
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: 16,
    },
    footer: {
      flexDirection: 'row',
      gap: 6,
      alignItems: 'center',
    },
  };
};
