import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        backgroundColor: 'lightgrey',
        marginBottom: 12,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: '10, 15'
    },
    image: {
        height: 100,
        width: 100
    },
    infoBox: {
        marginLeft: 15
    },
    productName: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    brandctName: {
        fontSize: 14
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    addCart: {
        color: '#fff',
        backgroundColor: 'red'
    },
    removeCart: {}
});