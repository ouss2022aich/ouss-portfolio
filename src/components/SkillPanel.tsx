import star from '../assets/icons/star.png';
export default function SkillPanel() {
  
     return ( 
        <div className="skill-panel p-5 bg-violet-600 text-white bg-gradient-to-b from-violet-600 to-violet-800">

            <div className="skills flex items-center gap-4 justify-evenly text-xl">
                <span className=''> Information System  </span>
                <img src={star} className='w-6 ' alt="" />
                <span className=''> FULL Stack Dev </span>
                <img src={star} className='w-6 ' alt="" />
                <span className=''> UI Design </span>
                <img src={star} className='w-6 ' alt="" />
                <span className=''> Mobile Dev  </span>

            </div>


        </div>
     )



}