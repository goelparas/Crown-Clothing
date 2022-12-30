import { Route,Routes } from "react-router-dom";
import Home  from "./routes/Home/Homes.component"
import Navigation  from "./routes/Navigation/Navigation.component";
import Authentication from "./routes/Authentication/Authentication";
import Shop from "./routes/Shop/Shop.component";

import CheckOutContainer from "./component/Check-Out/CheckOut-Container/Check-Out-container.component";


const  App=()=>{
console.log("App");

  return (
     <Routes >
         <Route path="/" element={<Navigation/>}> 
             <Route  index = {true} element={<Home/>}/>
             <Route  path = "shop/*"  element={<Shop/>}/>
              <Route path="checkout"  element={<CheckOutContainer/>}/>
             <Route path="auth" element={<Authentication/>}/>
         </Route>
     </Routes>
  );
}

export default App;
