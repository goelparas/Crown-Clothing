

import "./form.style.scss"
const Form =({label ,...otherprops})=>{

    

    return (
        <div className="group">    
         <label >{label}</label>
         <input  className='form-input' {...otherprops} />
        </div>
    )
}

export default Form; 
