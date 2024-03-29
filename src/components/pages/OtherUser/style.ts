import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    block: {
        paddingLeft: 25,
        paddingTop: 70,
        paddingRight: 25,
        paddingBottom: 45,

        gap: 30
    },
    userDataBlock: {
        flexDirection: 'row',
        gap: 30
    },
    buttonsGroup: {
        justifyContent: "space-between",
        flexDirection: 'row',
    },
    socialButton: {
        height: 35,
        backgroundColor: '#623EA0',
        borderRadius: 50,

        paddingRight: 30,
        paddingLeft: 30,

        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    icon: {
    },
    buttonText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fff'
    },
    photo: {
        width: 88,
        height: 88,
        backgroundColor: '#D7D0FE',
        borderRadius: 50
    },
    userData: {
        gap: 15
    },
    userName: {
        fontSize: 24,
        fontWeight: '700'
    },
    textWithIcon: {
        flexDirection: 'row',
        gap: 5
    },
    userGeo: {
        marginTop: 'auto',
        marginBottom: 'auto',
        fontSize: 15,
        fontWeight: '300'
    },

    sectionGrid: {
        flexDirection: 'row',
        gap: 7,
        flexWrap: 'wrap'
    },
    sectionData: {
        gap: 11
    },
    title: {
        fontSize: 18,
        fontWeight: '600'
    },
    description: {
        fontSize: 13,
        fontWeight: '300'
    }
})

export default styles