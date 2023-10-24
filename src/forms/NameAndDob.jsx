import React, { useState } from "react";
import { useForm } from "react-hook-form";
import App from "../App";
import "../styles.css";

export default function NameAndDob() {
  //grab this formData for ShowSubmission
  const [formData, setFormData] = useState({
    title: "",
    forename: "",
    surname: "",
    dob: ""
  });
  const { register } = useForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //send data to show submission useCallback
    console.log(formData);
  };

  return (
    <div className="App">
      <nav>
        <h1>Name And DOB</h1>
      </nav>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Title:
            <select name="title" value={formData.title} onChange={handleChange}>
              <option value="">Select a title</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Ms">Ms</option>
              <option value="Dr">Dr</option>
              <option value="Rev">Rev</option>
              <option value="RH">RH</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Forename:
            <input
              type="text"
              name="forename"
              value={formData.forename}
              onChange={handleChange}
              pattern="[A-Za-z]+"
            />
          </label>
        </div>

        <div>
          <label>
            Surname:
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              pattern="[A-Za-z]+"
            />
          </label>
        </div>
        <div>
          <label>
            Date of Birth:
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit" onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
