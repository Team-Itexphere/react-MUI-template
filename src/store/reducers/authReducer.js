// import { AUTH, LOGOUT, NEWDATA } from './constant';

import { AUTH, LOGOUT, NEWDATA } from "store/actions/actions.types";

const authReducer = (state = { authData: null, newData: '' }, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }))
            return { ...state, authData: action?.data };

        case NEWDATA:
            // localStorage.setItem('profile', JSON.stringify({ ...action?.data }))
            return { ...state, newData: action?.data };
        
        case LOGOUT:
            localStorage.clear();

            return { ...state, authData: null };

        default:
                return state;
    }
}

export default authReducer;