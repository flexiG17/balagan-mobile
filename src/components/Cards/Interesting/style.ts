import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    block: {
        width: '100%',
        height: 110,
        backgroundColor: '#D1CCF1',
        borderRadius: 12,
        overflow: 'hidden',

        display: "flex",
        flexDirection: 'row',
    },
    leftBlock: {
        width: 110,
        height: '100%',
        backgroundColor: '#fff',
        borderTopStartRadius: 12,
        borderBottomStartRadius: 12,

        display: 'flex',
        justifyContent: 'space-between',
        padding: 12,
    },
    titleBlock: {
        gap: 5,
    },
    title: {
        color: '#3B285C',
        fontSize: 12,
        fontWeight: '700',
        letterSpacing: 0.8
    },
    description: {
        fontSize: 8,
        fontWeight: '400'
    },
    rightBlock: {
        display: "flex",
        marginLeft: "auto",
        marginTop: 'auto',

        paddingRight: 11,
        paddingBottom: 8
    },
    image: {
        width: 250
    },
    price: {
        width: 80,
        height: 20,
        backgroundColor: '#3B285CB8',
        borderRadius: 30,
    },
    priceText: {
        marginTop: 'auto',
        marginBottom: 'auto',
        color: '#fff',
        fontSize: 10,
        fontWeight: '700',
        textAlign: 'center'
    }
})

export default styles