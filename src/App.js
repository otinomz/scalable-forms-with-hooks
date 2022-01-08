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
    </div>
  );
}
