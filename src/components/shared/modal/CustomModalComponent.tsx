import {Modal, Pressable, Text, View, StyleSheet} from "react-native";
import React, {Dispatch, SetStateAction} from "react";

interface IProps {
    modalVisible: boolean,
    setModalVisible: Dispatch<SetStateAction<boolean>>,
    text: string,
    withButton?: boolean
}

const CustomModalComponent = ({modalVisible, setModalVisible, text, withButton =  true} : IProps) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>
                        {text}
                    </Text>
                    {withButton && <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={styles.textStyle}>Ок</Text>
                    </Pressable>}
                </View>
            </View>
        </Modal>
    )
}

export default CustomModalComponent

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: '#dadada',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowOpacity: 0.25,
        shadowRadius: 20,
        elevation: 10,
    },
    button: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,

        borderRadius: 20,
    },
    buttonClose: {
        backgroundColor: '#AA69B7',
    },
    textStyle: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
})