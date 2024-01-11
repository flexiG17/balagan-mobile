import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
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
    button: {
        display: "flex",
        justifyContent: "center",

        marginTop: 30,

        width: 130,
        height: 50,
        backgroundColor: '#AA69B7',
        borderRadius: 50,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
        textAlign: "center"
    },
    error: {
        marginLeft: "auto",
        color: '#FADFFF',
        fontSize: 12,
        fontWeight: '300',

        textDecorationLine: 'underline'
    },
    background: {
        position: "absolute",
        top: 0,
        width: '100%',
        height: '100%',
    }
});

export default styles