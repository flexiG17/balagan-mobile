import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    block: {
        paddingTop: 40,
        gap: 60,
        marginBottom: 270
    },
    title: {
        color: '#fff',
        fontSize: 45,
        fontWeight: '700',
        lineHeight: 60
    },
    text: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '300'
    },
    usersSection: {
      gap: 15
    },
    popularUsers: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '600'
    },
    usersGrid: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    buttonPosition: {
    },
    button: {
        alignSelf: 'center',
        height: 38,
        backgroundColor: '#fff',
        borderRadius: 50,
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '600'
    }
})

export default styles