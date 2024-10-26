import { Container, ProductList, Title, TopBar } from '@/components/shared';

const chocolate = [
  {
    id: 1,
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/cake-bavarskiy-s-new.a338c45b.jpeg',
    name: 'Наполеон',
    description:
      'Торт самый вкусный на свете, самый сладкий и самый просто шикарный.',
    price: 900,
  },
  {
    id: 2,
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/cake-bavarskiy-s-new.a338c45b.jpeg',
    name: 'Наполеон',
    description:
      'Торт самый вкусный на свете, самый сладкий и самый просто шикарный.',
    price: 900,
  },
  {
    id: 3,
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/cake-bavarskiy-s-new.a338c45b.jpeg',
    name: 'Наполеон',
    description:
      'Торт самый вкусный на свете, самый сладкий и самый просто шикарный.',
    price: 900,
  },
  {
    id: 4,
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/cake-bavarskiy-s-new.a338c45b.jpeg',
    name: 'Наполеон',
    description:
      'Торт самый вкусный на свете, самый сладкий и самый просто шикарный.',
    price: 900,
  },
];

const honey = [
  {
    id: 5,
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/cake-orekhoviy-s-new.574ad4c6.jpeg',
    name: 'Наполеон',
    description:
      'Торт самый вкусный на свете, самый сладкий и самый просто шикарный.',
    price: 900,
  },
  {
    id: 6,
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/cake-orekhoviy-s-new.574ad4c6.jpeg',
    name: 'Наполеон',
    description:
      'Торт самый вкусный на свете, самый сладкий и самый просто шикарный.',
    price: 900,
  },
  {
    id: 7,
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/cake-orekhoviy-s-new.574ad4c6.jpeg',
    name: 'Наполеон',
    description:
      'Торт самый вкусный на свете, самый сладкий и самый просто шикарный.',
    price: 900,
  },
  {
    id: 8,
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/cake-orekhoviy-s-new.574ad4c6.jpeg',
    name: 'Наполеон',
    description:
      'Торт самый вкусный на свете, самый сладкий и самый просто шикарный.',
    price: 900,
  },
];

const bisquit = [
  {
    id: 9,
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/cake-ptichie-moloko-s-new.47b2f897.jpeg',
    name: 'Наполеон',
    description:
      'Торт самый вкусный на свете, самый сладкий и самый просто шикарный.',
    price: 900,
  },
  {
    id: 10,
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/cake-ptichie-moloko-s-new.47b2f897.jpeg',
    name: 'Наполеон',
    description:
      'Торт самый вкусный на свете, самый сладкий и самый просто шикарный.',
    price: 900,
  },
  {
    id: 11,
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/cake-ptichie-moloko-s-new.47b2f897.jpeg',
    name: 'Наполеон',
    description:
      'Торт самый вкусный на свете, самый сладкий и самый просто шикарный.',
    price: 900,
  },
  {
    id: 12,
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/cake-ptichie-moloko-s-new.47b2f897.jpeg',
    name: 'Наполеон',
    description:
      'Торт самый вкусный на свете, самый сладкий и самый просто шикарный.',
    price: 900,
  },
];

const nut = [
  {
    id: 13,
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/cake-medoviy-s-new.47c69ab5.jpeg',
    name: 'Наполеон',
    description:
      'Торт самый вкусный на свете, самый сладкий и самый просто шикарный.',
    price: 900,
  },
  {
    id: 14,
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/cake-medoviy-s-new.47c69ab5.jpeg',
    name: 'Наполеон',
    description:
      'Торт самый вкусный на свете, самый сладкий и самый просто шикарный.',
    price: 900,
  },
  {
    id: 15,
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/cake-medoviy-s-new.47c69ab5.jpeg',
    name: 'Наполеон',
    description:
      'Торт самый вкусный на свете, самый сладкий и самый просто шикарный.',
    price: 900,
  },
  {
    id: 16,
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/cake-medoviy-s-new.47c69ab5.jpeg',
    name: 'Наполеон',
    description:
      'Торт самый вкусный на свете, самый сладкий и самый просто шикарный.',
    price: 900,
  },
];

const cream = [
  {
    id: 17,
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/cake-med-moloko-s-new.f09800fd.jpeg',
    name: 'Наполеон',
    description:
      'Торт самый вкусный на свете, самый сладкий и самый просто шикарный.',
    price: 900,
  },
  {
    id: 18,
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/cake-med-moloko-s-new.f09800fd.jpeg',
    name: 'Наполеон',
    description:
      'Торт самый вкусный на свете, самый сладкий и самый просто шикарный.',
    price: 900,
  },
  {
    id: 19,
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/cake-med-moloko-s-new.f09800fd.jpeg',
    name: 'Наполеон',
    description:
      'Торт самый вкусный на свете, самый сладкий и самый просто шикарный.',
    price: 900,
  },
  {
    id: 20,
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/cake-med-moloko-s-new.f09800fd.jpeg',
    name: 'Наполеон',
    description:
      'Торт самый вкусный на свете, самый сладкий и самый просто шикарный.',
    price: 900,
  },
];

const cheese = [
  {
    id: 21,
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/cake-lime-s-new.c68b8af7.jpeg',
    name: 'Наполеон',
    description:
      'Торт самый вкусный на свете, самый сладкий и самый просто шикарный.',
    price: 900,
  },
  {
    id: 22,
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/cake-lime-s-new.c68b8af7.jpeg',
    name: 'Наполеон',
    description:
      'Торт самый вкусный на свете, самый сладкий и самый просто шикарный.',
    price: 900,
  },
  {
    id: 23,
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/cake-lime-s-new.c68b8af7.jpeg',
    name: 'Наполеон',
    description:
      'Торт самый вкусный на свете, самый сладкий и самый просто шикарный.',
    price: 900,
  },
  {
    id: 24,
    imageUrl:
      'https://pralinecakes.ru/_next/static/media/cake-lime-s-new.c68b8af7.jpeg',
    name: 'Наполеон',
    description:
      'Торт самый вкусный на свете, самый сладкий и самый просто шикарный.',
    price: 900,
  },
];

export default function Home() {
  return (
    <>
      <Container className='mt-5'>
        <Title text='Торты' size='xl' className='font-bold' />
      </Container>
      <TopBar />
      <Container className='flex flex-col gap-8 mt-10 mb-5'>
        <ProductList title='Шоколадные' products={chocolate} categoryId={1} />
        <ProductList title='Медовые' products={honey} categoryId={2} />
        <ProductList title='Бисквитные' products={bisquit} categoryId={3} />
        <ProductList title='Ореховые' products={nut} categoryId={4} />
        <ProductList title='Кремовые' products={cream} categoryId={5} />
        <ProductList title='Сырные' products={cheese} categoryId={6} />
      </Container>
    </>
  );
}
