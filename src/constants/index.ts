import { IProduct } from '../types';

export const products: IProduct[] = [
    {
        id: 1,
        name: 'Iphone 13 Pro Max',
        brand: 'Apple',
        image: 'https://realcelulares.com.br/wp-content/uploads/2021/10/iphone-13-pro-azul-sierra-real.png.png',
        price: 9000,
        inStock: true,
        amount: 1,
        camera: 'Teleobjetiva, grande-angular e ultra-angular',
        screen: 'Tela OLED sem bordas',
        storage: '256 GB'
    },
    {
        id: 2,
        name: 'Motorola Moto G30',
        brand: 'Motorola',
        image: 'https://img.ibxk.com.br/2021/11/18/moto-g200-18172104093044.png',
        price: 1800,
        inStock: true,
        amount: 1,
        camera: '50 MP | Quad Pixel',
        screen: 'Tela OLED 6.4',
        storage: '128 GB'
    },
    {
        id: 3,
        name: 'Samsung Galaxy A73',
        brand: 'Samsung',
        image: 'https://images.samsung.com/is/image/samsung/p6pim/br/sm-a736bzagzto/gallery/br-galaxy-a73-5g-a736-sm-a736bzagzto-532080436?$650_519_PNG$',
        price: 2500,
        inStock: true,
        amount: 1,
        camera: '108MP + 12MP + 5MP + 5MP',
        screen: 'Super AMOLED Plus 6.7',
        storage: '128 GB'
    },
    {
        id: 4,
        name: 'Redmi Note 11',
        brand: 'Xiaomi',
        image: 'https://s2.glbimg.com/B-CQIxumcZfWZkXrndmzmVQMnqA=/0x0:1600x1600/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/0/z/31EGABQ2myi5I7bP5Clw/mi-11-2.png',
        price: 2000,
        inStock: true,
        amount: 1,
        camera: '50 MP + 8 MP + 2 MP + 2 MP',
        screen: 'AMOLED',
        storage: '128 GB'
    },
    {
        id: 5,
        name: 'Asus ROG Phone 5',
        brand: 'Asus',
        image: 'https://img.ibxk.com.br/2021/09/22/22165102491497.png',
        price: 5000,
        inStock: true,
        amount: 1,
        camera: '64MP',
        screen: 'AMOLED 6.7',
        storage: '256 GB'
    }
];