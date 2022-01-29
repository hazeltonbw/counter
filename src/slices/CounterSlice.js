const initialState = { value: 0 };
export const increment = () => {
    return {
        type: "counter/increment",
    };
};
export const decrement = () => {
    return {
        type: "counter/decrement",
    };
};

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "counter/increment":
            return {
                value: state.value + 1,
            };
        case "counter/decrement":
            return {
                value: state.value - 1,
            };
        default:
            return state;
    }
};
