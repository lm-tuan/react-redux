import * as types from '../contants/typeAction';
import randomstring from 'randomstring';


const initalState = [
    {
        product:
            {
                id: randomstring.generate(),
                name:'Iphone 6 Plus',
                description: 'Sản phẩm do apply sản xuất',
                price:500,
                inventory:4
            }
        ,
        quanlity: 5
    },
    {
        product:
            {
                id: randomstring.generate(),
                name:'Iphone 7 Plus',
                description: 'Sản phẩm do apply sản xuất và china',
                price:400,
                inventory:5
            }
        ,
        quanlity: 3
    },
];

const products =  (state = initalState, action) => {
    switch (action.type) {
        case types.SHOW_PRODUCTS:
            console.log(action);
            return state;
        default:
            return state;
    }
} 

export default products;