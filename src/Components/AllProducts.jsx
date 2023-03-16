import React from 'react'
import { NavLink } from 'react-router-dom';
import Button from './Button';
import { products } from '../Product';
import { useGlobal } from '../ContextApi';

const AllProducts = () => {
       const {setItem, AddToCart} = useGlobal();
      
  return (
    <>
     <NavLink to='/cart'>
          <div className="cart-icon mt-2"><img src="./images/cart1.png" alt="cart" /> {setItem.length > 0 &&
            <p className='text-light'>{setItem.length}</p>}
          </div>
        </NavLink>
        <hr />
        <Button />
        <h1 className='text-center  mb-2 p-2'>Products</h1>
        <div className='container'>
        <div className='row'>
          {
            products.map((curElm, index) => {
              const { id, description, title, img, price, } = curElm;
              return (
                <>
                  <div className='col-md-4 col-sm-12' key={id}>
                    <div className="card mt-2" style={{ width: "18rem" }}>
                      <img className="card-img-top w-100" src={img} alt={img} />
                      <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p>{description}</p>
                        <div className="price">
                          <h5 className='m-2'> Price {price}</h5>
                        </div>
                        <button className='btn btn-warning' onClick={() => AddToCart(curElm)}>Add to cart</button>
                      </div>
                    </div>
                  </div>
                </>
              )
            })
          }

        </div>
      </div>
    </>
  )
}

export default AllProducts