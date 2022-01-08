// import { useState } from "react";
import "./styles.css";
import { useForm } from "react-hook-form";

const App = () => {
  // we use register function, to tell hooks
  // which input we have in our forms
  const { register } = useForm();

  const onSubmit = (e) => {
    e.preventDefault();
  };

  // console.log("_____FORM_DATA_____", {
  //   email,
  //   password
  // });

  console.log(" I AM RENDERING");

  return (
    <div className="App">
      <h1>React forms</h1>
    </div>
  );
};

export default App;
