import { useSelector } from "react-redux";
import { selectDividerProducts } from "../../components/Divider/DividerProductsSlice";

const Divider = () => {
  const cards = useSelector(selectDividerProducts); 

  return (
    <div className="mt-8 w-full lg:w-[35%] h-auto bg-[#E2E2E2] flex flex-col justify-start items-center gap-4 px-4 sm:px-6 md:px-8 lg:px-0">
      {cards.map((card) => (
  <div
  key={card.id}
  className="
    rounded-xl shadow bg-white overflow-hidden
    flex flex-col lg:flex-row items-center gap-2
    w-full max-w-md lg:max-w-[372px]
    h-48 lg:h-[179px]
  "
>
  <div className="w-full h-40 lg:w-40 lg:h-full flex-shrink-0">
    <img
      className="
        w-full h-full object-contain
        rounded-t-xl lg:rounded-t-none lg:rounded-l-xl
      "
      alt={card.title}
      src={card.img}
    />
  </div>

  <div className="flex flex-col flex-1 justify-between gap-2 p-2 lg:p-3">
    <h3 className="font-medium text-sm md:text-base leading-5 lg:leading-6 text-black">
      {card.title}
    </h3>

    <div className="flex flex-col gap-2 mt-1">
      <div className="flex justify-between">
        <span className="font-bold text-gray-500 text-sm md:text-base line-through">
          {card.priceBefore.toLocaleString('fa-IR')}
        </span>

        <span className="text-red-500 text-sm font-medium">
          {card.discount.toLocaleString('fa-IR')} تخفیف
        </span>
      </div>

      <div className="flex items-center justify-end gap-1">
        <span className="text-green-600 font-bold text-lg md:text-xl">
          {card.priceNow.toLocaleString('fa-IR')}
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

export default Divider;
