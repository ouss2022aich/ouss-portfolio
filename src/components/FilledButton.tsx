
import download_icon from "../assets/icons/download.png";
import resume from '../assets/resume/cv_ouss_en.pdf';

interface FilledButtonProps {
  content: string;
}

const  FilledButton : React.FC<FilledButtonProps>  = ({ content })  => {
    return (
      <a href={resume} className="inline-block">
      <button className="px-4 py-2 bg-gradient-to-b from-blue-700 h-[50px] to-blue-950 rounded-lg  group btn-outline flex items-center gap-4 overflow-hidden">
        <span className="transition-all duration-200 translate-x-4 group-hover:translate-x-0">
          { content }
        </span>
        <img
          src={download_icon}
          className=" translate-y-10 opacity-0  ease-in-out transition-all duration-200 w-5 h-5 group-hover:translate-y-0 group-hover:opacity-100"
          alt=""
        />
      </button>
      </a>
    );
  }
  export default  FilledButton;