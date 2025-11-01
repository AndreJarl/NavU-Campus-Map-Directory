import { AiOutlineClose } from "react-icons/ai";
import { useQuery } from "../context/QueryContext";
import { CornerUpRight , ScanQrCode, ChevronUp, ChevronDown, Minus, Ellipsis } from "lucide-react";
import { usePath } from "../context/PathContext";
import { useState, useRef } from "react";
import qr from "../assets/qr.png";

function RoomInfo({ setShowPopup, showPopup, roomSearched, setRoomSearched, setDisable, disable, setBldClicked }) {
  const { query } = useQuery();
  const { room, floor } = query; 
  const { setPath } = usePath();
  const [showQRPopup, setShowQRPopup] = useState(false);
const [chevron, setChevron] = useState(false);

  const handleDirections = (roomName) => {
    setPath(roomName);
  };

  const closeBtn = () => {
    setBldClicked(true);
    setRoomSearched(false);
    setPath("");
    setDisable(false);
  };

  return (
    <>
      <div
       
        className={`${roomSearched ? "fixed inset-x-0 bottom-0 m-2 lg:m-0 lg:absolute lg:left-8 lg:top-20 z-[50]" : "hidden"}
        w-aut ${!chevron ? ' h-[50%]' : 'h-[75%]'} lg:w-[420px] my-4 rounded-3xl backdrop-blur-lg bg-black/70 border border-white/20 shadow-md p-2
        transform transition-transform pointer-events-auto ease-in-out duration-200 flex flex-col`}
      >
          <div   
               onClick={()=>setChevron(!chevron)}
                 className="absolute top-0 inset-x-0 flex justify-center lg:hidden z-[200] opacity-60">
                  {!chevron ? <Minus color="white" size={40} /> : <Ellipsis color="white" size={40} />} 
                </div>

        <div className="p-4 pt-3 top-0 absolute right-0 flex justify-between items-center z-[300]">
          <button
            onClick={closeBtn}
            className="rounded-full bg-red-500 hover:bg-red-700 font-bold text-xl flex gap-2 items-center text-white px-2 py-2"
          >
            <AiOutlineClose />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 px-5 mt-2 text-white">
          <h2 className="text-xl md:text-lg lg:text-3xl font-semibold drop-shadow-lg">
            {room?.name}
          </h2>
          <h3 className="mb-2 font-medium text-red-400 text-base lg:text-base">
            Floor {floor}
          </h3>
          <img className="lg:w-[100%] w-[100%] md:w-[100%] lg:h-[60%] rounded-lg shadow-md" src={room.img} alt="" />
          <h3 className="font-medium text-gray-200 lg:text-xl">
            {room.code}
          </h3>
          <p className="mb-2 text-gray-300 text-sm lg:text-base">{room.description}</p>
        </div>

        <div className="border-t flex lg:flex-row text-center pb-4 lg:mb-0 justify-center border-white/20 pt-4  lg:text-base text-xs gap-4">
          <button
            className="lg:py-3 lg:px-5 py-2 px-4 bg-red-500 flex gap-3 items-center text-center text-white rounded-3xl justify-center hover:bg-red-600 transition"
            onClick={() => handleDirections(room.name)}
          >
            <CornerUpRight size={20}/> Get Directions
          </button>
          <button
            className="lg:py-3 lg:px-5 py-2 px-4 bg-white/20  flex gap-3 text-center  items-center text-white rounded-3xl justify-center hover:bg-white/10 transition"
            onClick={() => setShowQRPopup(true)}
          >
            <ScanQrCode size={20} /> Generate QR
          </button>
        </div>

        {showQRPopup && (
          <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-[9999]">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center text-white shadow-lg w-[90%] max-w-md relative">
              <button
                onClick={() => setShowQRPopup(false)}
                className="absolute top-3 right-3 bg-red-500 hover:bg-red-700 text-white rounded-full p-2"
              >
                <AiOutlineClose />
              </button>

              <h2 className="lg:text-2xl font-semibold mb-4">Room QR Code</h2>
              <div className="flex justify-center">
                <div className="lg:w-48 lg:h-48 w-32 h-32 bg-white rounded-lg flex items-center justify-center text-black">
                  <img className="lg:w-48 lg:h-48 w-[100%] h-32" src={qr} alt="" />
                </div>
              </div>
              <p className="mt-4 text-gray-300 text-xs lg:text-sm">
                Scan this code to view more info about <b>{room?.name}</b>
              </p>
            </div>
          </div>
        )}

      </div>
    </>
  );
}

export default RoomInfo;
