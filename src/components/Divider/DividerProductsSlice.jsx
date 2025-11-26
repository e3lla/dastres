import { createSlice } from "@reduxjs/toolkit";
import ankerImg from "../../Images/ANKER-V22.jpg";

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
];

const dividerProductsSlice = createSlice({
  name: "dividerProducts",
  initialState,
  reducers: {
    addDividerProduct: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const selectDividerProducts = (state) => state.dividerProducts;
export default dividerProductsSlice.reducer;
