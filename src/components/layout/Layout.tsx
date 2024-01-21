import styles from './style'
import {ImageBackground, Pressable, View} from "react-native";
import React from "react";

interface Props {
    children: React.ReactNode;
    background: any;
    isModalActivated?: boolean
}

const Layout: React.FC<Props> = ({children, background, isModalActivated}) => {

    return (
        <ImageBackground
            source={background}
            style={styles.background}
        >
            <Pressable
                style={isModalActivated && {
                    backgroundColor: 'rgba(23,14,61,0.29)'
                }}
            >
                <View style={styles.grid}>
                    {children}
                </View>
            </Pressable>
        </ImageBackground>
    )
}

export default Layout