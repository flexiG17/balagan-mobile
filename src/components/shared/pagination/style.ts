import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
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
});

export default styles