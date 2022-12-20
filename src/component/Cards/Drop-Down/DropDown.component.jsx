import Button from "../../Button/Button.component";

import "./Drop-Down.styles.scss";
const DropDown =()=>{
    return (
        <div className="cart-dropdown-container">
        <div className="empty-message">
        Cart is Empty
        </div>
        <Button buttontype={"GoToCheckOut"}></Button>
        </div>
    )
}

export default DropDown;
