export type CategoryIds = 'hoodies' | 'tshirts'
export type SizeName = 'XXS' | 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL'

type Item = {
  id: string
  name: string
  brand: string
  category: CategoryIds
  type: 'men' | 'women' | 'kids' | 'babies'
  sizes: { name: SizeName; inStock: boolean }[]
  price: number
  rating: number
  reviewCount: number
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
      sizes: [
        { name: 'XXS', inStock: true },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: false },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: 'XXL', inStock: true },
        { name: 'XXXL', inStock: false },
      ],
      price: 30000,
      rating: 4.2,
      reviewCount: 102,
      colors: ['turquoise', 'black', 'white'],
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
      sizes: [
        { name: 'XXS', inStock: false },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: 'XXL', inStock: true },
        { name: 'XXXL', inStock: false },
      ],
      price: 25000,
      rating: 4.6,
      reviewCount: 29,
      colors: ['black', 'brown'],
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
      sizes: [
        { name: 'XXS', inStock: true },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: 'XXL', inStock: true },
        { name: 'XXXL', inStock: false },
      ],
      price: 35000,
      rating: 2.0,
      reviewCount: 5,
      colors: ['purple', 'pink', 'white'],
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
      sizes: [
        { name: 'XXS', inStock: true },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: 'XXL', inStock: true },
        { name: 'XXXL', inStock: false },
      ],
      price: 89000,
      rating: 3.0,
      reviewCount: 4,
      colors: ['purple', 'pink', 'white'],
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
      sizes: [
        { name: 'XXS', inStock: true },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: 'XXL', inStock: true },
        { name: 'XXXL', inStock: false },
      ],
      price: 9000,
      rating: 2.5,
      reviewCount: 20,
      colors: ['gray'],
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
      sizes: [
        { name: 'XXS', inStock: true },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: 'XXL', inStock: true },
        { name: 'XXXL', inStock: false },
      ],
      price: 10000,
      rating: 3.9,
      reviewCount: 117,
      colors: ['white'],
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
      sizes: [
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: false },
        { name: 'XL', inStock: true },
        { name: 'XXL', inStock: true },
      ],
      price: 12000,
      rating: 3.6,
      reviewCount: 7,
      colors: ['green', 'beige'],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      imgUrl:
        'https://lp2.hm.com/hmgoepprod?set=source[/2a/3d/2a3d11c51f735ca7b92bd597f80d9ca3cba060be.jpg],origin[dam],category[],type[LOOKBOOK],res[w],hmver[1]&call=url[file:/product/main]',
      url: 'https://www2.hm.com/en_us/productpage.0684021150.html',
    },
  ],
}
