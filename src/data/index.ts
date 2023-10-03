export enum ProductCategory {
  Shirts = "shirts",
  Pants = "pants",
  Shoes = "shoes",
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  description: string;
  cover: string;
  coverCredits: string;
  category: ProductCategory;
}

export const products: Product[] = [
  {
    id: 32,
    name: "705 Brave",
    slug: "t-705-shirt-brave",
    price: 129,
    description:
      "Stay Brave with the 705 Shirt from Ryan Hoffman Collection. Show your bravery and drinks some beer with.",
    cover: "/products/ryan-hoffman-A7f7XRKgUWc-unsplash.webp",
    coverCredits:
      "https://unsplash.com/photos/A7f7XRKgUWc?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
    category: ProductCategory.Shirts,
  },
  {
    id: 18,
    name: "Haryo Setyadi",
    slug: "haryo-setyadi-shirt",
    price: 199,
    description:
      "Feel the Comfort and Peace of the Haryo Setyadi Shirt white as snow. Don't worry about the stain, it's easy to clean.",
    cover: "/products/haryo-setyadi-acn5ERAeSb4-unsplash.webp",
    coverCredits:
      "https://unsplash.com/photos/acn5ERAeSb4?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
    category: ProductCategory.Shirts,
  },
  {
    id: 21,
    name: "Faith Yarn T-Shirt",
    slug: "faith-yarn-shirt",
    price: 59,
    description:
      "Elevate Your Style and Comfort with the Faith Yarn Shoes. Designed to stay cool and dry all day.",
    cover: "/products/faith-yarn-Wr0TpKqf26s-unsplash.webp",
    coverCredits:
      "https://unsplash.com/photos/Wr0TpKqf26s?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
    category: ProductCategory.Shirts,
  },

  {
    id: 49,
    name: "T-Shirt 705",
    slug: "t-shirt-32",
    price: 99,
    description:
      "Stay Cool and Dry with the T-Shirt 705 from Ryan Hoffman Collection. Relax, run, dream.",
    cover: "/products/ryan-hoffman-6Nub980bI3I-unsplash.webp",
    coverCredits:
      "https://unsplash.com/photos/6Nub980bI3I?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
    category: ProductCategory.Shirts,
  },
];
