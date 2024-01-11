import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 45
    },
    background: {
        position: "absolute",
        top: 0,
        width: '100%',
        height: '100%',
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
        backgroundColor: '#B8B8B8',
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