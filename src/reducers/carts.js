import * as types from '../contants/typeAction';
import randomstring from 'randomstring';

var data = JSON.parse(localStorage.getItem('carts'));

const initalState = data ? data:[];


const findIndex = (products,id) =>{
    var result = -1;
    
    for(var i = 0;i<products.length;i++){

        if(products[i].product.id===id){    
            result = i;          
        }
    }
    return result;
}



const carts =  (state = initalState, action) => {
    switch (action.type) {
        case types.SHOW_PRODUCTS:
           
            return [...state];
        case types.ADD_TO_CART:
           

          if(findIndex(state,action.product.product.id) !== -1){
            var index = (findIndex(state,action.product.product.id));
            
           state = [
               ...state.slice(0, index),
               {
                    ...action.product,
                    quanlity:state[index].quanlity + action.quanlity 
               },
               ...state.slice(index+1)
           ];
            
         
          }
          else{
              state = [...state,action.product];
              console.log('th2');
          }
          
          
          
           localStorage.setItem('carts',JSON.stringify(state));
           return [...state];
        case types.DELETE_PRODUCT_CART:
            console.log(action);
          if(findIndex(state,action.product.product.id) !== -1){
            var index = (findIndex(state,action.product.product.id));
            
           state = [
               ...state.slice(0, index),
               
               ...state.slice(index+1)
           ];
            
         
            }

           localStorage.setItem('carts',JSON.stringify(state));
            return [...state];


        default:
            return [...state];
    }
} 

export default carts;