import {Dispatch, SetStateAction} from "react";
import {Modal, Text, View} from "react-native";
import styles from './style'
import GestureRecognizer from 'react-native-swipe-gestures';
import RadioButtonGroup from "../shared/radioButtonGroup/RadioButtonGroup";
import RangeSelect from "../shared/rangeSelect/RangeSelect";
import {sections} from "../../consts/sections";
import Chip from "../shared/chip/Chip";
import ComponentSize from "../../consts/componentSize";

interface IProps {
    modalVisible: boolean,
    setModalVisible: Dispatch<SetStateAction<boolean>>
    type: 'event' | 'community'
}

const ModalFilterComponent = ({modalVisible, setModalVisible, type}: IProps) => {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onShow={() => {/* fetch*/
            }}
            onRequestClose={() => setModalVisible(prevState => !prevState)}>
            <View style={styles.modalPosition}>
                <View style={styles.modalView}>
                    <View style={styles.dataBlock}>
                        <View style={styles.section}>
                            <Text style={styles.title}>Фильтрация</Text>
                            <View style={styles.lineSeparator}/>
                        </View>
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Сортировка</Text>
                            <RadioButtonGroup actionType={type}/>
                            <View style={styles.lineSeparator}/>
                        </View>
                        {type === 'community' && <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Количество человек</Text>
                            <RangeSelect type={'users'}/>
                            <View style={styles.lineSeparator}/>
                        </View>}
                        <View style={styles.section}>
                            <Text style={styles.sectionTitle}>
                                {type === 'community' && 'Интересы членов коммьюнити'}
                                {type === 'event' && 'Разделы'}
                            </Text>
                            <View style={styles.grid}>
                                {sections.map((section) => {
                                    return <Chip key={section} title={section} size={ComponentSize.Small}/>
                                })}
                            </View>
                            <View style={styles.lineSeparator}/>
                        </View>
                        {type === 'event' && <View style={styles.section}>
                            <Text style={styles.sectionTitle}>Цена</Text>
                            <RangeSelect type={'price'}/>
                        </View>}
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ModalFilterComponent

