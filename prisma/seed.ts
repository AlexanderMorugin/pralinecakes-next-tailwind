import { hashSync } from 'bcrypt';
import { prisma } from './prisma-client';
import { categories } from './categories';
import { products } from './products';

async function up() {
  await prisma.user.createMany({
    data: [
      {
        // fullName: 'User Test',
        firstName: 'User',
        lastName: 'Userov',
        phone: '+79261564879',
        email: 'user@mail.ru',
        password: hashSync('123', 10),
        verified: new Date(),
        role: 'USER',
      },
      {
        // fullName: 'Admin Test',
        firstName: 'Admin',
        lastName: 'Adminov',
        phone: '+79261564879',
        email: 'admin@mail.ru',
        password: hashSync('123', 10),
        verified: new Date(),
        role: 'ADMIN',
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.product.createMany({
    data: products,
  });

  await prisma.cart.createMany({
    data: [
      { userId: 1, totalAmount: 0, token: '111' },
      { userId: 2, totalAmount: 0, token: '222' },
    ],
  });

  await prisma.cartItem.create({
    data: {
      productId: 4,
      cartId: 1,
      quantity: 3,
    },
  });

  await prisma.cartItem.create({
    data: {
      productId: 5,
      cartId: 1,
      quantity: 4,
    },
  });
}

//   await prisma.story.createMany({
//     data: [
//       {
//         previewImageUrl:
//           'https://cdn.inappstory.ru/story/xep/xzh/zmc/cr4gcw0aselwvf628pbmj3j/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=3101815496',
//       },
//       {
//         previewImageUrl:
//           'https://cdn.inappstory.ru/story/km2/9gf/jrn/sb7ls1yj9fe5bwvuwgym73e/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=3074015640',
//       },
//       {
//         previewImageUrl:
//           'https://cdn.inappstory.ru/story/quw/acz/zf5/zu37vankpngyccqvgzbohj1/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=1336215020',
//       },
//       {
//         previewImageUrl:
//           'https://cdn.inappstory.ru/story/7oc/5nf/ipn/oznceu2ywv82tdlnpwriyrq/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=38903958',
//       },
//       {
//         previewImageUrl:
//           'https://cdn.inappstory.ru/story/q0t/flg/0ph/xt67uw7kgqe9bag7spwkkyw/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=2941222737',
//       },
//       {
//         previewImageUrl:
//           'https://cdn.inappstory.ru/story/lza/rsp/2gc/xrar8zdspl4saq4uajmso38/custom_cover/logo-350x440.webp?k=IgAAAAAAAAAE&v=4207486284',
//       },
//     ],
//   });

//   await prisma.storyItem.createMany({
//     data: [
//       {
//         storyId: 1,
//         sourceUrl:
//           'https://cdn.inappstory.ru/file/dd/yj/sx/oqx9feuljibke3mknab7ilb35t.webp?k=IgAAAAAAAAAE',
//       },
//       {
//         storyId: 1,
//         sourceUrl:
//           'https://cdn.inappstory.ru/file/jv/sb/fh/io7c5zarojdm7eus0trn7czdet.webp?k=IgAAAAAAAAAE',
//       },
//       {
//         storyId: 1,
//         sourceUrl:
//           'https://cdn.inappstory.ru/file/ts/p9/vq/zktyxdxnjqbzufonxd8ffk44cb.webp?k=IgAAAAAAAAAE',
//       },
//       {
//         storyId: 1,
//         sourceUrl:
//           'https://cdn.inappstory.ru/file/ur/uq/le/9ufzwtpdjeekidqq04alfnxvu2.webp?k=IgAAAAAAAAAE',
//       },
//       {
//         storyId: 1,
//         sourceUrl:
//           'https://cdn.inappstory.ru/file/sy/vl/c7/uyqzmdojadcbw7o0a35ojxlcul.webp?k=IgAAAAAAAAAE',
//       },
//     ],
//   });
// }

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (error) {
    console.error(error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
