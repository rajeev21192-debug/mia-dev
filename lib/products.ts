export type Product = {
  slug: string;
  name: string;
  price: number;
  image: string;
  rating?: number;
  reviews?: number;
  badges?: string[];
  short?: string;
};

export const PRODUCTS: Product[] = [
  { slug:'baby-lotion', name:'Baby Lotion', price: 999, image:'/images/product-lotion.png', rating: 4.8, reviews: 126, badges:['Gentle','Derm-Tested'], short:'Lightweight daily lotion' },
  { slug:'baby-shampoo', name:'Baby Shampoo', price: 899, image:'/images/product-shampoo.png', rating: 4.7, reviews: 98, badges:['Tear-free'], short:'Mild cleanse for hair' },
  { slug:'baby-wash', name:'Baby Wash', price: 799, image:'/images/product-wash.png', rating: 4.6, reviews: 83, badges:['Sulfate-free'], short:'pH 5.5 body wash' },
  { slug:'massage-oil', name:'Massage Oil', price: 1099, image:'/images/product-oil.png', rating: 4.7, reviews: 67, badges:['Lightweight'], short:'Pre-bath comfort oil' },
  { slug:'tummy-roll-on', name:'Tummy Roll-On', price: 399, image:'/images/product-tummy.png', rating: 4.5, reviews: 42, badges:['Comfort'], short:'On-the-go tummy ease' },
  { slug:'fabric-roll-on', name:'Fabric Roll-On', price: 349, image:'/images/product-fabric.png', rating: 4.4, reviews: 36, badges:['Freshness'], short:'Quick fabric refresh' },
];
export function findProduct(slug:string){ return PRODUCTS.find(p=>p.slug===slug) || null; }
