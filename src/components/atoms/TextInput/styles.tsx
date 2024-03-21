import {I18nManager, Platform} from 'react-native';
import colors from '../../../themes/colors';
import {StyleFnProps, StyleProps} from './types';

export default ({
  backgroundColor,
  fontSize,
  activeBackgroundColor,
}: StyleFnProps): StyleProps => {
  return {
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: backgroundColor,
      borderColor: backgroundColor,
      borderWidth: 1,
      borderRadius: 17,
      padding: Platform.OS == 'ios' ? 13 : 9,
    },
    fContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: activeBackgroundColor,
      borderColor: colors.greenRYB.op20,
      borderWidth: 1,
      borderRadius: 17,
      padding: Platform.OS == 'ios' ? 13 : 9,
    },
    seperator: {
      width: 1,
      height: '100%',
      backgroundColor: colors.lightGray,
      marginHorizontal: 7,
    },
    fSeperator: {
      width: 1,
      height: '100%',
      backgroundColor: colors.dimGray,
      marginHorizontal: 7,
    },
    leftContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
      marginHorizontal: 5,
    },
    input: {
      fontSize: fontSize,
      flex: 1,
      paddingVertical: 0,
      marginLeft: 5,
      letterSpacing: 1.4,
      fontFamily: 'Fredoka-Medium',
      textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    icon: {},
  };
};
