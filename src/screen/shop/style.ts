import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        position: 'relative',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0FFF0',
        paddingTop: 85,
        paddingHorizontal: 12
    },
    textTop: {
        color: '#000080',
        fontSize: 26,
        fontWeight: 'bold',
        letterSpacing: 5,
        marginBottom: 15
    },
    card: {
        backgroundColor: '#B0E0E6',
        marginBottom: 12,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 10,
        marginTop: 15,
        paddingVertical: 12,
        paddingHorizontal: 10
    },
    containerImage: {
        width: '40%'

    },
    image: {
        height: 120,
        width: 120
    },
    infoBox: {
        width: '60%'
    },
    productName: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    brandctName: {
        fontSize: 14
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12
    },
    addCart: {
        color: '#ffffff',
        backgroundColor: '#00BFFF',
        borderRadius: 5,
        alignItems: 'center',
        padding: 3,
        marginBottom: 7
    },
    removeCart: {
        color: '#fff',
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: '#00BFFF',
        borderRadius: 5,
        alignItems: 'center',
        padding: 3
    },
    textButtonAdd: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    textButtonRemove: {
        color: '#87CEEB',
        fontWeight: 'bold',
    },
    imageCart: {
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: 'grey'
    }
});