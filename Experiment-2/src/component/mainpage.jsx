import { useState } from "react";

// Button Component
const Button = ({ label, onClick }) => (
  <button className="btn" onClick={onClick}>
    {label}
  </button>
);

// TextField Component
const TextField = ({ label, value, onChange, placeholder }) => (
  <div className="field">
    <label>{label}</label>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

// Select Component
const Select = ({ label, value, onChange, options }) => (
  <div className="field">
    <label>{label}</label>
    <select value={value} onChange={onChange}>
      {options.map((opt, i) => (
        <option key={i}>{opt}</option>
      ))}
    </select>
  </div>
);

// Rating Component
const Rating = ({ value, onChange }) => (
  <div className="rating">
    {[1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        className={star <= value ? "star active" : "star"}
        onClick={() => onChange(star)}
      >
        ★
      </span>
    ))}
  </div>
);

// Checkbox Component
const Checkbox = ({ label, checked, onChange }) => (
  <label className="checkbox">
    <input type="checkbox" checked={checked} onChange={onChange} />
    <span>{label}</span>
  </label>
);


export default function App() {
  const [text, setText] = useState("");
  const [select, setSelect] = useState("Option 1");
  const [rating, setRating] = useState(3);
  const [checked, setChecked] = useState(false);

  return (
    <div className="page">
      <h1>Experiment–2 : UI Design Components</h1>

      <div className="card">
        <section>
          <h2>1. Button Component</h2>
          <Button label="Click Me" onClick={() => alert("Button Clicked")} />
        </section>

        <section>
          <h2>2. TextField Component</h2>
          <TextField
            label="Enter Text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type here"
          />
        </section>

        <section>
          <h2>3. Select Component</h2>
          <Select
            label="Choose Option"
            value={select}
            onChange={(e) => setSelect(e.target.value)}
            options={["Option 1", "Option 2", "Option 3"]}
          />
        </section>

        <section>
          <h2>4. Rating Component</h2>
          <Rating value={rating} onChange={setRating} />
        </section>

        <section>
          <h2>5. Checkbox Component</h2>
          <Checkbox
            label="Accept Terms & Conditions"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
        </section>
      </div>

  
      <style>{`
        * {
          box-sizing: border-box;
          font-family: Arial, Helvetica, sans-serif;
        }

        body {
          margin: 0;
        }

        .page {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea, #764ba2);
          padding: 40px;
        }

        h1 {
          text-align: center;
          color: #fff;
          margin-bottom: 30px;
        }

        .card {
          max-width: 600px;
          margin: auto;
          background: #ffffff;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        section {
          margin-bottom: 25px;
        }

        h2 {
          margin-bottom: 10px;
          color: #333;
        }

        .btn {
          padding: 10px 18px;
          background: #667eea;
          border: none;
          color: white;
          border-radius: 6px;
          cursor: pointer;
          font-size: 15px;
        }

        .btn:hover {
          background: #5a67d8;
        }

        .field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .field input,
        .field select {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 14px;
        }

        .field input:focus,
        .field select:focus {
          outline: none;
          border-color: #667eea;
        }

        .rating {
          font-size: 28px;
        }

        .star {
          cursor: pointer;
          color: #ccc;
        }

        .star.active {
          color: #f6c026;
        }

        .checkbox {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
}
