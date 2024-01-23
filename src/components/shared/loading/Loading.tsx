import {ActivityIndicator} from "react-native";
import React from "react";

const Loading = ({color = '#45306B', size = 36} : {color?: string, size?: number}) => {
    return <ActivityIndicator size={size} color={color}
                              style={{flex: 1}}/>
}

export default Loading