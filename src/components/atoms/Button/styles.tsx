import colors from '../../../themes/colors';
import {StyleFnProps} from './types';

export default ({border, borderColor, borderRadius}: Partial<StyleFnProps>) => {
  return {
    container: {},
    button: {
      padding: 4,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: borderRadius,
    },
    border: {
      borderColor: border ? borderColor : undefined,
      borderWidth: border ? 1 : undefined,
    },
    text: {
      textAlignVertical: 'bottom',
      letterSpacing: 1.4,
    },
    textMargin: {
      marginLeft: 7,
    },
    linear: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -33,
    },
    shadow: {
      shadowColor: colors.dimGray,
      shadowRadius: 13,
      shadowOpacity: 0.25,
      shadowOffset: {width: 0, height: 0},
      elevation: 7,
    },
  };
};
