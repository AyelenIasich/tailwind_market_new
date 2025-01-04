import React from "react";

function Card() {
  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg texte-black text-xs m-2 px-2 py-1">
          Electronics
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src="https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="headphones"
        />
        <div className="absolute top-0 right-0 flex justify-center items-center bg-white h-6 w-6 rounded-full m-2 pb-2 pt-1 px-2 font-medium">
          +
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">HeadPhones</span>
        <span className="text-lg font-medium">$300</span>
      </p>
    </div>
  );
}

export default Card;
