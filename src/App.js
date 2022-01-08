// import { useState } from "react";
import "./styles.css";
import { useForm } from "react-hook-form";

const App = () => {
  // we use register function, to tell hooks
  // which input we have in our forms
  const { register, handleSubmit } = useForm();

  // const onSubmit = (e) => {
  //   e.preventDefault();
  // };

  // console.log("_____FORM_DATA_____", {
  //   email,
  //   password
  // });

  console.log(" I AM RENDERING");

  return (
    <div className="App">
      <h1>React forms</h1>

      {/* building the forms */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email"> Email address</label>
          <input
            className="form-control"
            id="email"
            type="email"
            name="email"
            {...register}
          />
          <div className="invalid-feedback"></div>
        </div>
        <div className="form-group">
          <label htmlFor="password"> Email address</label>
          <input
            className="form-control"
            id="password"
            type="password"
            name="password"
            // ref={register}
          />
          <div className="invalid-feedback"></div>
        </div>
        <div className="form-group form-check">
          <input
            className="form-check-input"
            id="rememberMe"
            type="checkbox"
            name="password"
            ref={register}
          />
          <label className="form-check-label" htmlFor="rememberMe">
            {" "}
            Remember Me
          </label>
          <div className="invalid-feedback"></div>
        </div>

        <button>Login to my account</button>
      </form>
    </div>
  );
};

export default App;
