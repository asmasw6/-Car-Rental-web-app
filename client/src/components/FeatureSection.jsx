import Title from "./Title";
import { assets } from "../assets/assets";
import CarCard from "./CarCard";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const FeatureSection = () => {
  const navigate = useNavigate();
  const { cars } = useAppContext();

  return (
    <div className=" flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="">
        <Title
          title="Featured Vehicles"
          subTitle="Explore our selection of premium vechicles available for your next adventure."
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
        {cars.slice(0, 6).map((carData) => (
          <div key={carData._id}>
            <CarCard carData={carData} />
          </div>
        ))}
        {console.log(cars)}
      </div>

      <button
        onClick={() => {
          navigate("/cars");
          scrollTo(0, 0);
        }}
        className="flex items-center justify-center gap-2 px-6 py-2 border border-borderColor
       hover:bg-gray-50 rounded-md mt-18 cursor-pointer"
      >
        Explore all cars <img src={assets.arrow_icon} alt="arrow" />
      </button>
    </div>
  );
};

export default FeatureSection;
