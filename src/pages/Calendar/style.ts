import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    background: {
        top: 0,
        width: '100%',
        height: '100%',
    },
    block: {
        paddingLeft: 25,
        paddingTop: 70,
        paddingRight: 25,
        paddingBottom: 45,

        display: "flex",
        gap: 25,
        width: '100%',
        height: '100%',
    },
    calendar: {
        marginBottom: 20
    },

    event: {
        width: '100%',
        backgroundColor: '#EAE7FF',
        borderRadius: 15,

        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 25,
        paddingRight: 25,
    },
    eventBlock: {
        flexDirection: 'row',
        gap: 15
    },
    eventTime: {
        fontSize: 16,
        fontWeight: '700'
    },
    eventDescription: {
        flexDirection: "column",
    },
    eventTitle: {
        fontSize: 15,
        fontWeight: '600',
        marginBottom: 5
    },
    eventText: {
        fontSize: 10,
        fontWeight: '600',
        marginBottom: 15
    },
    eventTicket: {
        width: 80,
        height: 18,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#3B285C',
        backgroundColor: '#fff',

        marginBottom: 12
    },
    eventTicketText: {
        color: '#3B285C',
        textAlign: 'center',
        fontSize: 10,
        fontWeight: '600',
    },
    eventCommunity: {
        fontSize: 10,
        color: '#18132C',
        fontWeight: '700'
    },
    eventCommunityText: {
        fontSize: 7,
        fontWeight: '500'
    },
    eventCommunityBlock: {
        marginTop: 10,
        flexDirection: "row",
        gap: 35,
        marginBottom: 18
    },
    eventCommunityIcon: {
        width: 20,
        height: 20,
        backgroundColor: '#3B285C',
        borderRadius: 50,
        paddingTop: 2,

        marginTop: 10,
    },
    eventCommunityDescription:{
        fontSize: 8,
        fontWeight: '600',
        marginBottom: 13
    },
    moreInfo: {
        color: '#3B285C',
        fontSize: 8,
        fontWeight: '600',
        textDecorationLine: "underline",

        marginBottom: 20
    },
    separator: {
        alignSelf: 'center',
        flexDirection: "row",
        marginBottom: 20
    },
    line: {
        alignSelf: 'center',
        width: '90%',
        borderBottomColor: '#3B285C',
        borderBottomWidth: 1,
    }
});

export default styles