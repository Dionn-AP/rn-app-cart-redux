import "intl";
import "intl/locale-data/jsonp/pt-BR";

import {
    useDispatch
} from 'react-redux';

import {
    addNewItem
} from '../../store/modules/cart/reducer';

import {
    IProduct
} from '../../types/index';

import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    ScrollView
} from 'react-native';

import Cart from "../../components/cart";
import { products } from '../../constants';
import styles from "./style";

const Shop = () => {

    const dispatch = useDispatch();

    const addCartItems = (product: IProduct) => {
        dispatch(addNewItem(product))
    }

    return (
        <View
            style={styles.container}
        >
            <Cart />
            <View>
                <Text
                    style={styles.textTop}
                >PHONE  STORE</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {products?.map(item => (
                    <View
                        key={item.id}
                        style={styles.card}
                    >
                        <View style={styles.containerImage}>
                            <Image
                                source={{ uri: item.image }}
                                style={styles.image}
                            />
                        </View>

                        <View
                            style={styles.infoBox}
                        >
                            <Text
                                style={styles.productName}
                            >{item.name}</Text>
                            <Text
                                style={styles.brandctName}
                            >{item.brand}</Text>
                            <Text
                                style={styles.price}
                            >
                                {Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(item.price)}
                            </Text>

                            <TouchableOpacity
                                style={styles.addCart}
                                onPress={() => addCartItems(item)}>
                                <Text
                                    style={styles.textButtonAdd}
                                >ADICIONAR</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.removeCart}
                                onPress={() => alert('Deseja remover?')}>
                                <Text
                                    style={styles.textButtonRemove}
                                >REMOVER</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default Shop;