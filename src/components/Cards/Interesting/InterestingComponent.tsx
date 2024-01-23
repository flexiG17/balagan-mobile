import {View, Text, TouchableOpacity, ImageBackground} from "react-native";
import styles from "./style";
import {NativeStackNavigationProp} from "@react-navigation/native-stack/src/types";
import {Routes} from "../../../consts/routesNames";
import IEvent from "../../../interfaces/IEvent";
import {deleteExtraSpaces} from "../../utils/formatText";

interface IProps{
    navigation : NativeStackNavigationProp<any>,
    event: IEvent
}

const InterestingComponent = (props : IProps) => {
    return (
        <TouchableOpacity
            onPress={() => props.navigation.push(Routes.EVENT_ROUTE, {
                event_id: props.event.event_id
            })}
            activeOpacity={0.8}>
            <View style={styles.block}>
                <View style={styles.leftBlock}>
                    <View style={styles.titleBlock}>
                        <Text
                            numberOfLines={1}
                            style={styles.title}>
                            {deleteExtraSpaces(props.event.name)}
                        </Text>
                        <Text style={styles.description}>
                            {/*{props.event.tags?.data[0].name} · {}*/}
                        </Text>
                    </View>
                    <Text style={styles.description}>
                        {props.event.date} · 17:30
                    </Text>
                </View>
                <ImageBackground
                    source={{uri : props.event.image}}
                    style={styles.image}
                >
                    <View style={styles.rightBlock}>
                        <View style={styles.price}>
                            <Text style={styles.priceText}>
                                {props.event.price} ₽
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    )
}

export default InterestingComponent