import { useState } from "react";
import "./styles.css";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  console.log("_____FORM_DATA_____", {
    email,
    password
  });

  // console.log(" I AM RENDERING")

  return (
    <div className="App">
      <h1>React forms</h1>

      {/* building the forms */}
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email"> Email address</label>
          <input
            className="form-control"
            id="email"
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.ariaValueText)}
          />
        </div>
      </form>
    </div>
  );
}
