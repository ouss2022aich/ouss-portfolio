import Input from "../components/Input";
import TextArea from "../components/TextArea";
import FilledButton from "../components/FilledButton";
export default function ContactForm() {
   
     return (
        <form className="form flex flex-col gap-4 min-w-80">
                  <div className="flex flex-col sm:flex-row gap-4" >
                  <Input name={"first name"} placeholder={"Enter your first name"} />
                  <Input name={"last name"} placeholder={"Enter your last name"} />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4" >
                  <Input name={"Company"} placeholder={"Enter your company name"} />
                  <Input name={"email"} placeholder={"Enter your email adress"} />
                  </div>

                  <div className="flex flex-col sm:flex-row" >
                  <TextArea name={"Message"} placeholder={"Tell me about your project"} />
            
                  </div>

                  <div className="flex flex-col md:flex-row justify-center items-center"  >
                     <FilledButton content={"Submit"} />
            
                  </div>
                        
              </form>
     )


}