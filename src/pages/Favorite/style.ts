import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    background: {
        top: 0,
        minHeight: 1050
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