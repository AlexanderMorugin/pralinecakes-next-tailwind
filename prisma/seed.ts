import { hashSync } from 'bcrypt';
import { prisma } from './prisma-client';
import { categories } from './categories';
import { products } from './products';

async function up() {
  await prisma.user.createMany({
    data: [
      {
        firstName: 'User',
        lastName: 'Userov',
        phone: '+79261564879',
        email: 'user@mail.ru',
        password: hashSync('123', 10),
        role: 'USER',
      },
      {
        firstName: 'Admin',
        lastName: 'Adminov',
        phone: '+79261564879',
        email: 'admin@mail.ru',
        password: hashSync('123', 10),
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
}

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
