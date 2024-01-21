import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    searchBlock: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    search: {
        width: 320,
        height: 40,
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 20,
        borderColor: '#623EA0',
        fontSize: 15,
    },
    searchIcon: {
        marginLeft: 15,
        marginTop: "auto",
        marginBottom: "auto",
    },
})

export default styles