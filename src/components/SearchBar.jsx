import { Search } from "lucide-react"
import { Menu  } from 'lucide-react';

import eng from "../assets/logo/eng.jpg"
import educ from "../assets/logo/educ.jpg"
import tech from "../assets/logo/tech.jpg"
import cme from "../assets/logo/cme.jpg"

function SearchBar() {


    
  return (
     <div className="fixed top-3  group right lg:right-10 2xl:right-36 2xl:top-6 px-2" >
            <div className=" rounded-t-lg border-x border-t border-gray-200  w-[300px] lg:w-[400px] 2xl:w-[600px]   px-5 flex flex-row justify-center items-center bg-white hover:rounded-t-xl">
            <input className="px-2 py-3 bg-white w-[200px] lg:w-[400px] 2xl:w-[600px]  border-none outline-none text-sm overflow-hidden" type="search" name="" id="" placeholder="Search building/facilities"
           
            />
            <div className="flex gap-2"> 
            <h1   className="text-xl cursor-pointer"><Search /></h1>
            <h1  className="text-xl cursor-pointer"><Menu  /> </h1>
            </div>
           
            </div>
        
              <div className=" rounded-b-lg shadow-xl  w-[300px] lg:w-[400px] 2xl:w-[600px] border-x border-gray-200  px-5 flex flex-row justify-center items-center bg-white">
               <div className="grid grid-cols-4 justify-center mt-4 gap-5 items-center pb-4">
                  <div className="flex flex-col gap-2 items-center">
                  <img className="w-10" src={eng}  alt="" srcset="" />
                    <p className="text-xs">Engineering</p>
                  </div>
                      <div className="flex flex-col gap-2 items-center">
                    <img className="w-10" src={educ} alt="" srcset="" />
                    <p className="text-xs">Education</p>
                  </div>
                       <div className="flex flex-col gap-2 items-center">
                    <img className="w-10" src={tech} alt="" srcset="" />
                    <p className="text-xs">Technology</p>
                  </div>
                    <div className="flex flex-col gap-2 items-center">
                    <img className="w-10" src={cme} alt="" srcset="" />
                    <p className="text-xs">Management</p>
                  </div>
               </div>

            </div>
  
                   
        
    


                 {/* {suggestion.length === 0 && query.length !== 0 && !(query in buildingFloors) ? (
              <div className="bg-white rounded-b-lg shadow-xl shadow-gray-400 max-h-[460px] flex-col  overflow-auto gap-2 pt-5 py-4 items-center justify-center -mt-2 flex"
              >
                  <i className="text-sm text-slate-400">No building/facilities found.</i>
               </div> 
        ): (
            <div className={`bg-white rounded-b-lg shadow-xl shadow-gray-400 max-h-[460px] overflow-auto flex-col gap-1 pt-2 py-2 items-start justify-start -mt-2 ${suggestion.length>0 ? 'flex' : 'hidden'}`
                }>
                 
                 
                    {suggestion.map((suggestions, index)=>(
                         <div key={index} onClick={()=>handleSuggestionClicked(suggestions)} className="flex flex-row justify-left  cursor-pointer items-center gap-2 hover:bg-gray-400 w-full py-2 px-4">
                        <h1><IoLocationOutline/></h1>
                        <p className="text-sm">{suggestions}</p>
                    </div>
                    ))}
        
                </div>
        )} */}
 </div>
  )
}

export default SearchBar