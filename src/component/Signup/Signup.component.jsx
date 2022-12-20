
import { useState ,useContext } from "react";
import { DocumentFromAuth, createUserWithEmailAndPasswordAuth } from "../../utils/firebase/firebase.utils"
import Button from "../Button/Button.component";
import Form from "../form/form.component";
import "./Signup.component.scss"
import { UserContext } from "../Context/user-context.component";

let defaultFields = {
    password: "",
    ConfirmPassword: "",
    displayName: "",
    email: ''
}
const Signup = () => {
    const [formField, setformField] = useState(defaultFields);
    const { password, ConfirmPassword, displayName, email } = formField;
    const {setcurrentUser}= useContext(UserContext);

    
    const handleChange = (event) => {
        const { value, name } = event.target;
        setformField({ ...formField, [name]: value })
    }
    const CreateAccount = async (event) => {

        event.preventDefault();   // prevent event to make the default behavior like forms reload the page which is not ok for auth   // console.log(event.target) // this print the whole forms object containing every field in it 
        if (password !== ConfirmPassword || email === "" || displayName === "") {
            alert("Fill the form correctly ");
            return

        }
            let { user } = await createUserWithEmailAndPasswordAuth(email, password);
            setcurrentUser(user);

         try {

            await DocumentFromAuth(user, { displayName });
           

        }
        catch (error) {
            //    console.log(error);

        }
        setformField(defaultFields);
    }




    return (
        <div className="sign-up-container">
            <h2> Don't have an account?</h2>
            <span> <h3>Sign up for the email address</h3></span>
            <form onSubmit={CreateAccount}>
                <Form type="text" value={displayName} name="displayName" onChange={handleChange} label="Name" />
                <Form type="password" value={password} name="password" onChange={handleChange} label="Password" />
                <Form type="password" value={ConfirmPassword} name="ConfirmPassword" onChange={handleChange} label="Confirm Password" />
                <Form type="email" value={email} onChange={handleChange} name="email" label="Email" />
                <Button type="submit" buttontype={"Signup"} />
            </form>
        </div>
    )

}

export default Signup;
