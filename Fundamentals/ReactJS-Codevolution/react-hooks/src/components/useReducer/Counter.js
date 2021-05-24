import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment1":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement1":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function Counter() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>
        <h2>Counter 1 : {count.firstCounter}</h2>
        <h2>Counter 2 : {count.secondCounter}</h2>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "increment", value: 1 })}>
          Increment Counter 1
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          Decrement Counter 1
        </button>
        <button onClick={() => dispatch({ type: "increment", value: 5 })}>
          Increment Counter 1 by 5
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
          Decrement Counter 1 by 5
        </button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "increment1", value: 1 })}>
          Increment Counter 2
        </button>
        <button onClick={() => dispatch({ type: "decrement1", value: 1 })}>
          Decrement Counter 2
        </button>
        <button onClick={() => dispatch({ type: "increment1", value: 5 })}>
          Increment Counter 2 by 5
        </button>
        <button onClick={() => dispatch({ type: "decrement1", value: 5 })}>
          Decrement Counter 2 by 5
        </button>
      </div>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default Counter;
