import {TextInput, TouchableOpacity, View} from "react-native";
import styles from './style'
import React, {Dispatch, SetStateAction, useState} from "react";
import {AntDesign} from "@expo/vector-icons";
import ModalFilterComponent from "../../ModalFilter/ModalFilterComponent";
import GestureRecognizer from "react-native-swipe-gestures";

interface IProps {
    filterType: 'event' | 'community',
    modalVisible: boolean,
    setModalVisible: Dispatch<SetStateAction<boolean>>
}

const Search = ({filterType, modalVisible, setModalVisible}: IProps) => {

    return (
        <View style={styles.searchBlock}>
            <TextInput
                style={styles.search}
                placeholder={'Поиск'}
                placeholderTextColor={'#6C7072'}
            />
            <TouchableOpacity
                onPress={() => {
                    setModalVisible(prevState => !prevState)
                }}
            >
                <AntDesign name="filter" size={26} color="black" style={styles.searchIcon}/>
            </TouchableOpacity>
            <GestureRecognizer
                style={{flex: 1}}
                onSwipeUp={() =>
                    setModalVisible(prevState => !prevState)}
                onSwipeDown={() =>
                    setModalVisible(prevState => !prevState)}
            >
                <ModalFilterComponent modalVisible={modalVisible} setModalVisible={setModalVisible} type={filterType}/>

            </GestureRecognizer>
        </View>
    )
}

export default Search