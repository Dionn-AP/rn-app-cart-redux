import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import {
    AntDesign
} from '@expo/vector-icons';

import styles from './style';

const Cart = () => {
    return (
        <View style={styles.containerCart}>
            <TouchableOpacity
                onPress={() => alert('Adicionar')}
            >
                <AntDesign
                    name="shoppingcart"
                    size={26}
                    color="white"
                />
            </TouchableOpacity>
            <View style={styles.countProductCart}>
                <Text style={styles.textCart}>0</Text>
            </View>
        </View>
    )
};

export default Cart;