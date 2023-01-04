import Button from "../Button/Button.component";
import { signInGooglePopup,signInUserWithMailandPassword } from "../../utils/firebase/firebase.utils";
import "../Signin/Signin.styles.scss";
import { useState } from "react";
import Form from "../Form/form.component";


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
            
            <h1> Already have an account ?</h1>
            <span> <p>Sign-in Here</p></span>
            <form onSubmit={SignInEmailandPass}>
            <Form type="email" value={Email} onChange={handleChange} name="Email" label={"Email"}/>
            <Form type= "password" value={Password} onChange={handleChange} name="Password" label={"Password"}/>
            <div className="buttons-container">
            <Button type="submit" buttontype={"SignIn"} />
            <Button  type="button" onClick={SignInGoogleuser} buttontype={"Google"} />
            </div>     
            </form>  
            </div>     
            )
}
            export default Signin;
