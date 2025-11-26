import { useSelector } from "react-redux";


const Why = () => {
  const benefits = useSelector((state) => state.why.benefits);

  return (
    <div className="sm:flex flex-wrap hidden mt-12">
      {benefits.map((item) => (
        <div
          key={item.id}
          className="flex flex-col flex-1 h-full justify-center items-center p-4 min-w-[250px]"
        >
          <img className="w-16 mb-2" src={item.icon} alt={item.title} />
          <p className="flex-1 text-center font-bold text-gray-700 mb-2">
            {item.title}
          </p>
          <p className="text-center w-64 align-middle text-sm text-gray-600 leading-7">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Why;
