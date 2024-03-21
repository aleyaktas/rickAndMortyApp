import colors from "../../../themes/colors";
import { StyleFnProps } from "./types";

export default ({width, height, flex, resizeMode, aspectRatio}:StyleFnProps)=> {
    return {
        container:{
            flex: flex? 1 : undefined,
        },
        image:{
            width: width ? width : undefined,
            height: height ? height : undefined,
            flex: flex? 1 : 0,
            resizeMode: resizeMode,
            aspectRatio: aspectRatio ? aspectRatio : null
        },
        border:{
            flex: 0,
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: 9,
            justifyContenet: "center",
            alignItems:"center",
            padding: 13,
        }
    };
}