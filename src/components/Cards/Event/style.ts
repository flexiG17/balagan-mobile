import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    block: {
        width: 165,
        height: 200,
        borderRadius: 12,
        borderColor: '#D1CCF1',
        backgroundColor: '#D1CCF1',
        overflow: 'hidden'
    },
    image: {
        width: 'auto',
        height: 'auto',
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
        paddingRight: 9,
        paddingBottom: 6
    },
    icons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    price: {
        alignSelf: 'center',
        marginRight: 'auto',

        height: 18,
        backgroundColor: '#3B285C',
        borderRadius: 20,
        paddingTop: 2.5,
        paddingBottom: 2,
        paddingLeft: 7,
        paddingRight: 7
    },
    editData: {
        gap: 7,
    },
    editDataBlock: {
        alignSelf: 'center',
        borderRadius: 20,
        paddingLeft: 7,
        paddingRight: 7,
        paddingTop: 2,
        paddingBottom: 2,
    },
    editDataText: {
        fontSize: 8,
        fontWeight: '500'
    },
    text: {
        color: '#fff',
        fontSize: 9,
        fontWeight: '800'
    },
    title: {
        fontSize: 14,
        fontWeight: '800',

        overflow: 'hidden',

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