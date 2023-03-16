import React from 'react'
import { useNavigate } from "react-router-dom";
import { useGlobal } from '../ContextApi';
import {FaPlus, FaMinus,FaRegTrashAlt} from "react-icons/fa";

const Cart = () => {
  let navigate = useNavigate()
    const BackToShop = () =>{
     navigate('/');
    }
  const { setItem, clearCart, totalItem, totalAmount,removeItem, increment, decrement} = useGlobal();
  if (setItem.length === 0) {
    return (
      <>
        <header>
          <div className="cart-icon mt-2">
          <img src="./images/cart1.png" alt="cart" />
          </div>
        </header>
      <hr/>
        <section className="text-center">
          <h1>Shopping Cart</h1>
          <p className="total-items">
            Cart is Emty
          </p>
          <button className='btn btn-warning' onClick={BackToShop}>Back To shopping</button>
        </section>
      </>
    );
  }
  
  return (
      <>
        <header>
          <div className="cart-icon mt-2">
            <img src="./images/cart1.png" alt="cart" />
            <p className='text-light'>{totalItem}</p>
          </div>
        </header>
          <hr/>
        <section className="text-center">
          <h1>Shopping Cart</h1>
          <p className="total-items">
          <span className="total-items-count">{totalItem} </span>{" "}
            items in shopping cart
          </p>
        </section>
      <div className='container justify-content-center border bg-light'>
    <div className='row mt-2 mb-3'>
       {
        setItem.map((curElm,index) =>{
          const {id, description, title, img, price, quantity} = curElm;
          return(
            <>
            <div className='col-md-4 col-sm-12' >
          <div className="card mt-2" style={{width: "18rem"}} key={index}>
  <img className="card-img-top w-100" src={img} alt={img}/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p>{description}</p>
    <div className="add-minus-quantity">
    <FaMinus onClick={() => decrement(id)}/>
          <input type="text" className='bg-light' placeholder={quantity} disabled  style={{width:'30%',textAlign:'center',margin:'3px'}}/>
          <FaPlus className="fas fa-plus add" onClick={() => increment(id)}/>
        </div>
        <div className="price">
          <h5 className='m-2'> Price {price * quantity}</h5>
        </div>
        <div className="remove-item">
          <FaRegTrashAlt
            onClick={() => removeItem(id)} />
        </div>
  </div>
</div>
</div>
</>
          )
        })
       }
       </div>
      </div>
        <div className="card-total text-center mt-3">
          <h3>
            Cart Total : <span>{totalAmount} Pkr</span>
          </h3>
          <button className='btn btn-success p-2'>Checkout</button>
          <button className="btn btn-danger p-2 m-2" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </>
      )}

export default Cart