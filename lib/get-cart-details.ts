import { CartDTO } from '@/services/dto/cart.dto';

export type CartStateItem = {
  id: number;
  quantity: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  disabled?: boolean;
};

interface ReturnProps {
  cartItems: CartStateItem[];
  totalAmount: number;
}

export const getCartDetails = (data: CartDTO): ReturnProps => {
  const cartItems = data.cartItems.map((item) => ({
    id: item.id,
    quantity: item.quantity,
    name: item.product.name,
    description: item.product.description,
    imageUrl: item.product.imageUrl,
    price: item.product.price * item.quantity,
    disabled: false,
  })) as CartStateItem[];

  return {
    totalAmount: data.totalAmount,
    cartItems,
  };
};
