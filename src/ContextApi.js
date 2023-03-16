import React, {useEffect, useContext, useReducer} from "react";
import reducer from "./Reducer";
import { products } from "./Product";

const ContextApi = React.createContext();
const AppProvider = ({children})=>{
  const allCatvalue = [... new Set(products.map((curElm) =>{ 
    return curElm.catageory }))]
 const initialState =({
  item: [],
  menu: products,
  catVal:allCatvalue, 
  setItem:[],
  totalAmount: 0,
  totalItem: 0,
 })


const [state, dispatch] = useReducer(reducer, initialState);

const AddToCart = (data) =>{
dispatch({
  type:"ADD_TO_CART",
  payload: data
})
}
const removeItem = (id) => {
  return dispatch({
    type: "REMOVE_ITEM",
    payload: id,
  });
};

// clear the cart
const clearCart = () => {
  return dispatch({ type: "CLEAR_CART" });
};

// increment the item
const increment = (id) => {
  return dispatch({
    type: "INCREMENT",
    payload: id,
  });
};

// decrement the item
const decrement = (id) => {
  return dispatch({
    type: "DECREMENT",
    payload: id,
  });
};

const filterBtn = (curElm) =>{
 return dispatch({
  type:"FILLTER",
  payload: curElm,
 });
};

// we will use the useEffect to update the data
useEffect(() => {
  dispatch({ type: "GET_TOTAL" });
  // console.log("Awesome");
}, [state.setItem]);


return <ContextApi.Provider value={{...state, removeItem, clearCart, increment, decrement,AddToCart,filterBtn}}>
           {children}   
       </ContextApi.Provider>

}

// custom Global hooks

const useGlobal = () =>{
       return useContext(ContextApi);
};

export {ContextApi,AppProvider,useGlobal};
