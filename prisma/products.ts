export const products = [
  // Шоколадные
  {
    id: 1,
    name: 'Торт "Птичье молоко"',
    description:
      'Воздушное белоснежное суфле, приготовленное из сгущенного молока, сахара, сливочного масла, агар-агара (растительного желатина) и лимонной кислоты. Располагается десерт на нежном бисквите и сверху глазирован темным бельгийским горьким шоколадом.',
    price: 1376,
    // imageUrl:
    //   'https://pralinecakes.ru/_next/static/media/cake-ptichie-moloko-m-new.fe22f0c3.jpeg',

      imageUrl:  `${process.env.BASE_URL}/cake-ptichie-moloko-l-new.webp`,
    categoryId: 1,
  },
  {
    id: 2,
    name: 'Торт "Прага"',
    description:
      'Широко известное пирожное со времён СССР. Приготовлено из шоколадных бисквитных коржей в меру пропитанных сахарным сиропом и кремом, состоящего из сгущенного молока без растительных жиров и какао. Сверху десерт покрыт прослойкой из абрикосового джема и темного шоколада.',
    price: 1090,
    // imageUrl:
    //   'https://pralinecakes.ru/_next/static/media/cake-praga-m-new.e154745f.jpeg',

    imageUrl:  `${process.env.BASE_URL}/cake-praga-l-new.webp`,
    categoryId: 1,
  },
  {
    id: 3,
    name: 'Торт "Маковый"',
    description:
      'Пирожное из бисквита, отпечённого из пшеничной муки, масла и маковых зёрнышек. Коржи хорошо пропитаны сливочным кремом с добавлением яичных желтков и сахара. Сверху десерт покрыт темной зеркальной шоколадной глазурью и украшен капельками белого шоколада. Отмечено, что насыщенный вкус и аромат мака прекрасно сочетается с шоколадными нотками.',
    price: 1240,
    // imageUrl:
    //   'https://pralinecakes.ru/_next/static/media/cake-makoviy-m-new.a7d7cfcb.jpeg',

    imageUrl:  `${process.env.BASE_URL}/cake-makoviy-l-new.webp`,
    categoryId: 1,
  },
  {
    id: 4,
    name: 'Торт "Трюфельный"',
    description:
      'Сливочный мусс на основе темного шоколада, дополненный шоколадным бисквитом',
    price: 1080,
    // imageUrl:
    //   'https://pralinecakes.ru/_next/static/media/cake-trufelniy-m-new.287f7713.jpeg',

    imageUrl:  `${process.env.BASE_URL}/cake-trufelniy-l-new.webp`,
    categoryId: 1,
  },

  // Бисквитные
  {
    id: 5,
    name: 'Торт "Бархатный красный"',
    description:
      'Торт представляет собой довольно необычный десерт, состоящий из воздушного и мягкого бисквита красного цвета. Оригинальность данному изделию придает и белоснежный сливочный крем',
    price: 1160,
    // imageUrl:
    //   'https://pralinecakes.ru/_next/static/media/cake-barkhat-m-new.18887871.jpeg',

    imageUrl:  `${process.env.BASE_URL}/cake-barkhat-l-new.webp`,
    categoryId: 2,
  },
  {
    id: 6,
    name: 'Торт "Лимонный"',
    description:
      'Лимонный торт выполнен из трёх бисквитных коржей, между которыми выложен белоснежный творожно-сливочный нежный крем. Торт не рыхлый из-за малой пропитки коржей. Вкус торта очень яркий, сливочно-лимонный, освежающий и не слишком сладкий.',
    price: 1140,
    // imageUrl:
    //   'https://pralinecakes.ru/_next/static/media/cake-lemon-m-new.74869bd3.jpeg',

    imageUrl:  `${process.env.BASE_URL}/cake-lemon-l-new.webp`,
    categoryId: 2,
  },
  {
    id: 7,
    name: 'Торт "Мед и молоко"',
    description:
      'Яркий медовый торт, будоражащий самые притязательные вкусы сладкоежек. Очень и очень мягкий, нежный, бисквитно кремовый. Готовится из трех коржей оттенка молочного шоколада, сильно пропитанных мёдом и сдобренных воздушным сливочно-творожным кремом.',
    price: 940,
    // imageUrl:
    //   'https://pralinecakes.ru/_next/static/media/cake-med-moloko-m-new.2a2d19ca.jpeg',

    imageUrl:  `${process.env.BASE_URL}/cake-med-moloko-l-new.webp`,
    categoryId: 2,
  },
  {
    id: 8,
    name: 'Торт "Банановый"',
    description:
      'Вкусный фруктовый торт приготовлен из трех бисквитных коржей тёмного шоколадного цвета, прослоенных сливочным кремом с кусочками банана. Нижний корж сухой, не пропитанный и крепкий. Остальные коржи очень сочные и мягкие. Между нижним и средним коржами выложен белый нежный крем, поверх которого расположен банан. Между средним и верхним коржами используется другой крем. Он более вязкий и имеет цвет крем-брюле.',
    price: 1190,
    // imageUrl:
    //   'https://pralinecakes.ru/_next/static/media/cake-banana-m-new.ef129319.jpeg',

    imageUrl:  `${process.env.BASE_URL}/cake-banana-l-new.webp`,
    categoryId: 2,
  },

  // Ореховые
  {
    id: 9,
    name: 'Торт "Карамельно-Ореховый"',
    description:
      'Необыкновенно нежный и вкусный торт, приготовленный из трёх коржей шоколадного бисквита пропитанных мёдом. Коржи прослоены очень мягким творожно-сливочным кремом сбалансированным вареным сгущенным молоком. На нижний корж торта выкладывается чуть соленый арахис в окружении тягучей карамели. Данный торт является одним из лучших произведений нашей кондитерской! Настоятельно рекомендуем к покупке.',
    price: 900,
    // imageUrl:
    //   'https://pralinecakes.ru/_next/static/media/cake-orekhoviy-m-new.979a42b7.jpeg',

    imageUrl:  `${process.env.BASE_URL}/cake-orekhoviy-l-new.webp`,
    categoryId: 3,
  },
  {
    id: 10,
    name: 'Торт "Воздушно-ореховый"',
    description:
      'Слоенное тесто на основе сгущенного молока, пропитан кремом из сливочного сыра. Упакован в цветную картонную коробку с окошком',
    price: 1150,
    // imageUrl:
    //   'https://pralinecakes.ru/_next/static/media/cake-vozdushno-m-new.260d801c.jpeg',

    imageUrl:  `${process.env.BASE_URL}/cake-vozdushno-l-new.webp`,
    categoryId: 3,
  },
  {
    id: 11,
    name: 'Торт "Эстерхази"',
    description:
      'Весьма известный венгерский ореховый торт, приготовленный из нескольких песочных коржей с прослойкой из заварного крема, ореховой пасты и сгущенного молока. Сверху торт покрыт клубничным джемом собственного производства и глазурью из белого шоколада.',
    price: 1280,
    // imageUrl:
    //   'https://pralinecakes.ru/_next/static/media/cake-esterhazi-m-new.bb6c3570.jpeg',

    imageUrl:  `${process.env.BASE_URL}/cake-esterhazi-l-new.webp`,
    categoryId: 3,
  },
  {
    id: 12,
    name: 'Торт "Сметанник"',
    description:
      'Вкусный сметанный торт приготовлен из четырёх мягких бисквитов песочного цвета. Между сухими (не пропитанными) коржами выложен белый сливочно-сырный крем очень нежной ароматной консистенции. Торт наполнен большим количеством дробленых грецких орехов.',
    price: 1170,
    // imageUrl:
    //   'https://pralinecakes.ru/_next/static/media/cake-smetannik-m-new.b7a5280e.jpeg',

    imageUrl:  `${process.env.BASE_URL}/cake-smetannik-l-new.webp`,
    categoryId: 3,
  },

  // Кремовые
  {
    id: 13,
    name: 'Торт "Киевский"',
    description:
      'Известный торт приготовленный из нежных хрустящих ореховых коржей, которые выпекаются с добавлением муки, сахара и яичных белков. Эти коржи, подобные "Безе", прослоены немного тягучим сливочным кремом, приготовленным из сгущенного молока и орехов. Сверху торт украшен сахарной пудрой и грецкими орехами.',
    price: 940,
    // imageUrl:
    //   'https://pralinecakes.ru/_next/static/media/cake-kievskiy-m-new.7366e564.jpeg',

    imageUrl:  `${process.env.BASE_URL}/cake-kievskiy-l-new.webp`,
    categoryId: 4,
  },
  {
    id: 14,
    name: 'Торт "Наполеон"',
    description:
      'Изумительно нежный и мягкий торт из хрустящего слоеного теста и нежного сливочного крема. Пышный, сочный, тающий во рту. Состоит из четырех слоев теста и крема из яичных желтков, сыра "Маскарпоне", кондитерских густых сливок, с добавлением желатина, ванильного сахара и сливочного масла. Сверху торт украшен роскошной шапкой из крошки слоеного теста и сахарной пудры.',
    price: 1200,
    // imageUrl:
    //   'https://pralinecakes.ru/_next/static/media/cake-napoleon-m-new.e7508136.jpeg',

    imageUrl:  `${process.env.BASE_URL}/cake-napoleon-l-new.webp`,
    categoryId: 4,
  },
  {
    id: 15,
    name: 'Торт "Медовый"',
    description:
      'Из нежных песочных коржей пропитанных медом и легким ванильным кремом',
    price: 1070,
    // imageUrl:
    //   'https://pralinecakes.ru/_next/static/media/cake-medoviy-m-new.ecea3c7f.jpeg',

    imageUrl:  `${process.env.BASE_URL}/cake-medoviy-l-new.webp`,
    categoryId: 4,
  },
  {
    id: 16,
    name: 'Торт "Миндаль чернослив"',
    description:
      'Торт состоит из двух коржей, выпеченных их пшеничной и миндальной муки. В начинке, расположенной между коржами, открывается необычное сочетание миндаля с черносливом и грецким орехом совместно с нежным сливочным кремом, что придает торту незабываемый вкус.',
    price: 1160,
    // imageUrl:
    //   'https://pralinecakes.ru/_next/static/media/cake-mindal-m-new.00550606.jpeg',

    imageUrl:  `${process.env.BASE_URL}/cake-mindal-l-new.webp`,
    categoryId: 4,
  },

  // Сырные
  {
    id: 17,
    name: 'Торт "Чизкейк"',
    description:
      'Классический рецепт. Испечен из нежного творожного сыра, на тонком слое бисквита',
    price: 1250,
    // imageUrl:
    //   'https://pralinecakes.ru/_next/static/media/cake-cheescake-m-new.0e5af8b0.jpeg',

    imageUrl:  `${process.env.BASE_URL}/cake-cheescake-l-new.webp`,
    categoryId: 5,
  },
  {
    id: 18,
    name: 'Торт "Черничный"',
    description:
      'Пирожное из черничного мусса на песочном ложе. Основа готовится из свежемороженных ягод, белого шоколада, густых сливок, сахара и желатина. Корж отпекается из пшеничной и миндальной муки, с добавлением мёда и сливочного масла. Сверху десерт украшен нейтральным кондитерским гелем.',
    price: 1220,
    // imageUrl:
    //   'https://pralinecakes.ru/_next/static/media/cake-chernichniy-m-new.c80d3743.jpeg',

    imageUrl:  `${process.env.BASE_URL}/cake-chernichniy-l-new.webp`,
    categoryId: 5,
  },
  {
    id: 19,
    name: 'Торт "Морковный"',
    description:
      'Торт с едва уловимым вкусом моркови, с добавлением грецкого ореха, изюма, творожного сыра и корицы',
    price: 1180,
    // imageUrl:
    //   'https://pralinecakes.ru/_next/static/media/cake-morkovniy-m-new.1f34ec3a.jpeg',

    imageUrl:  `${process.env.BASE_URL}/cake-morkovniy-l-new.webp`,
    categoryId: 5,
  },
  {
    id: 20,
    name: 'Торт "Чизкейк лайм"',
    description:
      'Очень нежный торт, приготовленный из легкого фруктово-сливочного мусса расположенного на основании из песочно-медового коржа. Элегантный, тающий во рту, возбуждающий своим вкусом, способен понравится любителям не слишком сладких и вязких десертов.',
    price: 1260,
    // imageUrl:
    //   'https://pralinecakes.ru/_next/static/media/cake-lime-m-new.113aa230.jpeg',

    imageUrl:  `${process.env.BASE_URL}/cake-lime-l-new.webp`,
    categoryId: 5,
  },
];
