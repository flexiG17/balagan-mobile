import {Text, TouchableOpacity, View} from "react-native";
import ChipInterface from "./Chip.interface";
import styles from './style'
import {useState} from "react";
import ComponentSize from "../../../consts/componentSize";
import ITag from "../../../interfaces/ITag";
import {getResultTagList} from "../../../pages/SelectFavourite/SelectFavouritePage";


const Chip = ({name, tag_id, size, isEditMode = true}: ChipInterface) => {
    const [isChecked, setIsChecked] = useState(false)

    const getComponentSize = () => {
        if (size === ComponentSize.Small)
            return styles.smallTextFont
        else if (size === ComponentSize.Big)
            return styles.bigTextFont
    }

    return (
        <TouchableOpacity
            key={tag_id}
            onPress={() => {
                isEditMode && setIsChecked(!isChecked)
                getResultTagList(tag_id)
            }}
            activeOpacity={0.9}
        >
            <View style={[styles.block, isChecked && {backgroundColor: '#3B285C'}]}>
                <Text style={[styles.textDecoration, getComponentSize(), isChecked && {color: '#fff'}]}>
                    {name}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default Chip