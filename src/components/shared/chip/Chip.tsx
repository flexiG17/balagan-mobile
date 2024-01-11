import {View, Text, TouchableHighlight} from "react-native";
import ChipInterface from "./Chip.interface";
import styles from './style'
import {useState} from "react";

const Chip = ({title}: ChipInterface) => {
    const [isChecked, setIsChecked] = useState(false)

    return (
        <TouchableHighlight
            key={title}
            onPress={() => setIsChecked(!isChecked)}
            underlayColor="white">

            <View style={[styles.block, isChecked && {backgroundColor: '#B8B8B8'}]}>
                <Text style={styles.text}>
                    {title}
                </Text>
            </View>
        </TouchableHighlight>
    )
}

export default Chip