
// export const USER_ACTION_TYPES = {
//     UPDATE_EMAIL: 'UPDATE_EMAIL',
// }

//action

const initialState = {
        id: '',
        name: '',
        email: '',
        phone: '',
        returning: false
}

export const userReducers = (state = initialState, action) => {
    const { type, payload } = action;
    console.log(payload);

    switch(type) {
        case "UPDATE_EMAIL": 
            return {...state, email: payload.email};
        case "CUSTOMER_RETURNING":
            return {...state, 
                id: payload.customer.id,
                name: payload.customer.name,
                email: payload.customer.email,
                returning: payload.customer.returning
            }
        case "CUSTOMER_UPDATE" : 
            return {
                ...state, 
                id: payload.customer.id,
                name: payload.customer.name,
                email: payload.customer.email,
                returning: payload.customer.returning
            }
        default :
            return state
            // throw new Error(`Unhandled type ${type} in userReducer`);
    }
}

export const updateEmail = (email) => {
    return {
        type: "UPDATE_EMAIL",
        payload: {
            email
        }
    }
}

export const customerReturning = (customer) => {
    return {
        type: "CUSTOMER_RETURNING",
        payload: {
            customer
        }
    }

}


export const customerUpdate = (customer) => {
    return {
        type: "CUSTOMER_UPDATE",
        payload: {
            customer
        }
    }
}