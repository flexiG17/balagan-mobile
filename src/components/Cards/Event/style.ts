import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    block: {
        width: 160,
        height: 200,
        borderRadius: 12,
        borderColor: '#D1CCF1',
        backgroundColor: '#D1CCF1',
    },
    top: {
        borderTopStartRadius: 12,
        borderTopEndRadius: 12,
        borderColor: '#D1CCF1',
        height: '65%',

        padding: 10
    },
    bottom: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '99%',
        height: '34.6%',
        backgroundColor: '#fff',
        borderBottomStartRadius: 11,
        borderBottomEndRadius: 11,

        display: "flex",
        gap: 5,
        paddingTop: 5,
        paddingLeft: 9,
        paddingBottom: 6
    },
    icons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    price: {
        alignSelf: 'center',
        height: 18,
        backgroundColor: '#3B285C',
        borderRadius: 20,
        paddingTop: 2.5,
        paddingBottom: 3,
        paddingLeft: 9,
        paddingRight: 8
    },
    text: {
        color: '#fff',
        fontSize: 9,
        fontWeight: '800'
    },
    title: {
        fontSize: 14,
        fontWeight: '800'
    },
    iconWithText: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,

        marginTop: 'auto',
        marginBottom: 'auto',
    },
    descriptionText: {
        fontSize: 9,
        fontWeight: '300'
    },
    markerIcon: {
        marginLeft: 2,
        marginRight: 2
    }
})

export default styles