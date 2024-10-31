export interface CartItemProps {
  id?: number;
  imageUrl: string;
  // details: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  disabled?: boolean;
}
