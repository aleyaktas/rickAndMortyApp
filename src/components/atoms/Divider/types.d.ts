import { StyleProp, View, ViewStyle } from "react-native";

export interface StyleFnProps {
    top?: number, 
    bottom?: number, 
    vertical?: number, 
    color?: string, 
    type?: "solid" | "dotted" | "dashed" | undefined, 
    width?: number | string, 
    weight?: number
}

export interface DividerProps extends StyleFnProps {
    style?: StyleProp<ViewStyle> | undefined;
}

export interface StyleProps {
    container: StyleProp<ViewStyle> | undefined;
    divider: StyleProp<ViewStyle> | undefined;
}