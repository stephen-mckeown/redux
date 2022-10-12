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
const unsubscribe = store.subscribe(subscriber);


//Bind Action Creators
//const dispatchIncrement = () => store.dispatch(increment());
//const dispatchAdd = (number) => store.dispatch(add(number));
//const dispatchIncrement = compose(store.dispatch, increment);
//const dispatchAdd = compose(store.dispatch, add);
const actions = bindActionCreators({ increment, add }, store.dispatch);

actions.add(1000);  //SUBSCRIBER {value: 1000}
actions.increment(); //SUBSCRIBER {value: 1001}
store.dispatch(increment());

unsubscribe();

store.dispatch(add(3));  //(silence)

// console.log(store.getState());
