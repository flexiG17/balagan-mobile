import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    modalPosition: {
        marginTop: 'auto'
    },
    modalView: {
        backgroundColor: '#fff',
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        alignItems: 'center',

        shadowColor: '#000',
        elevation: 20,

        paddingTop: 20,
        paddingBottom: 50,
        paddingLeft: 30,
        paddingRight: 30,
    },

    dataBlock: {
        gap: 35
    },
    section: {
        gap: 10,
    },
    lineSeparator: {
        width: 340,
        borderBottomWidth: 1,
        borderColor: '#D9D9D9',
    },

    title: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '700'
    },
    sectionTitle: {
        textAlign: "left",
        fontSize: 18,
        fontWeight: '700'
    },
    conditionText: {
        fontSize: 13,
        fontWeight: '400'
    },
    grid: {
        flexDirection: 'row',
        gap: 5,
        flexWrap: 'wrap'
    }
});

export default styles