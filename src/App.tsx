import "./App.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import OutlineButton from "./components/OutlineButton";
import FilledButton from "./components/FilledButton";
import profileImg from "./assets/images/avatar.png";
import SkillPanel from "./components/SkillPanel";
import SocialPanel from "./components/SocialPanel";

import ContactForm from "./components/ContactForm";
import ProjectCardGroup from "./components/ProjectCards";




function App() {
  return (
    <>
      <Navbar />
      <Section classes="flex-col text-white items-center md:flex-row gap-10">
        <div className="flex flex-col order-2">
          <div className="mb-5">
            <h1 className="font-['Squad'] text-5xl font-bold">HI I'M</h1>
            <h3 className="font-['Squad'] text-4xl text-violet-800 font-medium">
              AICHAOUI OUSSAMA
            </h3>
          </div>
          <div className="mb-10">
            <p className="text-sm">
              I am a Full Stack Developer with 7 years of experience in the
              field, including professional experience for over a year in
              full-stack web development and information system administration.
              I specialize in front-end (HTML, CSS, JS) and back-end (PHP,
              Node.js, SQL) technologies. I’m proficient in Delphi, React.js,
              React Native, and MongoDB, and use UML and Merise for database
              design.
            </p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <a href="#projects"><OutlineButton content={"MY POJECTS"} setModal={null} /></a>
            <FilledButton content={"DOWNLOAD MY RESUME"} />
          </div>
        </div>
        <div className="md:max-w-60 max-w-40 order-1">
          <img src={profileImg} alt="" />
        </div>
      </Section>
      <SkillPanel />
      <Section classes="flex-col text-white items-center md:flex-row gap-5">
        <div className="w-full">
          <h1 id="contact" className="self-start md:text-left text-center text-3xl my-10 md:text-5xl">
            Contacts.
          </h1>
          <div className="flex justify-center">
            <div className="flex flex-col gap-4">
              <div className="flex sm:flex-row flex-col gap-4">
                <SocialPanel ext_content={null} type={2} url={"https://www.linkedin.com/in/oussama-aichaoui/"} content={ "LINKEDIN" } />
                <SocialPanel url={""} ext_content={null} type={1} content={ "Fiverr" } />
              </div>
              <div className="flex sm:flex-row flex-col gap-4">
                <SocialPanel  url={""} type={4} content={ "Phone" } ext_content={"+213792333216"} />
                <SocialPanel ext_content={null} type={3} url={"mailto:ouss.aich2022@gmail.com"} content={ "Email" } />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section classes="flex-col text-white items-center md:flex-row gap-5">
        <div className="w-full">
          <h1 id="projects" className="self-start md:text-left text-center text-3xl my-10 md:text-5xl">
            projects.
          </h1>
          <div className="flex justify-center">
            <div className="flex flex-col gap-4">
              
               <ProjectCardGroup/>
            </div>
          </div>
        </div>
      </Section>

      <Section classes="flex-col text-white items-center md:flex-row gap-5">
        <div className="w-full">
          <h1 id="hire" className="self-start md:text-left text-center text-3xl  md:text-5xl my-10">
            Hire Me.
          </h1>
          <div className="flex justify-center">
            <div className="form-wrapper bg-black p-10 flex flex-col justify-center items-center rounded-2xl ">
              <h1 className="text-2xl my-5"> Let's Talk </h1>
              <ContactForm />
              
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

export default App;
