import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    block: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    title: {
        fontSize: 18,
        fontWeight: '700'
    },
    count: {
        fontSize: 15,
        fontWeight: '500'
    },
    cards: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    }
})

export default styles