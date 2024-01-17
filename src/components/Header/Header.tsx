import {View, Text, TouchableOpacity} from "react-native";
import styles from './style'
import {Feather, AntDesign} from '@expo/vector-icons';

const Header = () => {

    return (
        <View style={styles.block}>
            <Text style={styles.title}>
                События
            </Text>
            <View style={styles.actions}>
                <View style={styles.actions}>
                    <TouchableOpacity
                        activeOpacity={0.4}>
                        <Feather name="search" size={24} color="black"/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.4}>
                        <AntDesign name="plus" size={24} color="black"/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Header