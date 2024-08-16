import React from "react";

interface InputProps {
  name: string;
  placeholder: string;
  isRequired : boolean
}

const  Input : React.FC<InputProps> = ( {name, isRequired, placeholder} ) =>  {
  return (
    <div className="flex-1">
      <label htmlFor="fname"> {name}  { isRequired && ( <span className="text-red-400 text-sm"> ( Required ) </span> ) } </label>
      <input
        className="w-full rounded-lg h-10 text-black p-2 outline-none ring ring-neutral-700 transition-all duration-200 focus:ring-violet-700"
        type="text"
        maxLength={30}
        name={name}
        placeholder={placeholder}
        required={ isRequired }
      />
    </div>
  );
}
export default Input;
