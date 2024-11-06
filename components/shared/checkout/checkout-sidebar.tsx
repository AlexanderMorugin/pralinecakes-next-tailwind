import { type FC } from 'react';
import { ArrowRight, Package, Percent, Truck } from 'lucide-react';
import { CheckoutItemDetails, WhiteBlock } from '..';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui';

const VAT = 15;
const DELIVERY_PRICE = 350;

interface Props {
  totalAmount: number;
  loading?: boolean;
}

export const CheckoutSidebar: FC<Props> = ({ totalAmount, loading }) => {
  const vatPrice = (totalAmount * VAT) / 100;
  const totalPrice = totalAmount + vatPrice + DELIVERY_PRICE;

  return (
    <div className='flex-1 mb-5 md:w-2/5'>
      <WhiteBlock className='md:p-6 sticky top-4'>
        <div className='flex flex-col gap-1'>
          <span className='text-[18px] font-bold'>Итого:</span>
          {loading ? (
            <Skeleton className='w-full h-11 rounded-[6px]' />
          ) : (
            <span className='h-11 text-[32px] font-extrabold'>
              {totalPrice} р
            </span>
          )}
        </div>

        <CheckoutItemDetails
          title={
            <div className='flex items-center text-base'>
              <Package size={16} className='mr-2 text-gray-400' />
              Стоимость товаров:
            </div>
          }
          value={
            loading ? (
              <Skeleton className='w-16 h-6 rounded-[6px]' />
            ) : (
              `${totalAmount} р`
            )
          }
        />
        <CheckoutItemDetails
          title={
            <div className='flex items-center text-base'>
              <Percent size={16} className='mr-2 text-gray-400' />
              Налоги:
            </div>
          }
          value={
            loading ? (
              <Skeleton className='w-16 h-6 rounded-[6px]' />
            ) : (
              `${vatPrice} р`
            )
          }
        />
        <CheckoutItemDetails
          title={
            <div className='flex items-center text-base'>
              <Truck size={16} className='mr-2 text-gray-400' />
              Доставка:
            </div>
          }
          value={
            loading ? (
              <Skeleton className='w-16 h-6 rounded-[6px]' />
            ) : (
              `${DELIVERY_PRICE} р`
            )
          }
        />

        <Button
          loading={loading}
          type='submit'
          className='w-full h-14 rounded-2xl mt-6 text-base font-bold'
        >
          Перейти к оплате
          <ArrowRight className='w-5 ml-2' />
        </Button>
      </WhiteBlock>
    </div>
  );
};
