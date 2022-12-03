import { Route,Routes } from "react-router-dom";
import Home  from "./routes/Home/Homes.component"
import Navigation  from "./routes/Navigation/Navigation.component";
import Signin from "./routes/Sign-up/Signin.component";
import Shop from "./routes/Shop/Shop.component";

const  App=()=>{

  return (
     <Routes >
         <Route path="/" element={<Navigation/>}> 
             <Route  index = {true} element={ <Home/>} />
             <Route path = "shop"  element={<Shop/>}/>
             <Route path="sign-in" element={<Signin/>}/>
         </Route>
     </Routes>
  );
}

export default App;
