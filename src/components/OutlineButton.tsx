import arrow_tr from "../assets/icons/arrow_tr.png";

interface OutlineButtonProps {
  content: string;
  setModal: any;

}



const  OutlineButton  : React.FC<OutlineButtonProps> = ({ content, setModal = null  }) =>  {
  

  return (
    <button onClick={ () => setModal(true) }  className="px-4 py-2 border rounded-lg border-white border-4 group btn-outline flex items-center gap-4 overflow-hidden">
      <span className="transition-all duration-200 translate-x-4 group-hover:translate-x-0">
        { content }
      </span>
      <img
        src={arrow_tr}
        className=" translate-x-10 opacity-0  ease-in-out transition-all duration-200 w-5 h-5 group-hover:translate-x-0 group-hover:opacity-100"
        alt=""
      />
    </button>
  );
}


export default  OutlineButton;