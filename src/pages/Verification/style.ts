import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    block: {
        gap: 30,
        marginBottom: 80
    },
    title: {
        fontSize: 20,
        fontWeight: '700'
    },
    text: {
        fontSize: 12,
        fontWeight: '400'
    },
    sectionData: {
        gap: 13
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '700'
    },
    description: {
        marginTop: -10,
        color: '#494949',
        fontSize: 12,
        fontWeight: '400'
    },
    input: {
        width: '100%',
        height: 30,
        paddingLeft: 11,
        fontSize: 12,
        fontWeight: '500',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#623EA0'
    },
    documentSection: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    documentText: {
        gap: 10
    },
    addIcon: {
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: '#623EA0',
        justifyContent: 'center',
        alignItems: 'center',

        marginTop: 'auto',
        marginBottom: 'auto',
    },
    button: {
        alignSelf: "center",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#3B285C',
        paddingLeft: 38,
        paddingRight: 38,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500'
    }
})

export default styles