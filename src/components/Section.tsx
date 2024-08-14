import { ReactElement } from "react";

export default function Section ({ classes, children }){

      return (
           <section className={ `section flex ${classes}` } >
             { children }
           </section>
      )
     
}