import axios from 'axios';
import {
    LAND_REGISTER_REQUEST,
    LAND_REGISTER_SUCCESS,
    LAND_REGISTER_FAIL,
} from '../types/land';

import { DOMAIN } from '../constants';

export const landResister =
    (
        title,
        location,
        address,
        date,
        houseType,
        heating,
        size,
        floor,
        cost,
        price,
        priceMonth,
        priceYear,
        maintenanceFee,
        loanRepayment,
        utilityBill,
        structure,
        // image,
        desc,
        registrant
    ) =>
    async (dispatch) => {
        try {
            dispatch({
                type: LAND_REGISTER_REQUEST,
            });

            const config = {
                headers: {
                    'Content-type': 'application/json',
                },
            };

            const { data } = await axios.post(
                `${DOMAIN}/api/land/register/`,
                {
                    title,
                    location,
                    address,
                    date,
                    houseType,
                    heating,
                    size,
                    floor,
                    cost,
                    price,
                    priceMonth,
                    priceYear,
                    maintenanceFee,
                    loanRepayment,
                    utilityBill,
                    structure,
                    // image,
                    desc,
                    registrant,
                },
                config
            );

            dispatch({
                type: LAND_REGISTER_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: LAND_REGISTER_FAIL,
                payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
            });
        }
    };