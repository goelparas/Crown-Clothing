


import Signup from "../../component/Signup/Signup.component";
import Signin from "../../component/Signin/Signin.component"
import "./Auth.styles.css"

const Authentication = () => {

    // useEffect(()=>{
    //    async function fun1  (){
    //         const result  =  await getRedirectResult(auth);   // get redirect result is a method from firebase Auth 

    //         console.log(result , "Response from the redirect- result authentication");
    //     }
    //     fun1()


    // }, [])



    // const logwithRedirect = async () => {
    //     const response = await signinRedirect();

    //     // console.log(response); // this wouln't give anyresult  //  because page is redirect to other url and the site will restart

    //     const ref=  createUserDocfromAuth(response.user);

    // }
    return (
        <div className="Auth-container">
            <Signin  />
             <Signup/>
        </div>
    )
}
export default Authentication;















