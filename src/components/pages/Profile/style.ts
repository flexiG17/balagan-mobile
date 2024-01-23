import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    block: {
        paddingLeft: 25,
        paddingTop: 70,
        paddingRight: 25,
        paddingBottom: 45,
        gap: 15
    },

    profile: {
        marginTop: 20,
        gap: 12,
    },
    profilePhoto: {
        width: 88,
        height: 88,
        borderRadius: 50,
        backgroundColor: '#fff',

        marginLeft: 'auto',
        marginRight: 'auto',
    },
    profileName: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '700'
    },
    profileDescription: {
        textAlign: 'center',
        color: '#6B6D80',
        fontSize: 13,
        fontWeight: '500'
    },

    status: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    statusContainer: {
        width: 175,

        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 10,
        paddingRight: 5,

        backgroundColor: '#F4F3FF',
        borderWidth: 1,
        borderColor: '#3B285C8C',
        borderRadius: 10,
    },
    statusTextWithIcon: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5
    },
    statusTitle: {
        fontSize: 10,
        fontWeight: '600'
    },
    statusDescription: {
        marginLeft: 20,
        fontSize: 8,
        fontWeight: '300'
    },

    favorite: {
        marginTop: 10,
        gap: 15,
        marginBottom: 20
    },
    favoriteTitle: {
        fontSize: 15,
        fontWeight: '700'
    },
    favoriteChipContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        flexWrap: 'wrap'
    },

    actions: {
        gap: 15,
        width: '100%',

        borderWidth: 1,
        borderColor: '#2A1481',
        borderRadius: 12,

        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 20,
        paddingRight: 23
    },
    actionBlock: {
        display: 'flex',
        flexDirection: "row",
        gap: 15
    },
    actionClickableSection : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',

        marginTop: "auto",
        marginBottom: "auto",
    },
    actionClickableSectionText : {
        fontSize: 16,
        fontWeight: '400'
    }
});

export default styles