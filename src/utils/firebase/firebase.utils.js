import {initializeApp} from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc ,  getFirestore, setDoc,getDoc, Firestore } from "firebase/firestore";

//  export {createUserDocumentFromAuth} from  "./firebase.createDoc"


const firebaseConfig =
 {
    apiKey: "AIzaSyAiyij6MdDz0Cqnb8rWCVGol-Jx8EytUJo",
    authDomain: "crown-clothing-ddbd1.firebaseapp.com",  
    projectId: "crown-clothing-ddbd1", 
    storageBucket: "crown-clothing-ddbd1.appspot.com", 
    messagingSenderId: "993252936708", 
    appId: "1:993252936708:web:985d70fdfbeb64301a3951" 
  };

const app = initializeApp(firebaseConfig); // Initialisation step  firebaseconfig is the Projects id at firebase server
// console.log(app ,"this is the application ") 

const provider  = new GoogleAuthProvider(); // initialising the google provider on client side

  provider.setCustomParameters(     // this will internally open the prompt setting for the select account
    {
    prompt:'select_account' 
    }
   )

  export const auth = getAuth();    //  its basically a single tabel
  
  export const signInGooglePopup = ()=>{
  return signInWithPopup(auth,provider); // auth me check kro if provider is present then give the information  and if not present make one
  }

  export const db =  getFirestore();
  export const createUserDocumentFromAuth = 
  async (userAuth)=>
  {
      const userRef = doc(db, 'user', userAuth.uid);  // giving the document refrence inside db database in user collection with this uid
      console.log(userRef)  // this is the document 
      
      const userSnapShot = await getDoc(userRef);
      console.log(userSnapShot)

      if(!userSnapShot.exists())
      {
         const { email,displayName } = userAuth;
         const createdAt = new Date();

         try {
          await setDoc(userRef ,{displayName ,email,createdAt}) ;

         }
         catch (error){
            console.log("error is creating the user " , error)
         }
      }
      return userRef
  }
