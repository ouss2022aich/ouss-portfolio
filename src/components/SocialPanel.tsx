import arrow_r from "../assets/icons/arrow-r.png";
import fiverr from "../assets/icons/fiverr.png";
import linkedin from "../assets/icons/linkedin.png";
import mail  from "../assets/icons/mail.png";
const icons = [
  arrow_r , fiverr , linkedin , mail
]

export default function SocialPanel( { content , url='' , type = 0 , ext_content = null } ) {
  return (
    <a href={ url } className="bg-neutral-600 px-10 py-7  cursor-pointer rounded-lg flex justify-between w-60 ">
      <span> { content }</span>
      { ext_content ? <span className=""> {ext_content} </span> : <img src={ icons[type] } className="w-6" alt="" /> }
   
    </a>
  );
}
