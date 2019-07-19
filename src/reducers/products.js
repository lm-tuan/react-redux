import * as types from '../contants/typeAction';
import randomstring from 'randomstring';


const initalState = [
    {
        product:
            {
                id: randomstring.generate(),
                name:'Iphone 6 Plus',
                description: 'Sản phẩm do apply sản xuất',
                imageLink:"https://cdn.fptshop.com.vn/Uploads/Originals/2016/12/13/636172339622394948_apple-Iphone-6s-gold-1.jpg",
                price:500,
                inventory:4,
                rating:3
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
                imageLink:"https://imgs.viettelstore.vn/images/Product/ProductImage/medium/650532688.jpeg",
                inventory:5,
                rating:4
            }
        ,
        quanlity: 3
    },
    {
        product:
            {
                id: randomstring.generate(),
                name:'SamSung J7 Pro',
                description: 'Sản phẩm do apply sản xuất và china',
                price:400,
                imageLink:"https://ak1.ostkcdn.com//images/products/14559741/Samsung-Galaxy-S7-Edge-Invisible-Bumper-Agua-Clear-Green-Inner-Frame-Ultra-thin-Hybrid-Case-548a3e12-2fb4-4aac-b800-c43064d8b821.jpg",
                inventory:5,
                rating:4
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