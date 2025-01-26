import React from 'react';


const Card = ({ item, isFlipped, handleClick }) => {
  return (
    <div
      className={`card bg-white flex justify-center items-center border rounded-lg cursor-pointer  shadow-md w-[60px] h-[60px]
        tablet:w-[120px] tablet:h-[120px]
        desktop:w-[160px] desktop:h-[160px] ${
        isFlipped ? 'bg-transparent' : 'bg-gray-300'
      }`}
      onClick={handleClick}
     
    >
      {isFlipped ? (
        <img src={item.img} alt="fruit" className=" w-[60px] h-[60px]  tablet:w-[120px] tablet:h-[120px]
         desktop:w-[160px]  desktop:h-[160px]  object-cover rounded-lg " />
      ) : (
        <div className="w-full h-full"></div>
      )}
    </div>
  );
};

export default Card;
