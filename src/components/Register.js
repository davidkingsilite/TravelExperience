import React, { useState } from "react";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name </label>
        <input value={name} id="name" name="name" placeholder="Full Name" />

        <label htmlFor="email">Email </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password </label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="*********"
          id="password"
          name="password"
        />
        <button>Log In </button>
      </form>
      <button onClick={() => props.onFormSwitch("login")}>
        {" "}
        Don't have an account? Register
      </button>
    </>
  );
};

export default Register;
