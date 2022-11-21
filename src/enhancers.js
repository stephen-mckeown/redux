import { createStore, compose, bindActionCreators, combineReducers, applyMiddleware } from "redux";

const monitorReducerEnhancer = (createStore) => (
    reducer,
    initialState,
    enhancer
) => {
    const monitoredReducer = (state, action) => {
        const start = performance.now();
        const newState = reducer(state, action);
        const end = performance.now();
        const diff = end - start;

        console.log("Reducer process time:", diff);

        return newState;
    };

    return createStore(monitoredReducer, initialState, enhancer);
};

const initialStateside = { value: 0 };
const reducer = (state = initialStateside) => state;

// const store = createStore(reducer, monitorReducerEnhancer);
// console.log(store)
// console.log(store.getState())
// store.dispatch({ type: "hello" })


const logEnhancer = (createStore) => (reducer, initialState, enhancer) => {
    const logReducer = (state, action) => {
        console.log("old state", state, action);
    const newState = reducer(state, action);
    console.log('new state', newState, action);

    return newState;
}
return createStore(logReducer, initialState, enhancer)
}

// const store = createStore(reducer, logEnhancer)
// store.dispatch({type: "hello"})



// Middleware:
//const enhancer = applyMiddleware(
//     firstMiddleware,
//     secondMiddleware,
//     thirdMiddleware
//   );

// const someMiddleware = (store) => (next) => (action) => {
//     // Do stuff before the action reaches the reducer or the next piece of middleware.
//     next(action);
//     // Do stuff after the action has worked through the reducer.
//   };

const logMiddleware = (store) => (next) => (action) => {
    console.log("Before", store.getState(), { action });
    next(action);
    console.log("After", store.getState(), { action });
  };

const monitorMiddleware = (store) => (next) => (action) => {
    const start = performance.now();
    next(action);
    const end = performance.now();
    const diff = end - start;
  
    console.log("reducer process time:", diff);
  };
  
   const store = createStore(reducer, applyMiddleware(logMiddleware, monitorMiddleware));
store.dispatch({type: "hello"})