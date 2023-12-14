"use client";

const ProductForm = () => {
  const handleSubmit = (eo) => {};

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: "left" }}>
      <div className="mb-4">
        <label htmlFor="username" className="form-label">
          Product Image :
        </label>
        <input
          onChange={(eo) => {
            // setname(eo.target.value);
          }}
          required
          type="file"
          className="form-control"
          id="username"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Product Title:
        </label>
        <input
          required
          onChange={(eo) => {
            // setemail(eo.target.value);
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
          placeholder="$99.99"
          required
          onChange={(eo) => {
            // setpassword(eo.target.value);
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
          placeholder="Product Description....."
          required
          onChange={(eo) => {
            // setpassword(eo.target.value);
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
        {/* {loading ? ( */}
        {false ? (
          <div
            style={{ width: "1.5rem", height: "1.5rem" }}
            className="spinner-border"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          "Add Product"
        )}
      </button>

      <p style={{ color: "#ff7790", fontSize: "1.1rem", marginTop: "1rem" }}>
        {" "}
        {/* {error} */}
      </p>
    </form>
  );
};

export default ProductForm;
