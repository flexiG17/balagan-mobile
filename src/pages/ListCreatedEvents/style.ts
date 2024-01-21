import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    background: {
        top: 0,
        height: 1250
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
    createEvent: {
        width: 200,
        height: 30,
        backgroundColor: '#3B285C',
        borderRadius: 8,

        paddingLeft: 12,

        flexDirection: 'row',
        gap: 10
    },
    createEventText: {
        marginTop: 'auto',
        marginBottom: 'auto',

        textAlign: 'center',
        color: '#fff',
        fontSize: 12,
        fontWeight: '500'
    },
    grid: {
        flexDirection:  'row',
        justifyContent: "space-between",
        gap: 30,
        flexWrap: 'wrap'
    },

    titleWithIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    endedTitle: {
        fontSize: 18,
        fontWeight: '700'
    }
});

export default styles