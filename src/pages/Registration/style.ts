import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    background: {
        position: "absolute",
        top: 0,
        width: '100%',
        height: '100%',
    },
    titlePosition: {
        marginBottom: 47
    },
    title: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '800',
    },
    input: {
        width: '100%',
        height: 50,
        marginBottom: 15,
        backgroundColor: '#E3E5E5',
        borderWidth: 1,
        borderColor: '#72777A',
        borderRadius: 8,
        paddingLeft: 15,

        fontSize: 16,
    },
    placeHolder : {
        color: 'red'
    },
    button: {
        display: "flex",
        justifyContent: "center",

        marginTop: 30,

        width: 220,
        height: 50,
        backgroundColor: '#AA69B7',
        borderRadius: 50,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
        textAlign: "center"
    }
});

export default styles