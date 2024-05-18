const redux = require("redux");
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const applyMiddlerWare = redux.applyMiddleware;

// action
function incrementCounter() {
  return {
    type: "INCREMENT_COUNTER",
  };
}
function decrementCounter() {
  return {
    type: "DECREMENT_COUNTER",
  };
}
function incrementCounterByAmount(amount = 1) {
  return {
    type: "INCREMENT_COUNTER_BY_AMOUNT",
    payload: amount,
  };
}
// ------number------
function incrementNumber() {
  return {
    type: "INCREMENT_NUMBER",
  };
}

const initialCounterState = {
  counter: 0,
};
const initialNumberState = {
  number: 5,
};

// reducer
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREMENT_COUNTER":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "INCREMENT_COUNTER_BY_AMOUNT":
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    default:
      return state;
  }
};
//------number-----
const numberReducer = (state = initialNumberState, action) => {
  switch (action.type) {
    case "INCREMENT_NUMBER":
      return {
        ...state,
        number: state.number + 1,
      };
    default:
      return state;
  }
};
// store
const rootReducer = combineReducer({
  counterReducer,
  numberReducer,
});
const store = createStore(rootReducer, applyMiddlerWare(logger));

store.dispatch(incrementCounter());

store.dispatch(decrementCounter());

store.dispatch(incrementCounterByAmount(5));

store.dispatch(incrementNumber());
