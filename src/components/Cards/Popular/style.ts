import {StyleSheet} from "react-native";


const styles = (backgroundColor : any) => StyleSheet.create({
    block: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        flexWrap: 'wrap'
    },
    container: {
        height: 100,
        backgroundColor: backgroundColor,
        borderRadius: 12,
        padding: 10,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bigContainer: {
        height: 100,
        backgroundColor: backgroundColor,
        borderRadius: 12,
        padding: 10,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '500',
    }
})

export default styles