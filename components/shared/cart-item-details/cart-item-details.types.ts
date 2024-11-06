export interface CartItemProps {
  id?: number;
  imageUrl: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  disabled?: boolean;
}
