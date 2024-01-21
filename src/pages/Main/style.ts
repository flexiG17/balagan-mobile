import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    background: {
        top: 0,
        width: '100%',
        height: '100%',
    },
    grid: {
        paddingLeft: 25,
        paddingTop: 70,
        paddingRight: 25,
        paddingBottom: 45,

        display: "flex",
        gap: 35
    },
    advertising: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 15
    },
    interesting: {
        display: 'flex',
        gap: 20
    },
    interestingTitle: {
        fontSize: 18,
        fontWeight: '700'
    }
})

export default styles