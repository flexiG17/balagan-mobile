import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    background: {
        top: 0,
        minHeight: 850,
        width: '100%',
        height: '100%',
    },
    block: {
        paddingLeft: 25,
        paddingTop: 70,
        paddingRight: 25,
        paddingBottom: 45,

        gap: 30
    },
    cardGrid: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
});

export default styles