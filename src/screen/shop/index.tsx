import "intl";
import "intl/locale-data/jsonp/pt-BR";

import {
    useState
} from 'react';

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
    AntDesign
} from '@expo/vector-icons';

import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    Modal
} from 'react-native';

import Cart from "../../components/cart";
import { products } from '../../constants';
import styles from "./style";

const Shop = () => {
    const [showCartModalDetails, setShowCartModalDetails] = useState(false);
    const [productDetail, setproductDetail] = useState<IProduct[] | any>();

    const dispatch = useDispatch();

    const addCartItems = (product: IProduct) => {
        dispatch(addNewItem(product))
    }

    const productDetailsCurrent = (detail: IProduct) => {
        setShowCartModalDetails(!showCartModalDetails);
        setproductDetail(detail);
    }

    return (
        <View
            style={styles.container}
        >
            <Cart />
            <Modal
                transparent={true}
                animationType='slide'
                visible={showCartModalDetails}
                onRequestClose={
                    () => setShowCartModalDetails(!showCartModalDetails)
                }
            >
                <View
                    style={styles.modalDetail}
                >
                    <TouchableOpacity
                        style={styles.btnCloseModaldetail}
                        onPress={() => setShowCartModalDetails(!showCartModalDetails)}
                    >
                        <AntDesign
                            name="closecircleo"
                            size={40}
                            color="#EAEBED"
                        />
                    </TouchableOpacity>
                    <View
                        style={styles.intoModalDetail}
                    >
                        <Text
                            style={[styles.brandctName, { color: '#5689C0', fontSize: 28 }]}
                        >{productDetail?.brand}</Text>
                        <View style={styles.containerImageModalDetail}>
                            <Image
                                source={{ uri: productDetail?.image }}
                                style={styles.imageModalDetail}
                            />
                        </View>
                        <View
                            style={styles.infoModalDetail}
                        >
                            <Text
                                style={[styles.productName, { color: '#5689C0' }]}
                            >{productDetail?.name}
                            </Text>
                            <Text
                                style={styles.textDetails}
                            >Câmera: {productDetail?.camera}
                            </Text>
                            <Text
                                style={styles.textDetails}
                            >Tela: {productDetail?.screen}
                            </Text>
                            <Text
                                style={styles.textDetails}
                            >{productDetail?.storage}
                            </Text>
                        </View>

                    </View>
                </View>
            </Modal>
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
                            >{item.name}
                            </Text>
                            <Text
                                style={styles.brandctName}
                            >{item.brand}
                            </Text>
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
                                >ADICIONAR
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.removeCart}
                                onPress={() => productDetailsCurrent(item)}
                            >
                                <Text
                                    style={styles.textButtonRemove}
                                >Detalhes
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default Shop;