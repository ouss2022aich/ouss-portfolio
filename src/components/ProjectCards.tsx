import ProjectCard from "./ProjectCard";
import projectImg from "../assets/images/project.jpeg";
import projectImg2 from "../assets/images/project2.jpeg";
import projectImg3 from "../assets/images/project3.png";
import projectImg4 from "../assets/images/project4.png";
import projectImg5 from "../assets/images/project5.png";
import projectImg6 from "../assets/images/project6.png";
import popcorn from "../assets/icons/popcorn.png";

export default function ProjectCardGroup() {
  return (
    <div className="project-card-group">
      <div className="project-cards grid gap-10 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-2 xl:grid-cols-3 xl:grid-rows-2 ">
        
        
        <ProjectCard
          projectName={"British School "}
          shortDescription={
            "this project is a school app the manages everything from school history to administration."
          }
          miniPic={projectImg2}
          description={
            `This project is an English school application designed to manage all aspects of the educational process, from student registration to level management and exam administration. The app includes the following features:<br>
             <b><mark>Student Registration: </b></mark> Streamlines the enrollment process for new students.<br>
             <b><mark>Level Management: </b></mark> Organizes students into appropriate levels based on their proficiency.<br>
             <b><mark>Exam Management: </b></mark> Facilitates the creation, scheduling, and grading of exams.<br>
             <b><mark>Group Management: </b></mark> Handles the formation and management of student groups for various activities.`
          }
          projectPic={projectImg2}
          tools={["HTML", "CSS", "TailWind", "JS", "JQuery", "PHP", "MySQL"]}
          tasks={null}
        />


<ProjectCard
          projectName={"CimaFlix "}
          shortDescription={
            "Cimaflix is a user-friendly API-driven application designed for movie and series enthusiasts."
          }
          description={
            `Cimaflix is a user-friendly API-driven application designed for movie and series enthusiasts. Users must register and log in to access a rich database of film and television content. The platform offers features such as:<br>
            <b><mark>User Authentication: </b></mark> Secure account creation and login for personalized experiences.<br>
            <b><mark>User Profiles: </b></mark> Customize your profile and track your viewing history.<br>
            <b><mark>Watchlist: </b></mark> Save your favorite titles and keep track of what you want to watch next.<br>
            <b><mark>Search and Filter Options: </b></mark> Easily find content based on genres, release dates, and ratings.<br>
            <br>
            <b class="text-gray-500"> Check The Project On Github : <b class="text-blue-500"><a href="https://github.com/ouss2022aich/CimaFlix"> CimaFlix </a> </b></b>`
          }
          miniPic={popcorn}
          projectPic={projectImg6}
          tools={["HTML", "CSS", "TailWind", "JS", "PHP", "MySQL" ,  "Laravel" , "Sail"]}
          tasks={null}
        />

        <ProjectCard
          projectName={"GalaxyBenef"}
          shortDescription ={'large-scale application named Galaxybenef, based on network marketing and comprising three platforms.'}
          description={`I developed a large-scale application named Galaxybenef, based on network marketing and comprising three platforms.
                        <br><mark>- Galaxy:</mark> The main application allowing clients to purchase a pack, become members, and invite other members to join the system to generate earnings.<br><mark>- Achat:</mark> A showcase platform allowing suppliers to display their products and gain visibility by purchasing updates, similar to the concept of advertising.
                        <br><mark>- Partage:</mark> A referral system.
                      `}
          projectPic={projectImg}
          miniPic={projectImg}
          tools={["HTML", "CSS", "Bootstrap", "JS", "JQuery", "PHP", "MySQL"]}
          tasks={ ['Development of Back-end and Front-end platforms',
                   'Ensure data security and user access',
                   'Handling and configuring servers',
                   'Database design and implementation',
                   'Maintain platforms as needed',
                   'Ensure cross-platform optimization for mobile phones',
                   'Design and creation of the API for mobile developers',
            ] }
        />
        <ProjectCard
          projectName={"Social App Mockup"}
          shortDescription ={'A modern Mockup for a social media app.'}
          description={"A modern Mockup for a social media app"}
          projectPic={projectImg4}
          tasks={null}
          miniPic={projectImg4}
          tools={["Figma", "Gradient Design" , "Responsive Design"]}
        />
        <ProjectCard
          projectName={"Car Services App Mockup"}
          shortDescription ={'a modern gradient mockup for car services app.'}
          description={"a modern gradient mockup for car services app"}
          projectPic={projectImg5}
          miniPic={projectImg5}
          tools={["Figma", "Gradient Design" , "Responsive Design"]}
          tasks={ null }
        />
        <ProjectCard
          projectName={"Documents Financiers App"}
          shortDescription={
            "This Project is an app that allow the user to input the general balance of  this year (N) and the past year (n-1) and output all of the 12 Finances Docuements For Accounting Purposes "
          
          }
          description={
            "This Project is an app that allow the user to input the general balance of  this year (N) and the past year (n-1) and output all of the 12 Finances Docuements For Accounting Purposes "
          }
          miniPic={projectImg3}
          projectPic={projectImg3}
          tools={["Excel", "VBA"]}
          tasks={ null }
        
        />
      </div>
    </div>
  );
}
