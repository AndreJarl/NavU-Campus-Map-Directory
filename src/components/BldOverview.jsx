import { AiOutlineClose } from "react-icons/ai";
import cardData from "../data/CardData";
import {Building2} from "lucide-react"
function BldOverview({ query, setQuery, setBldClicked, handleOpenPopup }) {
  const buildingData = cardData[query.building];
  console.log(query.building);

  const CloseCard = () => {
    setBldClicked(false);
  };

  const clickedViewBtn = () => {
    setBldClicked(false);
    handleOpenPopup(query.building);
  };

  return (
    <>
      {/* Background overlay */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-xs z-30"
        onClick={CloseCard} // click outside to close
      ></div>

      {/* Card */}
      <div
        className={`fixed z-40 flex flex-col rounded-2xl border border-gray-400 border-opacity-50
        top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        w-[360px] lg:w-[580px] 2xl:w-[720px] overflow-hidden shadow-2xl`}
      >
        {/* Image with subtle bottom overlay */}
        <div className="relative w-full">
          <img
            className="w-full h-[400px] object-cover rounded-2xl"
            src={buildingData?.img}
            alt={query.building || "Building Image"}
          />

          {/* Subtle bottom overlay */}
          <div
            className="absolute bottom-0 left-0 right-0 
                          bg-gradient-to-t from-black/80 via-black/60 to-transparent
                          p-5 lg:p-7 rounded-b-2xl flex flex-col items-start"
          >
            <p className="block text-2xl lg:text-4xl font-bold uppercase text-white w-full text-left">
              {query.building}
            </p>
            <p className="block font-semibold text-lg mb-1 pl-4 lg:text-xl text-white w-full text-left">
              Floors: {buildingData?.totalFloors || "No Data Available."}
            </p>

            {/* View Building button */}
            <button
              className="mt-3 bg-green-600 flex gap-3 hover:bg-green-800 text-white font-semibold px-4 py-2 text-base rounded-xl shadow-md transition duration-200"
              onClick={clickedViewBtn}
            >
             <Building2 /> View Building
            </button>
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={CloseCard}
          className="flex gap-2 items-center absolute right-5 top-3 bg-red-600 hover:bg-red-800 text-white text-xl px-3 py-3 rounded-full shadow-lg"
        >
          <AiOutlineClose />
        </button>
      </div>
    </>
  );
}

export default BldOverview;
