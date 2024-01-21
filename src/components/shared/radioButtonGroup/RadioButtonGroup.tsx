import {Text, View} from "react-native";
import styles from "./style";
import {RadioGroup} from "react-native-btr";
import {useState} from "react";
import {communityButtonsLabel, communityRadioButtons, eventButtonsLabel, eventRadioButtons} from "./buttonsRagioGroup";

interface IProps {
    actionType: 'event' | 'community'
}

const RadioButtonGroup = ({actionType} : IProps) => {
    const [radioId, setRadioId] = useState('1')
    const currentRadioButt0nGroup = actionType === 'event' ? eventRadioButtons : communityRadioButtons
    const currentButtonsLabels = actionType === 'event' ? eventButtonsLabel : communityButtonsLabel

    return (
        <View style={styles.block}>
            <View style={styles.leftBlock}>
                {currentButtonsLabels.map(({label, id} )=> {
                    return <Text key={id} style={styles.conditionText}>
                        {label}
                    </Text>
                })}
            </View>
            <RadioGroup
                selectedId={radioId}
                radioButtons={actionType === 'event' ? eventRadioButtons : communityRadioButtons}
                onPress={(selectedId) =>
                    setRadioId(selectedId)
                }
            />
        </View>
    )
}

export default RadioButtonGroup