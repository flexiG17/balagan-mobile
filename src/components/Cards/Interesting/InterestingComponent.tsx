import {View, Text, TouchableOpacity} from "react-native";
import styles from "./style";

const InterestingComponent = () => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}>
            <View style={styles.block}>
                <View style={styles.leftBlock}>
                    <View style={styles.titleBlock}>
                        <Text style={styles.title}>
                            Модернизм
                        </Text>
                        <Text style={styles.description}>
                            Выставки · Свидания
                        </Text>
                    </View>
                    <Text style={styles.description}>
                        1-25 декабря 2023
                    </Text>
                </View>
                <View style={styles.rightBlock}>
                    <View style={styles.price}>
                        <Text style={styles.priceText}>
                            450р
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default InterestingComponent