import  React, { useState } from "react";
import OutlineButton from "./OutlineButton";


interface ModalProps {
  title: string;
  description: any;
  projectImg: string;
  tools : string[];

}

const Modal : React.FC<ModalProps> = ( { title , description , projectImg , tools =[] }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
     <OutlineButton content={"See More"} setModal={ setShowModal  } />
      
    
      {showModal ? (
        <>
          <div
            style={{ backdropFilter: "blur(8px)" }}
            className="transition-colors transition-all  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none  text-white"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl ">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none ">
              
                <div className="flex flex-col items-start justify-between p-5 border-b border-solid border-violet-950 rounded-xl bg-neutral-700 w-[900px] text-white ">
                  <div className="flex justify-between w-full">
                    <h3 className="text-3xl font=semibold">Project Info</h3>
                    <button
                      className="bg-transparent border-0  float-right"
                      onClick={() => setShowModal(false)}
                    >
                      <span className=" opacity-7 h-6 w-6 text-xl block  py-0 hover:text-red-400">
                      ✖
                      </span>
                    </button>
                  </div>

                  <div className="flex flex-col items-center justify-center w-full p-10">
                      
                      <img className="" src={projectImg} alt="" />
                      <h1 className="text-left text-3xl w-full text-orange-400">{title}</h1>
                      <hr className="w-full"/>
                      <br />
                      <p className="text-md">{description}</p>

                      <h1 className="py-2 text-left text-3xl w-full text-orange-400"> Technologies Used  </h1>
                      <hr className="w-full"/>
                      <br />
                      <ul className="text-left w-full flex flex-col gap-y-7 my-2">
                         {
                             tools.map( (t) => { return  <li key={t} > - <span className="py-2 px-5 rounded rounded-xl bg-gradient-to-b from-violet-600 to-violet-900">{t} </span></li> } )
                         }
                      </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
