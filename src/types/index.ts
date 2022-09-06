export interface IProduct {
  id: number;
  name: string;
  brand: string;
  image: string;
  price: number;
  inStock: boolean;
  amount: number;
  camera: string;
  screen: string;
  storage: string;
}

export interface ICart {
  cart: IProduct[]
}

export interface ICartState {
  cart: {
    cart: IProduct[]
  }
}