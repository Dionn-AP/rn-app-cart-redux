import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Modal,
    Image
} from 'react-native';

import {
    useDispatch
} from 'react-redux';

import {
    addNewItem,
    removeItems
} from '../../store/modules/cart/reducer';

import {
    IProduct
} from '../../types/index';

import {
    useState
} from 'react';

import {
    useSelector
} from 'react-redux';

import { cartStateData } from '../../store/modules/cart/reducer';

import {
    AntDesign,
    Entypo
} from '@expo/vector-icons';

import styles from './style';

const Cart = (props: any) => {

    const addCartItems = (product: IProduct) => {
        dispatch(addNewItem(product))
    }

    let totalPrice: number = 0;

    const [showCartModal, setShowCartModal] = useState(false);

    const cart = useSelector(cartStateData);

    for (const item of cart) {
        totalPrice += item.price * item.amount
    }

    const dispatch = useDispatch();

    const removeCartItems = (product: IProduct) => {
        dispatch(removeItems(product))
    }

    return (
        <View
            style={styles.containerCart}
        >
            <Modal
                style={{ height: '100%' }}
                animationType='fade'
                visible={showCartModal}
                onRequestClose={
                    () => setShowCartModal(!showCartModal)
                }
            >
                <View
                    style={styles.containerModal}
                >
                    <TouchableOpacity
                        style={styles.btnCloseModal}
                        onPress={() => setShowCartModal(!showCartModal)}
                    >
                        <AntDesign
                            name="closecircleo"
                            size={32}
                            color="#EAEBED"
                        />
                    </TouchableOpacity>
                    {
                        cart.length > 0 ? (
                            <ScrollView>
                                <View
                                    style={styles.containerTopTextMyCart}
                                >
                                    <Text
                                        style={styles.textMyCart}
                                    >
                                        MEU CARRINHO
                                    </Text>
                                </View>
                                <View>
                                    {cart.map((item, index) => (
                                        <View
                                            key={index}
                                            style={styles.cardModal}
                                        >
                                            <View
                                                style={styles.containerImageProdctModal}
                                            >
                                                <Image
                                                    source={{ uri: item.image }}
                                                    style={styles.imageProdctModal}
                                                />
                                            </View>
                                            <View
                                                style={styles.infoBoxModal}
                                            >
                                                <Text
                                                    style={styles.textProductNameModal}
                                                >
                                                    {item.name}
                                                </Text>
                                                <Text
                                                    style={styles.textProductBrandModal}
                                                >
                                                    {item.brand}
                                                </Text>
                                                <Text
                                                    style={styles.textProductPriceModal}
                                                >
                                                    {Intl.NumberFormat('pt-BR', {
                                                        style: 'currency',
                                                        currency: 'BRL'
                                                    }).format(item.price)}
                                                </Text>
                                                <View
                                                    style={styles.containerAmoutItems}
                                                >
                                                    <TouchableOpacity
                                                        onPress={() => removeCartItems(item)}
                                                    >
                                                        <Entypo
                                                            name="circle-with-minus"
                                                            size={24}
                                                            color="#CD5C5C"
                                                        />
                                                    </TouchableOpacity>
                                                    <Text
                                                        style={{ fontSize: 15, fontWeight: 'bold' }}
                                                    >
                                                        {item.amount}
                                                    </Text>
                                                    <TouchableOpacity
                                                        onPress={() => addCartItems(item)}
                                                    >
                                                        <Entypo
                                                            name="circle-with-plus"
                                                            size={24}
                                                            color="#244D61"
                                                        />
                                                    </TouchableOpacity>

                                                </View>
                                            </View>

                                        </View>
                                    ))}
                                </View>
                            </ScrollView>
                        ) : (
                            <ScrollView>
                                <View
                                    style={{ alignItems: 'center' }}
                                >
                                    <Text
                                        style={styles.textNothingModal}
                                    >
                                        Não há itens no carrinho!
                                    </Text>
                                    <AntDesign
                                        name="frowno"
                                        size={90}
                                        color="white"
                                    />
                                </View>
                            </ScrollView>
                        )
                    }
                    <View
                        style={styles.footerModal}
                    >
                        <Text
                            style={{ fontSize: 16, fontWeight: 'bold' }}
                        >Total:</Text>
                        <Text
                            style={
                                [
                                    styles.textProductPriceModal,
                                    { fontWeight: 'bold' }
                                ]
                            }
                        >
                            {Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(totalPrice)}
                        </Text>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity
                onPress={() => setShowCartModal(!showCartModal)}
            >
                <AntDesign
                    name="shoppingcart"
                    size={26}
                    color="white"
                />
            </TouchableOpacity>
            <View
                style={styles.countProductCart}
            >
                <Text
                    style={styles.textCart}
                >
                    {cart.length}
                </Text>
            </View>
        </View>
    )
};

export default Cart;