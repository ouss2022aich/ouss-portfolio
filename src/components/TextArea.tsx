
interface TextAreaProps {
  name: string;
  placeholder: string;
  isRequired : boolean 

}


const  TextArea : React.FC<TextAreaProps> = ({name, isRequired,  placeholder}) => {
    return (
      <div className="flex-1 ">
        <label htmlFor="fname"> {name}{ isRequired && ( <span className="text-red-400 text-sm"> ( Required ) </span> ) }  </label>
        <textarea required={isRequired}  name={name} id="" placeholder={placeholder} className="w-full rounded-lg h-30 text-black p-2 outline-none ring ring-neutral-700 transition-all duration-200 focus:ring-violet-700">
        </textarea>

      </div>
    );
  }

  export default TextArea;