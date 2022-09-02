import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import {
    useSelector
} from 'react-redux';

import { cartStateData } from '../../store/modules/cart/reducer';

import {
    AntDesign
} from '@expo/vector-icons';

import styles from './style';

const Cart = () => {

    const cart = useSelector(cartStateData);

    return (
        <View
            style={styles.containerCart}
        >
            <TouchableOpacity
                onPress={() => cart.length ?
                    alert(`Seu carrinho contem ${cart.length} itens.`)
                    :
                    alert(`Seu carrinho esta vazio.`)
                }
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