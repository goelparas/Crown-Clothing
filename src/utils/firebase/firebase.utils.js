import {initializeApp} from "firebase/app";
import { getAuth,
   GoogleAuthProvider,
   signInWithPopup,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut,
   onAuthStateChanged   
}
      from "firebase/auth";
import { doc ,  getFirestore, setDoc,getDoc,   } from "firebase/firestore";


const firebaseConfig =
 {
   apiKey: "AIzaSyAiyij6MdDz0Cqnb8rWCVGol-Jx8EytUJo",
   authDomain: "crown-clothing-ddbd1.firebaseapp.com",
   projectId: "crown-clothing-ddbd1",
   storageBucket: "crown-clothing-ddbd1.appspot.com",
   messagingSenderId: "993252936708",
   appId: "1:993252936708:web:985d70fdfbeb64301a3951"
};


const provider = new GoogleAuthProvider();
//                                                              initialising the google provider on client side
provider.setCustomParameters(                                   // this will internally open the prompt setting for the select account
   {
      prompt: 'select_account'
   }
)
//                                      INITIALISE                                                                

//                                                                    console.log(app ,"this is the application ") 
const app = initializeApp(firebaseConfig);                           // Connnect to firebase 
export const db = getFirestore();                                    // Intialise DataBase 
export const auth = getAuth(app);                                    //  intialise Autherization 

//                                     sign in with Google 

export const signInGooglePopup = () => {
   return signInWithPopup(auth, provider);                          // auth me check kro if provider is present then give the information  and if not present make one
}


//                                              Creating Document                                                   
export const DocumentFromAuth = async (userAuth, additonalinfo = {}) =>     //  {display : "name"} ==> additional ={display:"name"}
{
   const docRef = doc(db, 'user', userAuth.uid);                            // Create Document  with user.uid as a name  of the document  
   const userSnapShot = await getDoc(docRef);                              // it check document present or not 

   if (!userSnapShot.exists()) {
      const { email, displayName } = userAuth;
      const createdAt = new Date();
      try {
         console.log(additonalinfo);
         await setDoc(docRef, { displayName, email, createdAt, ...additonalinfo });

      }
      catch (error) {
         console.log("error in creating the user ", error)
      }
   }
   return docRef;
}

export const signInUserWithMailandPassword = async (email, password) => {

     return  await signInWithEmailAndPassword(auth, email, password);
   
  
}

export const createUserWithEmailAndPasswordAuth = async (email, password) => {

   try {

      return await createUserWithEmailAndPassword(auth, email, password);
   }
   catch (error) 
   {
      console.log(error.message)
   }

}

   //                                                  SignOut feature
export const signOutUser=async  ()=>{

   return await signOut(auth);

}

export const authStateChange =(callback)=>{ 
   return onAuthStateChanged(auth,callback)                               // onAuthstate auth me jaega and user ko pass karega callback function me 
}



/*
 *{
   next: callback
   error: errorfunction
   completed: complete callback which is given to the unsubscriber varibale that we mention before in Context 
 } 
 * 
 * 
 * 
 */