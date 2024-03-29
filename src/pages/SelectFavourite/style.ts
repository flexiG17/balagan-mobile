import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 25,
        paddingTop: 70,
        paddingRight: 25,
        paddingBottom: 45,
        gap: 45
    },
    background: {
        top: 0,
        width: '100%',
        minHeight: 900,
    },
    title: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 17,
        fontWeight: '400',
        lineHeight: 22,
    },
    search: {
        width: 330,
        height: 50,
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 20,
        borderColor: '#A076A9',
        backgroundColor: '#F2F4F5',
        fontSize: 15,
    },
    chips: {
        width: 420,
        display: 'flex',
        justifyContent: "center",
        flexDirection: 'row',

        paddingLeft: 40,
        paddingTop: 35,
        paddingRight: 40,
        paddingBottom: 40,

        gap: 7,
        flexWrap: 'wrap',

        backgroundColor: '#fff',
        marginBottom: 15,

        borderTopStartRadius: 70,
        borderBottomEndRadius: 70
    },
    button: {
        width: 120,
        height: 40,
        backgroundColor: '#AA69B7',
        borderRadius: 50
    },
    buttonText: {
        textAlign: "center",
        color: '#fff',
        fontSize: 16,
        fontWeight: '400',

        marginTop: "auto",
        marginBottom: "auto"
    }
})

export default styles