import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    background: {
        top: 0,
        width: '100%',
        height: '100%'
    },
    block: {
        paddingLeft: 25,
        paddingTop: 70,
        paddingRight: 25,
        paddingBottom: 45,

        gap: 25,
        width: '100%',
        height: '100%',
    },

    image: {
        width: '100%',
        height: 180,
        borderRadius: 12,
        paddingTop: 11,
        paddingBottom: 11,
        paddingRight: 14,

        backgroundColor: '#D1CCF1'
    },

    imageIcons: {
        alignItems: 'flex-end',
        flex: 1,
        justifyContent: "space-between"
    },
    eventStats:{
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 7,
        paddingRight: 7,

        marginTop: 'auto',

        borderRadius: 18,
        backgroundColor: '#3B285C'
    },
    statsText: {
        color: '#fff',
        fontSize: 8,
        fontWeight: '600'
    },

    eventData: {
        width: '100%',
        backgroundColor: '#C7B3F047',
        borderRadius: 8,
        flexDirection: 'row',
        marginBottom: 10,
    },

    dataBlock: {
        gap: 2,
        paddingLeft: 7,
        paddingRight: 7,
        paddingTop: 10,
        paddingBottom: 10,
    },
    separatorLine: {
        borderWidth: 0.5,
        borderColor: '#fff',
        height: '70%',

        marginTop: 'auto',
        marginBottom: 'auto',
        marginRight: 3
    },
    smallSize: {
        width: 130,
    },
    dataTitle: {
        textAlign: 'center',
        color: '#151231',
        fontSize: 12,
        fontWeight: '800',
    },
    dataDescription: {
        textAlign: 'center',
        fontSize: 8,
        fontWeight: '600',
    },

    description: {
        fontSize: 11,
        fontWeight: '400',

    },

    button: {
        borderRadius: 50,
        backgroundColor: '#3B285C',
        justifyContent: "center",
        alignItems: 'center',
        alignSelf: 'center',

        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 7,
        paddingTop: 7
    },
    buttonText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '500'
    },
    groupDataBlock: {
        gap: 7,
        marginBottom: 5
    },
    sectionTitle: {
        color: '#18132C',
        fontSize: 18,
        fontWeight: '700'
    },
    sectionText: {
        fontSize: 10,
        fontWeight: '400'
    },
    profileGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconBlock: {
        backgroundColor: '#3B285C',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        height: 28,
        width: 28,

        marginTop: '5%',
    },

    newEvent: {
        fontSize: 14,
        fontWeight: '600'
    },
    addPhotoIcon: {
        width: 32,
        height: 32,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#623EA0'
    },
})

export default styles