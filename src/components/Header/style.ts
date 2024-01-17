import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    grid: {
        display: 'flex',
        gap: 30
    },
    block: {
        width: '100%',
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    title: {
        fontSize: 24,
        fontWeight: '800'
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    }
})

export default styles