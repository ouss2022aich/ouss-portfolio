import React from "react";


interface SectionProps {
  classes: string;
  children: React.ReactNode;
  
}

const Section : React.FC<SectionProps> = ({ classes, children }) => {

      return (
           <section className={ `section flex ${classes}` } >
             { children }
           </section>
      )
     
}

export default Section;