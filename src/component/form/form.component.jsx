

import "./form.style.scss"
const Form =({label ,...otherprops})=>{

    

    return (
        <div className="group">    
         <label className="form-input-label" >{label}</label>
         <input  className='form-input' {...otherprops} />
        </div>
    )
}

export default Form; 
