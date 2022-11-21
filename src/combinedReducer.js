import { createStore, compose, bindActionCreators, combineReducers } from "redux";

const initialState = {
    users: [
      { id: 1, name: "Steve" },
      { id: 2, name: "Wes" },
    ],
    tasks: [
      { title: "File the TPS reports", assignedTo: 1 },
      { title: "Order more toner for the printer", assignedTo: null },
    ],
  };


const ADD_USER = "ADD_USER";
const ADD_TASK = "ADD_TASK";

const addTask = (title, id) => ({ type: ADD_TASK, payload: { title, id } });
const addUser = (name) => ({ type: ADD_USER, payload: { name } });

// const reducer = (state = initialState, action) => {
//   if (action.type === ADD_USER) {
//     return {
//       ...state,
//       users: [...state.users, action.payload],
//     };
//   }

//   if (action.type === ADD_TASK) {
//     return {
//       ...state,
//       tasks: [...state.tasks, action.payload],
//     };
//   }
// };

// const store = createStore(reducer, initialState);

// store.dispatch(addTask("Record the statistics"));
// store.dispatch(addUser("Marc"));

// console.log(store.getState());


const users = (state = initialState.users, action) => {
    if (action.type === ADD_USER) {
        console.log("stateReducer", state)
        console.log("actionReducer", action)
      return [...state, Object.assign({id: state.pop().id + 1}, action.payload)];
    }
  
    return state;
  };
  
  const tasks = (state = initialState.tasks, action) => {
    if (action.type === ADD_TASK) {
      return [...state, action.payload];
    }
  
    return state;
  };
  
  // can pass 1 action and it will proform on all reducers
  // ie same action.type on each reducer
  const reducer = combineReducers({ users, tasks });

  
  
  const store = createStore(reducer);
  store.dispatch(addUser("Dave"))
  store.dispatch(addTask("work harder", 2))

  console.log(store.getState())