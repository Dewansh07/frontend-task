"use client"
import React from 'react';

const ToggleButton = ({activeWord,handleClick}:{activeWord:string,handleClick:(word: string) => void}) => {

  return (
    <div className="flex mt-8 sm:mt-4">
      <button
        className={`w-[130px] sm:w-[220px] h-12 flex justify-center items-center text-white rounded-[100px] ${
          activeWord === 'Events' ? 'bg-muted z-10 ' : 'bg-destructive z-0  pr-8 sm:pr-0'
        }`}
        onClick={() => handleClick('Events')}
      >
        Events
      </button>
      <button
        className={`w-[160px] sm:w-[220px] h-12 flex justify-center items-center -ml-12 text-white rounded-[100px] ${
          activeWord === 'Collections' ? 'bg-muted z-10 ' : 'bg-destructive z-0 pl-6 sm:pl-0'
        }`}
        onClick={() => handleClick('Collections')}
      >
        Collections
      </button>
    </div>
  );
};

export default ToggleButton;
