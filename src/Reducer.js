const reducer = (state, action) => {
     if (action.type === 'DATA') {
      return{
        ...state,
        menu: [...state.menu, action.payload]
      }
     }
       if (action.type === "REMOVE_ITEM") {
         return {
           ...state,
           setItem: state.setItem.filter((curElem) => {
             return curElem.id !== action.payload;
           }),
         };
       }
       switch(action.type){
        case 'ADD_TO_CART':
          const nextState = [...state.setItem];
          const itemIndex = nextState.findIndex(item => item.id === action.payload.id);
          if (itemIndex >= 0) {
            const newQuantity = parseInt(nextState[itemIndex].quantity + action.payload.quantity);
            nextState[itemIndex] = {
              ...action.payload,
              quantity : newQuantity,
            };
          }else{
            nextState.push(action.payload);
          }
          return{
            ...state,
            setItem: nextState,
          };
       }
    
       if (action.type === "CLEAR_CART") {
         return { ...state, setItem: [] };
       }
     
       if (action.type === "INCREMENT") {
         const updatedCart = state.setItem.map((curElem) => {
           if (curElem.id === action.payload) {
             return { ...curElem, quantity: curElem.quantity + 1 };
           }
           return curElem;
         });
     
         return { ...state, setItem: updatedCart };
       }
     
       if (action.type === "DECREMENT") {
         const updatedCart = state.setItem
           .map((curElem) => {
             if (curElem.id === action.payload) {
               return { ...curElem, quantity: curElem.quantity - 1 };
             }
             return curElem;
           })
           .filter((curElem) => curElem.quantity !== 0);
         return { ...state, setItem: updatedCart };
       }
     
       if (action.type === "GET_TOTAL") {
         let { totalItem, totalAmount } = state.setItem.reduce(
           (accum, curVal) => {
             let { price, quantity } = curVal;
     
             let updatedTotalAmount = price * quantity;
             accum.totalAmount += updatedTotalAmount;
     
             accum.totalItem += quantity;
             return accum;
           },
           {
             totalItem: 0,
             totalAmount: 0,
           }
         );
         return { ...state, totalItem, totalAmount };
       }
       if(action.type === "FILLTER"){
        return{
          ...state,
          item: state.menu.filter((curElem)=>{
            return curElem.catageory === action.payload;
          })
        }
       }
       return state;
     };

export default reducer

