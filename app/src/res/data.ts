export type CategoryIds = 'hoodies' | 'tshirts'
export type Sizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL'

type Item = {
  id: string
  name: string
  brand: string
  category: CategoryIds
  type: 'men' | 'women' | 'kids' | 'babies'
  sizes: Sizes[]
  price: number
  quantity: number
  colors: string[]
  description: string
  imgUrl: string
  url: string
}

module.exports = {
  categories: <{ id: CategoryIds; name: string }[]>[
    {
      id: 'hoodies',
      name: 'Hoodies',
    },
    {
      id: 'tshirts',
      name: 'T-shirts',
    },
    ,
  ],
  products: <Item[]>[
    {
      id: 'relaxed-fit-hoodie-0',
      name: 'Relaxed-fit Hoodie',
      brand: 'H&M',
      category: 'hoodies',
      type: 'men',
      sizes: ['S', 'M', 'L', 'XL'],
      price: 30000,
      quantity: 10,
      colors: ['Turquoise', 'Black', 'White'],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      imgUrl:
        'https://lp2.hm.com/hmgoepprod?set=source[/8e/84/8e844b68bda70cd91762a7b1e83e8091436cc63d.jpg],origin[dam],category[],type[LOOKBOOK],res[w],hmver[1]&call=url[file:/product/main]',
      url: 'https://www2.hm.com/en_us/productpage.0970819019.html',
    },
    {
      id: 'regular-fit-hoodie-0',
      name: 'Regular Fit Hoodie',
      brand: 'H&M',
      category: 'hoodies',
      type: 'men',
      sizes: ['S', 'M', 'L', 'XL'],
      price: 25000,
      quantity: 10,
      colors: ['Black', 'Brown'],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      imgUrl:
        'https://lp2.hm.com/hmgoepprod?set=source[/a2/4c/a24ccf6fa3f58a3f9e37d0ac138af4278067f9a1.jpg],origin[dam],category[],type[LOOKBOOK],res[w],hmver[1]&call=url[file:/product/main]',
      url: 'https://www2.hm.com/en_us/productpage.1010387004.html',
    },
    {
      id: 'simpsons-regular-fit-hoodie-0',
      name: 'Simpsons Regular Fit Hoodie',
      brand: 'H&M',
      category: 'hoodies',
      type: 'men',
      sizes: ['S', 'M', 'L', 'XL'],
      price: 35000,
      quantity: 10,
      colors: ['Purple', 'Pink', 'White'],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      imgUrl:
        'https://lp2.hm.com/hmgoepprod?set=source[/58/61/5861ba00223582ce344bf7febefabdd157a80a5f.jpg],origin[dam],category[],type[LOOKBOOK],res[w],hmver[1]&call=url[file:/product/main]',
      url: 'https://www2.hm.com/en_us/productpage.0846933078.html',
    },
    {
      id: 'tie-dye-print-sweatshirt-0',
      name: 'TIE-DYE PRINT SWEATSHIRT',
      brand: 'Zara',
      category: 'hoodies',
      type: 'men',
      sizes: ['S', 'M', 'L', 'XL'],
      price: 89000,
      quantity: 10,
      colors: ['Purple', 'Pink', 'White'],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      imgUrl:
        'https://static.zara.net/photos///2021/I/0/2/p/0840/302/609/2/w/608/0840302609_2_4_1.jpg?ts=1628241476608',
      url: 'https://www.zara.com/kr/en/tie-dye-print-sweatshirt-p00840302.html',
    },
    {
      id: '2-pack-long-fit-tshirt-0',
      name: '2-pack Long Fit T-shirt',
      brand: 'H&M',
      category: 'tshirts',
      type: 'men',
      sizes: ['S', 'M', 'L', 'XL'],
      price: 9000,
      quantity: 10,
      colors: ['Gray'],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      imgUrl:
        'https://lp2.hm.com/hmgoepprod?set=source[/45/b7/45b77ab57a7dbf0578b26d36f8c2258e0762dda6.jpg],origin[dam],category[],type[LOOKBOOK],res[w],hmver[1]&call=url[file:/product/main]',
      url: 'https://www2.hm.com/en_us/productpage.0945202006.html',
    },
    {
      id: 'long-sleeved-regular-ft-shirt-0',
      name: 'Long-sleeved Regular Ft Shirt',
      brand: 'H&M',
      category: 'tshirts',
      type: 'men',
      sizes: ['S', 'M', 'L', 'XL'],
      price: 10000,
      quantity: 10,
      colors: ['White'],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      imgUrl:
        'https://lp2.hm.com/hmgoepprod?set=source[/e6/0f/e60f46701320cc38ac76dbb48c62ee3acc7f54cc.jpg],origin[dam],category[men_tshirtstanks_longsleeve],type[DESCRIPTIVESTILLLIFE],res[w],hmver[1]&call=url[file:/product/main]',
      url: 'https://www2.hm.com/en_us/productpage.0596400008.html',
    },
    {
      id: 'printed-t-shirt-0',
      name: 'Printed T-shirt',
      brand: 'H&M',
      category: 'tshirts',
      type: 'men',
      sizes: ['S', 'M', 'L', 'XL'],
      price: 12000,
      quantity: 10,
      colors: ['green', 'beige'],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      imgUrl:
        'https://lp2.hm.com/hmgoepprod?set=source[/2a/3d/2a3d11c51f735ca7b92bd597f80d9ca3cba060be.jpg],origin[dam],category[],type[LOOKBOOK],res[w],hmver[1]&call=url[file:/product/main]',
      url: 'https://www2.hm.com/en_us/productpage.0684021150.html',
    },
  ],
}
