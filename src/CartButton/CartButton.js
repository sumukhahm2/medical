import React,{Fragment} from 'react'

const CartButton=()=>{
  return(
    <Fragment>
   <div>
      <button className='cart-btn' > <i className="fa fa-shopping-cart"></i>Your Cart <div className='cart-count'>{inputAmount}</div></button>
     </div>
     </Fragment>
   

  );
}

export default CartButton