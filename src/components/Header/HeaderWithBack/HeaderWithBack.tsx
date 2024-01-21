import {TouchableOpacity, View, Text} from "react-native";
import styles from "./style";
import {Entypo} from "@expo/vector-icons";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";

interface IProps {
    navigation: NativeStackNavigationProp<any, string>,
    title: string
}

const HeaderWithBack = ({navigation, title}: IProps) => {
    return(

        <View style={styles.titleBlock}>
            <TouchableOpacity
                onPress={() => {
                    navigation.pop()
                }}>
                <Entypo name="chevron-thin-left" size={18} color="black"
                        style={{marginTop: 3}}/>
            </TouchableOpacity>
            <View style={styles.titlePosition}>
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
        </View>
    )
}

export default HeaderWithBack