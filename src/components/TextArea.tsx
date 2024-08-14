export default function TextArea({name, placeholder}) {
    return (
      <div className="flex-1 ">
        <label htmlFor="fname"> {name} </label>
        <textarea  name="" id="" placeholder={placeholder} className="w-full rounded-lg h-30 text-black p-2 outline-none ring ring-neutral-700 transition-all duration-200 focus:ring-violet-700">
        </textarea>

      </div>
    );
  }