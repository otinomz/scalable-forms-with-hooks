import { useState } from "react";
import { useForm } from "react-hook-form";
import "./styles.css";
// import Header from "./Header";

export default function App() {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");

  return (
    <>
      <h1>React Forms</h1>
      <form onSubmit={handleSubmit((data) => setResult(JSON.stringify(data)))}>
        <input {...register("firstName")} placeholder="First name" />
        <input {...register("lastName")} placeholder="Last name" />
        <select {...register("category")}>
          <option value="">Select...</option>
          <option value="A">Category A</option>
          <option value="B">Category B</option>
        </select>
        <p>{result}</p>
        <input type="submit" />
      </form>
    </>
  );
}
