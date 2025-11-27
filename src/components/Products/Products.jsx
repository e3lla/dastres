// src/components/Products/Products.jsx
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { 
  selectProducts, 
  selectProductsStatus, 
  selectProductsError, 
  fetchProducts 
} from "./ProductsSlice";


const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const status = useSelector(selectProductsStatus);
  const error = useSelector(selectProductsError);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === 'loading') {
    return (
      <div className="mt-8 w-full lg:w-[calc(100%-691.5px)] flex items-center justify-center">
        <div className="text-lg">در حال بارگذاری...</div>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="mt-8 w-full lg:w-[calc(100%-391.5px)] flex items-center justify-center">
        <div className="text-red-500 text-lg">خطا: {error}</div>
      </div>
    );
  }

  return (
    <div className="lg:flex hidden mt-8 m-4 w-full lg:w-[65%] gap-7">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
          style={{ width: '371.5px', height: '539px' }}
        >
          {/* تصویر محصول */}
          <div className="w-full h-[300px] bg-white flex items-center justify-center p-4">
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-full object-contain"
            />
          </div>

          {/* محتوا */}
          <div className="p-4 flex flex-col h-[239px]">
            {/* عنوان محصول */}
            <h3 className="text-sm font-medium text-gray-800 mb-4 leading-5 line-clamp-3 flex-grow">
              {product.title}
            </h3>

            {/* قیمت و تخفیف */}
            <div className="space-y-3 mt-auto">
              <div className="flex justify-between items-center">
                <span className="text-red-500 text-xs font-medium">
                  تخفیف {product.discount.toLocaleString('fa-IR')} تومان
                </span>
                <span className="text-gray-500 text-xs line-through">
                  {product.priceBefore.toLocaleString('fa-IR')}
                </span>
              </div>

              <div className="flex justify-end items-center gap-1">
                <span className="text-green-600 font-bold text-lg">
                  {product.priceNow.toLocaleString('fa-IR')}
                </span>
                <span className="text-gray-500 text-xs">تومان</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;