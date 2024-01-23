import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    background: {
        top: 0,
        width: '100%',
        height: '100%',
    },
    block: {
        paddingLeft: 25,
        paddingTop: 70,
        paddingRight: 25,
        paddingBottom: 45,

        gap: 25,
        width: '100%',
        height: '100%',
        marginBottom: 25,
    },
    image: {
        width: '100%',
        height: 180,
        borderRadius: 12,
        backgroundColor: '#D1CCF1'
    },
    title: {
        color: '#18132C',
        fontSize: 16,
        fontWeight: '600'
    },
    description: {
        fontSize: 11,
        fontWeight: '400'
    },
    button: {
        height: 30,
        backgroundColor: '#3B285C',
        borderRadius: 50,

        justifyContent: 'center'
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 12,
        fontWeight: '400'
    },

    navigationBlock: {
        flexDirection: 'row',
    },
    eventBlock: {
        height: 30,
        borderBottomWidth: 1,
        borderColor: '#3B285C',
        paddingBottom: 8
    },
    selectedBlock: {
        borderBottomWidth: 3,
    },
    navigationTitle: {
        color: '#7D7D7D',
        textAlign: 'center',
        fontSize: 13,
        fontWeight: '500'
    },
    selectedBlockText: {
        color: '#000'
    },

    textWithIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    addIcon: {
        alignItems: 'center',
        width: 24,
        height: 24,
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: '#623EA0'
    },

    eventsGrid: {
        flexDirection: 'row',
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 20,
    }
})

export default styles