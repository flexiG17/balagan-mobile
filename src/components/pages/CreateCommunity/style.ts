import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    background: {
        top: 0,
        minHeight: 900,
        width: '100%',
        height: '100%',
    },
    block: {
        paddingLeft: 25,
        paddingTop: 70,
        paddingRight: 25,
        paddingBottom: 45,

        display: "flex",
        gap: 25,
        width: '100%',
        height: '100%',
    },
    inputBlock: {
        gap: 12
    },
    title: {
        fontSize: 16,
        fontWeight: '600'
    },
    search: {
        width: '100%',
        height: 30,
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 20,
        borderColor: '#623EA0',
        fontSize: 12,
    },
    description: {
        marginTop: -5,
        fontSize: 10,
        fontWeight: '400'
    },
    multiline: {
        height: 90,
        textAlignVertical: 'top',
        paddingTop: 5,
        paddingBottom: 5,
    },
    addPhotoIcon: {
        width: 42,
        height: 42,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#623EA0'
    },
    sectionGrid: {
        flexDirection: 'row',
        gap: 5,
        flexWrap: 'wrap'
    },
    textWithSwitch: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginBottom: -5
    },
    switchTextPosition: {
        justifyContent: 'center'
    },

    button: {
        marginTop: 20,

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