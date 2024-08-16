import Input from "../components/Input";
import TextArea from "../components/TextArea";
import FilledButton from "../components/FilledButton";
export default function ContactForm() {
   
     return (
        <form action="https://api.web3forms.com/submit" method={"post"} className="form flex flex-col gap-4 min-w-80">
                  <input type="hidden" name="access_key" value="c0110f28-2ae9-4113-90c6-cc4b9d96e5ea"></input>
                  <div className="flex flex-col sm:flex-row gap-4" >
                  <Input name={"first name"} isRequired={ true } placeholder={"Enter your first name"} />
                  <Input name={"last name"} isRequired={ true } placeholder={"Enter your last name"} />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4" >
                  <Input name={"company"} isRequired={ false } placeholder={"Enter your company name"} />
                  <Input name={"email"} isRequired={ true } placeholder={"Enter your email adress"} />
                  </div>

                  <div className="flex flex-col sm:flex-row" >
                   <TextArea name={"Message"} isRequired={ true } placeholder={"Tell me about your project"} />
                  </div>

                  <div className="flex flex-col md:flex-row justify-center items-center"  >
                     <FilledButton content={"Submit"} />
            
                  </div>
                        
              </form>
     )


}