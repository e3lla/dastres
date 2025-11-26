const ProductCard = ({ product }) => {
  if (!product) return null;

  const hasDiscount =
    product.priceBeforeDiscount &&
    product.priceBeforeDiscount > product.price;

  return (
    <div className="w-[272px] h-[419px] bg-[#E2E2E2]  ">
      <a
        href={product.link}
        className="item flex flex-col justify-between rounded-xl shadow-md bg-white hover:shadow-lg transition-all duration-200 h-full relative"
      >
        {/* رنگ‌های محصول */}
        <div className="hidden md:flex flex-col absolute bg-white left-0 p-1 m-0 md:m-2">
          {product.colors?.map((color, idx) => (
            <span
              key={idx}
              className="w-3 h-3 m-1 rounded-full border border-gray-300"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        <div className="flex gap-2 flex-col">
          {/* تصویر */}
          <img
            alt={product.name}
            className="mx-auto rounded-t-xl w-full h-[220px] object-contain"
            src={product.image}
          />

          {/* نام و دسته */}
          <div className="flex flex-col justify-around flex-1 en_num p-2 text-center">
            <span className="text-xs text-gray-400 mb-0 md:mb-2 hidden md:block">
              {product.category}
            </span>

            <h3 className="leading-7 text-sm overflow-hidden en_num">
              {product.name}
            </h3>
          </div>
        </div>

        {/* قیمت */}
        <div className="flex flex-col items-center md:items-end pb-2 md:pb-3 px-2 md:px-4">

          {/* قیمت قبل از تخفیف */}
          {hasDiscount && (
            <span className="text-gray-400 line-through text-xs en_num">
              {product.priceBeforeDiscount.toLocaleString("fa-IR")}
            </span>
          )}

          <div className="flex items-center gap-1">
            {/* تخفیف */}
            {hasDiscount && (
              <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full en_num">
                {product.discountPercent}٪
              </span>
            )}

            {/* قیمت اصلی */}
            <span className="text-color font-bold text-xl en_num">
              {product.price.toLocaleString("fa-IR")}
            </span>
            <span className="text-black-60 text-xs mr-1">تومان</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
