import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    block: {
        maxWidth: 60,
        gap: 6,
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    image: {
        width: 45,
        height: 45,
        borderRadius: 50,
        borderColor: '#751C71',
        borderWidth: 2
    },
    lightBackground: {
        backgroundColor: '#fff'
    },
    lightText: {
        color: '#fff'
    },
    text: {
        textAlign: "center",
        fontSize: 10,
        textDecorationLine: 'underline',
        fontWeight: '500'
    },
})

export default styles