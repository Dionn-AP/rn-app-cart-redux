import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        position: 'relative',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EAEBED',
        paddingTop: 95,
        paddingHorizontal: 12
    },
    textTop: {
        color: '#244D61',
        fontSize: 26,
        fontWeight: 'bold',
        letterSpacing: 8,
        marginBottom: 15
    },
    card: {
        backgroundColor: '#5689C0',
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
        color: '#EAEBED',
        fontSize: 20,
        fontWeight: 'bold'
    },
    brandctName: {
        color: '#EAEBED',
        fontSize: 14
    },
    price: {
        color: '#EAEBED',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12
    },
    addCart: {
        color: '#EAEBED',
        backgroundColor: '#75E2FF',
        borderRadius: 5,
        alignItems: 'center',
        padding: 5,
        marginBottom: 7
    },
    removeCart: {
        backgroundColor: '#EAEBED',
        borderWidth: 2,
        borderColor: '#EAEBED',
        borderRadius: 5,
        alignItems: 'center',
        padding: 3
    },
    textButtonAdd: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    textButtonRemove: {
        color: '#5689C0',
        fontWeight: 'bold',
    },
    imageCart: {
        borderColor: 'black',
        borderWidth: 2,
        backgroundColor: 'grey'
    },
    modalDetail: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        position: 'relative',
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },
    intoModalDetail: {
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        position: 'relative',
        backgroundColor: '#EAEBED',
        borderRadius: 15,
        borderColor: '#75E2FF',
        borderWidth: 4,
        height: 450,
        width: 370
    },
    textDetails: {
        color: '#5689C0',
        fontSize: 16,
        marginTop: 3,
        textAlign: 'center'
    },
    containerImageModalDetail: {
        height: '55%',
        marginBottom: 10
    },
    imageModalDetail: {
        height: 250,
        width: 250
    },
    infoModalDetail: {
        height: '35%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    btnCloseModaldetail: {
        position: 'absolute',
        top: 7.6,
        right: 24
    }
});