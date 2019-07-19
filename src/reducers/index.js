import { combineReducers } from 'redux';
import products from './products';
import carts from './carts';

const myReduer = combineReducers({
    products,
    carts
});


export default myReduer;

