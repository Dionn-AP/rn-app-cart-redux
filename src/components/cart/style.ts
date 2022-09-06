import { StyleSheet } from "react-native";

export default StyleSheet.create({
    containerCart: {
        backgroundColor: '#75E2FF',
        borderColor: '#5689C0',
        borderWidth: 2,
        borderRadius: 50,
        padding: 7,
        position: 'absolute',
        right: 22,
        top: 34
    },
    countProductCart: {
        position: 'absolute',
        right: -4,
        bottom: -11
    },
    textCart: {
        color: '#000080',
        fontWeight: 'bold',
        fontSize: 21
    },
    containerModal: {
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 20,
        paddingHorizontal: 15,
        position: 'relative',
        height: '100%',
        width: '100%',
        backgroundColor: '#5689C0'
    },
    cardModal: {
        backgroundColor: '#EAEBED',
        marginBottom: 12,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 12
    },
    btnCloseModal: {
        position: 'absolute',
        top: 10,
        right: 16
    },
    containerImageProdctModal: {
        width: '40%'
    },
    imageProdctModal: {
        height: 100,
        width: 100
    },
    infoBoxModal: {
        alignItems: 'flex-end',
        width: '60%'
    },
    textProductNameModal: {
        color: '#244D61',
        fontSize: 18
    },
    textProductBrandModal: {
        color: '#5689C0',
        fontSize: 14,
        marginBottom: 12
    },
    textProductPriceModal: {
        color: '#244D61',
        fontSize: 16
    },
    containerAmoutItems: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: 'lightgrey',
        borderRadius: 10,
        padding: 5,
        width: 86,
        borderWidth: 1,
        borderColor: '#1E90FF'
    },
    containerTopTextMyCart: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textMyCart: {
        color: '#EAEBED',
        fontSize: 24,
        letterSpacing: 1,
        marginBottom: 32
    },
    textNothingModal: {
        color: '#FFFFFF',
        fontSize: 26,
        marginTop: 30,
        marginBottom: 70
    },
    footerModal: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        borderRadius: 5,
        padding: 8,
        backgroundColor: '#EAEBED',
        marginTop: 18
    }
});