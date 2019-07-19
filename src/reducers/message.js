import * as messages from '../contants/message';
import * as types from './../contants/typeAction';


const initalState = messages.MSG_WELLCOME;


const message =  (state = initalState, action) => {
    switch (action.type) {
        case types.CHANGE_MESSAGE :
            console.log(action);

            return [...action.message];
        
        default:
            return [...state];
    }
} 

export default message;