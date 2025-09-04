import React from 'react'
import searchData from "../data/searchData"


function SearchBar({query, setQuery, suggestion, setSuggestion, buildingFloors, showMenu, setShowMenu, closePopUp}) {
    
     const handleInputChange = (e) => {
        const value = e.target.value;

        if(value){
             const filteredSuggestions = Object.keys(searchData).filter((item)=> item.toLowerCase().includes(value.toLowerCase()));
             setSuggestion(filteredSuggestions);
             filteredSuggestions.length === 0 ? setQuery(value) : setQuery(filteredSuggestions);
        }else{
             setQuery([]);
             setSuggestion([]);
        }
     }

     
  return (
        <div className="fixed top-3  group right lg:right-10 2xl:right-36 2xl:top-6 px-2" >
            <div className=" rounded-lg shadow-xl  w-[300px] lg:w-[400px] 2xl:w-[600px]  border border-gray-300 px-5 flex flex-row justify-center items-center bg-white hover:rounded-t-xl">
            <input className="px-2 py-3 bg-white w-[200px] lg:w-[400px] 2xl:w-[600px]  border-none outline-none text-sm overflow-hidden" type="search" name="" id="" placeholder="Search building/facilities"
            onClick={() => closePopUp()}
            onChange={handleInputChange}
            />
            <div className="flex gap-2"> 
            <h1   className="text-xl cursor-pointer"><IoIosSearch /></h1>
            <h1 onClick={() => setShowMenu(!showMenu)} className="text-xl cursor-pointer">{ showMenu ? <MdMenuOpen  />  :<IoMdMenu /> }</h1>
            </div>
           
            </div>
          
         
            {suggestion.length === 0 && query.length !== 0 && !(query in buildingFloors) ? (
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
        )}
            
        </div>
        


  )
}

export default SearchBar        