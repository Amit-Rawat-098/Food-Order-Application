import react,{useRef, useContext} from "react";
import CartContext from '../../Store/cart-context';
const OrderForm=(props)=>{
       const ctx= useContext(CartContext);
const isEmpty= value=> value.trim() === 0;
const isFiveChar= value=> value.trim().length === 5; 

const nameRef=useRef();
const addressRef=useRef();
const codeRef=useRef();


const orderSubmit=(event)=>{
event.preventDefault();
const nameEntered= nameRef.current.value;
const addressEntered=addressRef.current.value;
const codeEntered=codeRef.current.value;

const isValidName= !isEmpty(nameEntered);
const isValidAddress= !isEmpty(addressEntered);
const isValidCode= isFiveChar(codeEntered);

const formIsValid= isValidName && isValidAddress && isValidCode;
if(!formIsValid){
       console.log("Fill the entry properly");
}else{
       const details={
              Your_name: nameEntered,
              Your_address: addressEntered,
              Your_code: codeEntered,
              Your_order: ctx.item
       }

       console.log(details);

}

       }


return (<>
<div >
<form onSubmit={orderSubmit}>
<div>
<label htmlFor="name">Name</label>
<input type='text' id="name" ref={nameRef}></input>
</div>
<div>
<label htmlFor="address">Address</label>
<input type='text' id="address" ref={addressRef}></input>
</div>
<div>
<label htmlFor="code">Pin Code</label>
<input type='text' id="code" ref={codeRef}></input>
</div>
<div>
<button type="button" onClick={props.close}>CLOSE</button>
<button >Confirm</button>
</div>
</form> 
</div>
 </>)

}

export default OrderForm;