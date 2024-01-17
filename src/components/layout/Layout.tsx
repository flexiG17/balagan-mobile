import styles from './style'
import {ImageBackground, View} from "react-native";
import React from "react";

interface Props {
    children: React.ReactNode;
    background: any;
}

const Layout: React.FC<Props> = ({children, background}) => {
    return (
        <ImageBackground
            source={background}
            style={styles.background}
        >
            <View style={styles.grid}>
                {children}
            </View>
        </ImageBackground>
    )
}

export default Layout