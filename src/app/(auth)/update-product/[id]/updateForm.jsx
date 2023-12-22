"use client";
import { notFound } from "next/navigation";
import React, { useEffect, useState } from "react";

const UpdateForm = ({ productId }) => {
  const [title, setTitle] = useState(null);
  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState(null);

  const [isLoading, setisLoading] = useState(false);
  const [error, seterror] = useState(null);

  const handleSubmit = (params) => {









    
  };

  const [data, setData] = useState(null);
  console.log(data);

  useEffect(() => {
    const getData = async (productId) => {
      const res = await fetch(
        `http://localhost:3000/api/getOneProduct?id=${productId}`
      );
      if (!res.ok) {
        notFound();
      }
      const data = await res.json();
      setData(data);
    };
    getData(productId);
  }, [productId]);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
      <div className="mb-4">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Product Title:
        </label>
        <input
          defaultValue={data.title}
          required
          onChange={(eo) => {
            setTitle(eo.target.value);
          }}
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="T-shirt"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Product Price:
        </label>
        <input
          defaultValue={data.price}
          step={0.01}
          placeholder="$99.99"
          required
          onChange={(eo) => {
            setPrice(eo.target.value);
          }}
          type="number"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Product Description:
        </label>

        <textarea
          defaultValue={data.description}
          placeholder="Product Description....."
          required
          onChange={(eo) => {
            setDescription(eo.target.value);
          }}
          rows={3}
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <button
        // disabled={!name || !email || !password}
        type="submit"
        className="btn btn-primary"
      >
        {isLoading ? (
          <div
            style={{ width: "1.5rem", height: "1.5rem" }}
            className="spinner-border"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          "Update Product"
        )}
      </button>

      <p style={{ color: "#ff7790", fontSize: "1.1rem", marginTop: "1rem" }}>
        {" "}
        {error}
      </p>
    </form>
  );
};

export default UpdateForm;
