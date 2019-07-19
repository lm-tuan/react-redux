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

export const onChangeMessage = (message) => {
    return {
        type:types.CHANGE_MESSAGE,
        message
        
    }
}
export const OnDeleteProductCart = (product) => {
    return {
        type:types.DELETE_PRODUCT_CART,
        product
        
    }
}