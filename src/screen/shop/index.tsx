import "intl";
import "intl/locale-data/jsonp/pt-BR";

import {
    View,
    Text,
    Image,
    Button,
    FlatList,
    ScrollView
} from 'react-native';

import { products } from '../../constants';
import styles from "./styles";

const Shop = () => {
    return (
        <View
            style={styles.container}
        >
            <ScrollView>
            {products?.map(item => (
                <View
                    key={item.id}
                    style={styles.card}
                >
                    <Image
                        source={{ uri: item.image }}
                        style={styles.image}
                    />
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

                        <Button
                            title='Adicionar'

                            onPress={() => alert('Adicionar')}
                        />
                            <Button
                            title='Remover'
                            onPress={() => alert('Remover')}
                        />

                    </View>
                </View>
            ))}
            </ScrollView>
        </View>
    )
}

export default Shop;