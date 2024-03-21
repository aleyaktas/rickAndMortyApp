import { StyleFnProps, StyleProps } from "./types";

export default ({ top, bottom, vertical, color, type, width, weight }: StyleFnProps): StyleProps => {
  return {
    container: {
      marginTop: top ? top : undefined,
      marginBottom: bottom ? bottom : undefined,
      marginVertical: vertical ? vertical : undefined,
      height: weight,
      width: width,
      overflow: "hidden"
    },
    divider: {
      borderWidth: weight,
      borderColor: color,
      borderStyle: type,
      width: width,
      height: 20,
      position: "absolute",
      bottom: 0
    },
  };
};
