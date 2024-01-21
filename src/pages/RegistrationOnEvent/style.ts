import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    block: {
        gap: 35,
    },
    inputGroup: {
        gap: 15
    },
    title: {
        fontSize: 16,
        fontWeight: '600'
    },
    input: {
        width: '100%',
        height: 30,
        borderWidth: 1,
        borderColor: '#623EA0',
        borderRadius: 8,
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 12,
        paddingLeft: 12
    },
    textWithSwitch: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    switchTextPosition: {
        justifyContent: 'center'
    },

    buttonPosition: {
        height: '48%',
    },
    button: {
        marginTop: 'auto',

        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 21,
        paddingRight: 22,

        alignSelf: 'center',
        borderRadius: 50,
        backgroundColor: '#3B285C'
    },
    buttonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '400'
    },
})

export default styles