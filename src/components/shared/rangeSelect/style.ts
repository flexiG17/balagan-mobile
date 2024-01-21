import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    block: {
        flexDirection: "row",
        gap: 12
    },
    text: {
        marginTop: 'auto',
        marginBottom: 'auto',

        fontSize: 15,
        fontWeight: '500'
    },
    input: {
        width: 90,
        height: 25,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#3B285C',

        paddingLeft: 13
    }
})

export default styles