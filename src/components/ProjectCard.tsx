import OutlineButton from "./OutlineButton";
import Modal from "./Modal";
export default function ProjectCard( {projectName, projectPic, description , tools =[]} ) {

return (

    <div className="project-card flex flex-col w-100 bg-neutral-700 rounded rounded-xl p-10 gap-5 w-80 ">
          <div className="project-card-header flex flex-col gap-4">
            <img className="h-40 object-contain" src={projectPic} alt="" />
            <h1 className="text-2xl text-center"> {projectName} </h1>
            <hr />
         
          </div>
      
         
          <div className="project-card-body flex flex-col gap-4">
            <p className="text-center">
              {description}
            </p>
            <div className="flex justify-center">
              <Modal title={ projectName } projectImg={projectPic} description={description} tools={ tools} />
   
            </div>
            
          </div>
        </div>
)
    
}