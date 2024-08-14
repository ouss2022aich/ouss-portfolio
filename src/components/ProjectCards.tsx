
import ProjectCard from "./ProjectCard";
import projectImg from '../assets/images/project.jpeg';
import projectImg2 from '../assets/images/project2.jpeg';
import projectImg3 from '../assets/images/project3.png';
import projectImg4 from '../assets/images/project4.png';
import projectImg5 from '../assets/images/project5.png';



export default function ProjectCardGroup() {
  return (
    <div className="project-card-group">
      <div className="project-cards grid gap-10 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-2 xl:grid-cols-3 xl:grid-rows-2 ">
      
         <ProjectCard projectName={"British School "} description={"this project is a school app the manages everything from school history to administration."} projectPic={ projectImg2} tools={["HTML" , "CSS", "TailWind" , "JS"  , "JQuery", "PHP" , "MySQL" ]}/>
         <ProjectCard projectName={"GalaxyBenef"} description={"Its a big web app that has three platform."} projectPic={ projectImg} tools={["HTML" , "CSS", "Bootstrap" , "JS"  , "JQuery", "PHP" , "MySQL" ]}/>
         <ProjectCard projectName={"Social App Mockup"} description={"A modern Mockup for a social media app"} projectPic={ projectImg4} tools={["Figma"]}/>
         <ProjectCard projectName={"Car Services App Mockup"} description={"a modern gradient mockup for car services app"} projectPic={ projectImg5} tools={["Figma"]}/>
         <ProjectCard projectName={"Documents Financiers App"} description={"This Project is an app that allow the user to input the general balance of  this year (N) and the past year (n-1) and output all of the 12 Finances Docuements For Accounting Purposes "} projectPic={ projectImg3} tools={["Excel", "VBA"]}/>

      </div>
    </div>
  );
}
