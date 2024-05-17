// action
function incrementCounter() {
    return {
        type: "INCREMENT_COUNTER",
    };
}

const initialState = {
    counter: 0,
    number: 5,
};

// reducer
const counterReducer = (state = initialState, action) => {
    switch (action.type){
        case "INCREMENT_COUNTER":
            return {
                ...state,
                counter: counter + 1,
            };
            default :
            return state;
    }
};
