import { createSlice } from "@reduxjs/toolkit";
import Image6 from "../../Images/SE3338-11.jpg";
import Image7 from "../../Images/battrey-xiaomi-11.jpg";

const initialState = {
  products: [
    {
  id: 1,
  name: "محصول ۱",
  link: "/product/1",
  colors: ["#000", "#444"],
  image: Image6,
  priceBeforeDiscount: 15000,
  price: 10000,
  discountPercent: 33,
  available: true,
},
{
  id: 2,
  name: "محصول ۲",
  link: "/product/2",
  colors: ["#000", "#444"],
  image: Image7,
  priceBeforeDiscount: 15000,
  price: 10000,
  discountPercent: 33,
  available: true,
},
{
  id: 3,
  name: "محصول ۳",
  link: "/product/3",
  colors: ["#000", "#444"],
  image: Image6,
  priceBeforeDiscount: 15000,
  price: 10000,
  discountPercent: 33,
  available: true,
},
{
  id: 4,
  name: "محصول ۴",
  link: "/product/4",
  colors: ["#000", "#444"],
  image: Image7,
  priceBeforeDiscount: 15000,
  price: 10000,
  discountPercent: 33,
  available: true,
},
{
  id: 5,
  name: "محصول ۵",
  link: "/product/5",
  colors: ["#000", "#444"],
  image: Image6,
  priceBeforeDiscount: 15000,
  price: 10000,
  discountPercent: 33,
  available: true,
},
{
  id: 6,
  name: "محصول ۶",
  link: "/product/6",
  colors: ["#000", "#444"],
  image: Image7,
  priceBeforeDiscount: 15000,
  price: 10000,
  discountPercent: 33,
  available: true,
},
{
  id: 7,
  name: "محصول ۷",
  link: "/product/7",
  colors: ["#000", "#444"],
  image: Image6,
  priceBeforeDiscount: 15000,
  price: 10000,
  discountPercent: 33,
  available: true,
},
{
  id: 8,
  name: "محصول ۸",
  link: "/product/8",
  colors: ["#000", "#444"],
  image: Image7,
  priceBeforeDiscount: 15000,
  price: 10000,
  discountPercent: 33,
  available: true,
},
{
  id: 9,
  name: "محصول ۹",
  link: "/product/9",
  colors: ["#000", "#444"],
  image: Image6,
  priceBeforeDiscount: 15000,
  price: 10000,
  discountPercent: 33,
  available: true,
},
{
  id: 10,
  name: "محصول ۱۰",
  link: "/product/10",
  colors: ["#000", "#444"],
  image: Image7,
  priceBeforeDiscount: 15000,
  price: 10000,
  discountPercent: 33,
  available: true,
},
{
  id: 11,
  name: "محصول ۱۱",
  link: "/product/11",
  colors: ["#000", "#444"],
  image: Image6,
  priceBeforeDiscount: 15000,
  price: 10000,
  discountPercent: 33,
  available: true,
},

  ],
};

const productCardSlice = createSlice({
  name: "productCard",
  initialState,
  reducers: {
    addProduct: (state, action) => state.products.push(action.payload),
    removeProduct: (state, action) =>
      (state.products = state.products.filter((p) => p.id !== action.payload)),
  },
});

export const selectSliderProducts = (state) => state.productCard.products;

export default productCardSlice.reducer;
