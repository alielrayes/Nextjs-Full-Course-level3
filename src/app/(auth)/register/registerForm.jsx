"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const RegisterForm = () => {
const [isRed, setisRed] = useState(false);

  const [name, setname] = useState(null);
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);
  const [loading, setloading] = useState(false);

  const [error, seterror] = useState(null);
  const router = useRouter();

  const handleSubmit = async (eo) => {
    eo.preventDefault();
    setloading(true);
    seterror(null);
    setisRed(false)

    if (!name || !email || !password) {
      seterror("All input must be filled");
      toast.error("All input must be filled");
      setloading(false);
      return;
    }

    const regPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    if (!regPassword.test(password)) {
      setisRed(true)
      setloading(false);
      seterror(
        "Password must be at least 8 characters with 1 uppercase, 1 lowercase, 1 special character and 1 numeric."
      );
      return;
    }

    // Check if email exist
    const resUserExist = await fetch("api/userExist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const isUserExist = await resUserExist.json();

    if (isUserExist.user) {
      seterror("Email Already exist");
      toast.error("Email Already exist");

      setloading(false);
      return;
    }

    // Store data in DataBase
    const response = await fetch("api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (response.ok) {
      toast.success("Your account has been created successfully");
      eo.target.reset();

      router.push("/signin");
    } else {
      seterror("faild to create acoount, Please try again");
    }

    setloading(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
      <div className="mb-4">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          onChange={(eo) => {
            setname(eo.target.value);
          }}
          required
          type="text"
          className="form-control"
          id="username"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          required
          onChange={(eo) => {
            setemail(eo.target.value);
          }}
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
        style={{backgroundColor: isRed?   "#fcaaaa" : null}}
          required
          onChange={(eo) => {
            setpassword(eo.target.value);
          }}
          type="password"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <button
        disabled={!name || !email || !password}
        type="submit"
        className="btn btn-primary"
      >
        {loading ? (
          <div
            style={{ width: "1.5rem", height: "1.5rem" }}
            className="spinner-border"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          "Create Account"
        )}
      </button>

      <p style={{ color: "#ff7790", fontSize: "1.1rem", marginTop: "1rem" }}>
        {" "}
        {error}
      </p>
    </form>
  );
};

export default RegisterForm;
