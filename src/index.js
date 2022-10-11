import { createStore, compose, bindActionCreators } from "redux";

const initialState = { value: 0 };

const INCREMENT = "counter/increment";
const ADD = "ADD";

//action UPPERCASE
//redux ToolKit
//const incrementAction = { type: INCREMENT, payload: 5 }; //payload: {}, meta, error

const increment = () => ({ type: INCREMENT });
const add = (amount) => ({ type: ADD, payload: amount });

const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return { value: state.value + 1 };
  }
  if (action.type === ADD) {
    return { value: state.value + action.payload };
  }
  return state;
};

const store = createStore(reducer);

const subscriber = () => console.log("SUBSCRIBER", store.getState());

// store.subscribe(subscriber);

const actions = bindActionCreators({ increment, add }, store.dispatch);

actions.add(1000);
actions.increment();
// store.dispatch(increment());
// store.dispatch(add(3));

console.log(store.getState());
