import { ImSpoonKnife } from "react-icons/im";
import { BsFillHouseFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import CountUp from "react-countup";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";

const MenuCounter = () => {
  const [counterStart, setCounterStart] = useState(false);

  return (
    <>
      <ScrollTrigger
        onEnter={() => setCounterStart(true)}
        onExit={() => setCounterStart(false)}
      >
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 my-20 pl-12">
          <div className="shadow-2xl rounded-xl h-[250px] w-[250px] flex flex-col justify-center items-center pb-8 gap-4">
            <BsFillHouseFill className="text-7xl mt-2 text-orange-500"></BsFillHouseFill>
            <h1 className="text-4xl font-bold text-orange-500">
              {counterStart && <CountUp delay={0.2} end={70} duration={2} />}+
            </h1>
            <h3 className="text-2xl font-serif font-bold text-orange-500">
              Total Outlets
            </h3>
          </div>
          <div className="shadow-2xl rounded-xl h-[250px] w-[250px] flex flex-col justify-center items-center pb-8 gap-4">
            <FaUsers className="text-7xl mt-2 text-orange-500"></FaUsers>
            <h1 className="text-4xl font-bold text-orange-500">
              {counterStart && (
                <CountUp delay={0.2} end={100000} duration={1.5} />
              )}
              +
            </h1>
            <h3 className="text-2xl font-serif font-bold text-orange-500">
              Total Users
            </h3>
          </div>
          <div className="shadow-2xl rounded-xl h-[250px] w-[250px] flex flex-col justify-center items-center pb-8 gap-4">
            <ImSpoonKnife className="text-7xl mt-2 text-orange-500"></ImSpoonKnife>
            <h1 className="text-4xl font-bold text-orange-500">
              {counterStart && <CountUp delay={0.2} end={500} duration={2} />}
              +
            </h1>
            <h3 className="text-2xl font-serif font-bold text-orange-500">
              Menu Items
            </h3>
          </div>
          <div className="shadow-2xl rounded-xl h-[250px] w-[250px] flex flex-col justify-center items-center pb-8 gap-4">
            <TbTruckDelivery className="text-7xl mt-2 text-orange-500"></TbTruckDelivery>
            <h1 className="text-4xl font-bold text-orange-500">
              {counterStart && (
                <CountUp delay={0.2} end={150000} duration={1.5} />
              )}
              +
            </h1>
            <h3 className="text-2xl font-serif font-bold text-orange-500">
              Total Orders
            </h3>
          </div>
        </div>
      </ScrollTrigger>
    </>
  );
};

export default MenuCounter;
