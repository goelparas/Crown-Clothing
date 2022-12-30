
import "../Button/button.styles.scss";


const BUTTON_TYPE_HANDLER = {
    Google:"google-sign-in",
    Signup: "inverted",
    AddtoCart:"inverted",
     GoToCheckOut:"inverted"
}

const Button =({buttontype, ...otherprops})=>{
    return (
        
         <button   className={`button-container ${BUTTON_TYPE_HANDLER[buttontype]}`} {...otherprops}>{buttontype}</button>
        
    )
}


export default Button;