import Button from "../Button/Button.component";
import { signInGooglePopup,signInUserWithMailandPassword } from "../../utils/firebase/firebase.utils";
import "../Signin/Signin.styles.scss";
import { useState } from "react";
import Form from "../form/form.component";


let defaultField = {
    Email: "",
    Password: ""
}

const Signin = () => {
    const [FormField, setFormField] = useState(defaultField);
    const { Email, Password } = FormField;
   

    // Sign in with Google

    const SignInGoogleuser = async () => {
    await signInGooglePopup();    
    }

    // Credential  handler 

    const handleChange=(event)=>{
        
        const {value ,name} = event.target;
        setFormField({...FormField,[name]:value})
        
    }

   // Sign in with email and passcode
    
    const SignInEmailandPass = async (event) => {
        event.preventDefault();   

        try
        {
         await signInUserWithMailandPassword(Email,Password);
            setFormField(defaultField)
          
        }
        catch(error)
        { 
           switch (error.code)
           {
            case "auth/wrong-password":
                alert('incorrect password for email');
                break;
             case "auth/user-not-found":
                alert ("No user Found please Create new account");
                break;
            default:
                alert(error.code)

           }
        }

    }



    return (

         <div className="sign-in-container">
            <div> 
            <h2> Already have an account ?</h2>
            <h2> Sign-in Here</h2>
            <form onSubmit={SignInEmailandPass}>
            <Form type="email" value={Email} onChange={handleChange} name="Email" label={"Email"}/>
            <Form type= "password" value={Password} onChange={handleChange} name="Password" label={"Password"}/>
            <Button type="submit" buttontype={"Sign in"} />
            </form>       
            </div>
            <div className="buttons-container">
            <Button  type="button" onClick={SignInGoogleuser} buttontype={"Google"} />
            </div>     
            </div>
            )
}
            export default Signin;
