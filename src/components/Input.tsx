import React from "react";

interface InputProps {
  name: string;
  placeholder: string;
}

const  Input : React.FC<InputProps> = ( {name, placeholder} ) =>  {
  return (
    <div className="flex-1">
      <label htmlFor="fname"> {name} </label>
      <input
        className="w-full rounded-lg h-10 text-black p-2 outline-none ring ring-neutral-700 transition-all duration-200 focus:ring-violet-700"
        type="text"
        maxLength={30}
        placeholder={placeholder}
      />
    </div>
  );
}
export default Input;
