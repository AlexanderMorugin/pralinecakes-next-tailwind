// 'use client';

import { DashboardContent } from '@/components/shared/dashboard-content';
import { prisma } from '@/prisma/prisma-client';

// import { Container, Title } from '@/components/shared';
// import { OrdersForm } from '@/components/shared/orders-form';

// import { useOrderStore } from '@/store/order';

// import { useEffect } from 'react';

export default async function DashboardPage() {
  const orders = await prisma.order.findMany({
    orderBy: {
      id: 'desc',
    },
  });

  console.log(orders)

return <DashboardContent orders={orders}/>
  // const getOrders = useOrderStore((state) => state.getOrders);

  // const orderStatus = order.map((item) => item.status);

  // useEffect(() => {
  //   getOrders();
  // }, [getOrders]);

  // const order = useOrderStore((state) => state.order);
  // useEffect(() => {
  //   if (status) {
  //     getOrders();
  //     console.log('useEffect второй ', status);
  //   }
  // }, [status]);

  // console.log('orderStatus - ', orderStatus);
  // console.log('status - ', status);

  // return (
  //   <Container className='py-5 md:py-10'>
  //     <Title
  //       text='Панель кондитерской'
  //       className='font-extrabold mb-4 text-[18px] text-center md:text-left md:mb-8 md:text-[26px]'
  //     />
  //     <ul className='flex flex-col gap-4 px-2'>
  //       {order &&
  //         order.map((item) => (
  //           <OrdersForm
  //             key={item.id}
  //             id={item.id}
  //             token={item.token}
  //             firstName={item.firstName}
  //             lastName={item.lastName}
  //             email={item.email}
  //             address={item.address}
  //             phone={item.phone}
  //             items={item.items}
  //             createdAt={item.createdAt}
  //             totalAmount={item.totalAmount}
  //             comments={item.comments}
  //             status={item.status}
  //             // handleChangeStatus={handleChangeStatus}
  //           />
  //         ))}
  //     </ul>
  //   </Container>
  // );
}
