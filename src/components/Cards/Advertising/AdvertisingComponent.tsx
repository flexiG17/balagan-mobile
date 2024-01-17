import {View, Text, Image} from "react-native";
import styles from './style'
import React from "react";


interface Props {
    text: string
}
const AdvertisingComponent: React.FC<Props> = ({text}) => {
    return (
        <View style={styles.block}>
            <Image source={require('./assets/circuit.png')}/>
            <Text style={styles.text}>
                {text}
            </Text>
        </View>
    )
}

export default AdvertisingComponent