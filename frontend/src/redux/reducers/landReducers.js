/* eslint-disable default-param-last */
import {
    LAND_REGISTER_REQUEST,
    LAND_REGISTER_SUCCESS,
    LAND_REGISTER_FAIL
} from '../types/land';

export const landReducer = (state = {}, action) => {
    switch (action.type) {
        case LAND_REGISTER_REQUEST:
            return { loading: true };

        case LAND_REGISTER_SUCCESS:
            return { loading: false, landInfo: action.payload };

        case LAND_REGISTER_FAIL:
            return { loading: false, error: action.payload };

        default:
            return state;
    }
};
