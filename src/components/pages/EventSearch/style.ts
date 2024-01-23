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

    },
    titleBlock: {
        flexDirection: 'row',
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '800',
    },
    titlePosition: {
        marginLeft: 'auto',
        marginRight: 'auto'
    },

    calendarBlock: {
        gap: 8
    },
    calendarTextBlock: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    calendarMonth: {
        color: '#3B285C',
        fontSize: 13,
        fontWeight: '500'
    },
    calendarRange: {
        color: '#3B285C',
        fontSize: 11,
        fontWeight: '500',
        textDecorationLine: "underline"
    },
    calendarDatePicker: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#3B285C',
        borderRadius: 12,

        flexDirection: 'row',
        justifyContent: "center",
        gap: 13,

        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 8,
        paddingRight: 8,
    },
    calendarDateBlock: {
        gap: 2
    },
    calendarDateText: {
        textAlign: 'center',
        color: '#786A91',
        fontSize: 13,
        fontWeight: '600'
    },
    calendarCurrentDay : {
        color: '#1D0F35',
        fontSize: 13,
        fontWeight: '700'
    },
    calendarDateTextDescription: {
        textAlign: 'center',
        color: '#786A91',
        fontSize: 11,
        fontWeight: '400'
    },

    eventGrid: {
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: 'wrap',
        gap: 25
    },

    pagination: {
        flexDirection: "row",
        gap: 15
    },
    paginationPage: {
        color: '#18132C',
        fontSize: 14,
        fontWeight: '700'
    },
    paginationSelectedPage: {
        width: 20,
        height: 20,
        backgroundColor: '#3B285C',
        borderWidth: 1,
        borderRadius: 7,

        marginRight: -5
    },
    paginationSelectedText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '700',

        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    paginationText: {
        color: '#18132C',
        fontSize: 11,
        fontWeight: '700',

        marginTop: 'auto',
        marginBottom: 'auto',
    },
    button: {
        maxWidth: 170,
        flexDirection: 'row',
        backgroundColor: '#3B285C',
        borderRadius: 12,
        alignSelf: 'center',

        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 8,
        paddingBottom: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '500'
    }
});

export default styles