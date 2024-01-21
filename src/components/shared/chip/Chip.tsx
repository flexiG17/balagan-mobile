import {Text, TouchableOpacity, View} from "react-native";
import ChipInterface from "./Chip.interface";
import styles from './style'
import {useState} from "react";
import ComponentSize from "../../../consts/componentSize";

const Chip = ({title, size, isEditMode = true}: ChipInterface) => {
    const [isChecked, setIsChecked] = useState(false)

    const getComponentSize = () => {
        if (size === ComponentSize.Small)
            return styles.smallTextFont
        else if (size === ComponentSize.Big)
            return styles.bigTextFont
    }

    return (
        <TouchableOpacity
            key={title}
            onPress={() => isEditMode && setIsChecked(!isChecked)}
            activeOpacity={0.9}
        >
            <View style={[styles.block, isChecked && {backgroundColor: '#3B285C'}]}>
                <Text style={[styles.textDecoration, getComponentSize(), isChecked && {color: '#fff'}]}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default Chip