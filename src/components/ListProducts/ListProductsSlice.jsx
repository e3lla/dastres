import { createSlice } from "@reduxjs/toolkit";
import ankerImg from "../../../public/Images/ANKER-V22.jpg";

const initialState = [
  {
    id: 1,
    title: "هندزفری بلوتوثی انکر R50i مدل Anker A3949",
    img: ankerImg,
    priceBefore: 1390000,
    discount: 300000,
    priceNow: 1090000,
  },
  {
    id: 2,
    title: "هندزفری بلوتوثی انکر R50i مدل Anker A3949",
    img: ankerImg,
    priceBefore: 1390000,
    discount: 300000,
    priceNow: 1090000,
  },
  {
    id: 3,
    title: "هندزفری بلوتوثی انکر R50i مدل Anker A3949",
    img: ankerImg,
    priceBefore: 1390000,
    discount: 300000,
    priceNow: 1090000,
  },
   {
    id: 4,
    title: "هندزفری بلوتوثی انکر R50i مدل Anker A3949",
    img: ankerImg,
    priceBefore: 1390000,
    discount: 300000,
    priceNow: 1090000,
  },
   {
    id: 5,
    title: "هندزفری بلوتوثی انکر R50i مدل Anker A3949",
    img: ankerImg,
    priceBefore: 1390000,
    discount: 300000,
    priceNow: 1090000,
  },
];

const ListProductsSlice = createSlice({
  name: "listProducts",
  initialState,
  reducers: {
    addListProduct: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const selectListProducts = (state) => state.listProducts;
export default ListProductsSlice.reducer;
