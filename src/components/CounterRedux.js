import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import * as counterActions from "../actions/counterActions";

const CounterRedux = () => {
  const counterReducer = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  return (
    <>
      <input
        type="text"
        value={counterReducer.count}
        onChange={(e) =>
          dispatch({ type: "SET_MANUALLY", payload: parseInt(e.target.value) })
        }
      />
      <button
        type="button"
        onClick={() => dispatch(counterActions.incrementAsync())}
      >
        +
      </button>
      <label htmlFor="">{counterReducer.count}</label>
      <button type="button" onClick={() => dispatch({ type: "DECREMENT" })}>
        -
      </button>
    </>
  );
};

export default CounterRedux;
