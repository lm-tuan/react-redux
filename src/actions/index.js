import * as types from './../contants/typeAction';

export const ListAll = () => {
    return {
        type:types.SHOW_PRODUCTS
    }
}

export const onAddToCart = (product,quanlity) => {
    return {
        type:types.ADD_TO_CART,
        product,
        quanlity
    }
} 