
import Header from "components/header/header";
import React from "react";
import ProductForm from "./productForm";

const Page = () => {

  return (
    <>
      <Header isAdminPage={true} />
      <main className="px-3">
      <ProductForm />
      </main>
    </>
  );
};

export default Page;
