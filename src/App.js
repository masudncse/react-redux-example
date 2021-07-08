import React from "react";
import Counter from "./components/Counter";
import CounterRedux from "./components/CounterRedux";
import FormValidation from "./components/FormValidation";
import FormValidationYup from "./components/FormValidationYup";

function App() {
  return (
    <>
      {/* <Counter initialCounter={1000} /> */}
      <CounterRedux />
      {/* React Hook
      <br />
      <FormValidation />
      React Hook With Yup
      <br />
      <FormValidationYup /> */}
    </>
  );
}

export default App;
