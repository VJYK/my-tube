/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg justify-between">
      <div className="flex col-span-1">
        <img
          src="https://as1.ftcdn.net/v2/jpg/01/09/45/80/1000_F_109458015_QsWmchlzuwCZPqIUWR7HcTDsbbptejRv.jpg"
          alt="hembarger" className="h-8"
        />
        <img
          src="https://t4.ftcdn.net/jpg/03/04/06/01/360_F_304060171_OUUSKIITlOLRgnDI1EFO8eSZqOHab6Iq.webp"
          className="h-8"
        />
      </div>
      <div className="flex col-span-10 px-10">
        <input type="text" className="w-1/2 border border-gray-400 rounded-l-full"/>
        <button className="border border-gray-400 p-2 rounded-r-full" >Search</button> 
      </div>
      <div className="flex col-span-1">
        <img alt="user" className="h-8"
         src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg" 
        />
      </div>
    </div>
  );
};

export default Head;
