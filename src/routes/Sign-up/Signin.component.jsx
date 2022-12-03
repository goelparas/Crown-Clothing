
import { signInGooglePopup ,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
const Signin =()=>{
    const logGoogleuser = async ()=>
    {
        const response  = await signInGooglePopup(); // This basically returned the Object include info like access token ,uid 
        console.log(response)
        console.log(response.user.uid)
        createUserDocumentFromAuth(response.user)
        
    }
    return (
        <div>Sign-in <button onClick={logGoogleuser}>Signin with Google</button></div>
    )
}
export default Signin;
