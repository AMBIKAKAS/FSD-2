import { useState } from "react";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError("Min 6 characters");
      return;
    }

    alert("Form submitted successfully");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input aria-label="email" value={email} onChange={(e)=>setEmail(e.target.value)} />

      <label>Password</label>
      <input aria-label="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />

      {error && <p>{error}</p>}

      <button type="submit">Login</button>
    </form>
  );
}

export default Form;