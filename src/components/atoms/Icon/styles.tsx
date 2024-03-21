import { StyleFnProps } from "./types";

export default ({backgroundColor}: StyleFnProps)=> {
    return {
        container:{
            backgroundColor: backgroundColor
        },
    };
}