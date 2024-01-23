import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    background: {
        top: 0,
        height: '100%'
    },
    block: {
        paddingLeft: 25,
        paddingTop: 70,
        paddingRight: 25,
        paddingBottom: 45,

        gap: 35,
        width: '100%',
        height: '100%',
    },
    search: {
        width: '100%',
        height: 30,
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 20,
        borderColor: '#623EA0',
        fontSize: 12,
    },
    inputBlock: {
        gap: 15
    },
    title: {
        fontSize: 16,
        fontWeight: '600'
    },
    inputWithIcon: {
        flexDirection: 'row',
        gap: 11
    },
    description: {
        marginTop: -10,
        fontSize: 10,
        fontWeight: '400'
    },
    multiline: {
        height: 90,
        textAlignVertical: 'top',
        paddingTop: 5,
        paddingBottom: 5,
    },
    sectionGrid: {
        flexDirection: 'row',
        gap: 5,
        flexWrap: 'wrap'
    },
    addPhotoIcon: {
        width: 42,
        height: 42,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: '#623EA0'
    },
    communityGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    submitButton: {
        width: 130,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#623EA0',
        borderRadius: 50,

        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600'
    },
})

export default styles