
import { configureStore } from "@reduxjs/toolkit";
import countdownReducer from "../components/CountDown/CountdownSlice";
import productsReducer from "../components/Products/ProductsSlice";
import dividerReducer from "../components/Divider/DividerProductsSlice";
import listProductsReducer from "../components/ListProducts/ListProductsSlice"
import productCardReducer from "../components/ProductCard/ProductCardSlice";
import whyReducer from "../components/Why/WhySlice "

export const store = configureStore({
  reducer: {
    countdown: countdownReducer,
    products: productsReducer,
    dividerProducts: dividerReducer, 
    listProducts: listProductsReducer,
    productCard: productCardReducer,
    why: whyReducer,  },
});
