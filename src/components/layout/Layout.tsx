import styles from './style'
import {View} from "react-native";
import React from "react";

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({children}) => {
    return(
        <View style={styles.grid}>
            {children}
        </View>
    )
}

export default Layout