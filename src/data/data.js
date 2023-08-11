import img1 from '../images/category1.png'
import img2 from '../images/category2.png'
import img3 from '../images/category3.png'
import img4 from '../images/category4.png'
import product_img1 from '../images/path-to-image-1.png'
import product_img2 from '../images/path-to-image-2.png'
import product_img3 from '../images/path-to-image-3.png'
import product_img4 from '../images/path-to-image-4.png'
import product_img5 from '../images/path-to-image-5.png'
import product_img6 from '../images/path-to-image-6.png'
import product_img7 from '../images/path-to-image-7.png'
import product_img8 from '../images/path-to-image-8.png'



export const data_nav = [
  {
    id: 1,
    text: "Home",
    path: ''
  },

  {
    id: 2,
    text: "About",
    path: 'about'
  },
  {
    id: 3,
    text: "Pages",
    path: 'pages'
  },
  {
    id: 4,
    text: "Shop",
    path: 'shop'
  },
  {
    id: 5,
    text: "Projects",
    path: 'projects'
  },
  {
    id: 6,
    text: "News",
    path: 'news'
  }
];
export const category = [
  {
    id: 1,
    text: 'Vegetable',
    img: img1
  },
  {
    id: 2,
    text: 'food',
    img: img2
  },
  {
    id: 3,
    text: 'Vegetable',
    img: img3
  },
  {
    id: 4,
    text: 'food',
    img: img4
  },
  {
    id: 5,
    text: 'Vegetable',
    img: img2
  },
  {
    id: 6,
    text: 'food',
    img: img1
  },
]
export const products = [
  {
    id: 1,
    type: 'Vegetable',
    img: product_img1,
    name: 'Calabrese Broccoli',
    del: '$20.00',
    sum: '$13.00'
  },
  {
    id: 2,
    type: 'Fruit',
    img: product_img2,
    name: 'Apple',
    del: '$5.00',
    sum: '$3.00'
  },
  {
    id: 3,
    type: 'Grain',
    img: product_img4,
    name: 'Quinoa',
    del: '$8.00',
    sum: '$5.00'
  },
  {
    id: 4,
    type: 'Dairy',
    img: product_img4,
    name: 'Cheese',
    del: '$12.00',
    sum: '$8.00'
  },
  {
    id: 5,
    type: 'Meat',
    img: product_img5,
    name: 'Steak',
    del: '$25.00',
    sum: '$18.00'
  },
  {
    id: 6,
    type: 'Seafood',
    img: product_img6,
    name: 'Salmon',
    del: '$22.00',
    sum: '$15.00'
  },
  {
    id: 7,
    type: 'Beverage',
    img: product_img7,
    name: 'Soda',
    del: '$2.00',
    sum: '$1.00'
  },
  {
    id: 8,
    type: 'Snack',
    img: product_img8,
    name: 'Chips',
    del: '$3.50',
    sum: '$2.00'
  },
];
