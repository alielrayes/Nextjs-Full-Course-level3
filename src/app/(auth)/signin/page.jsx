import Header from "components/header/header";
import React from "react";
import SigninForm from "./signinForm";
export const metadata = {
  title: "Signin page",
  description: "description for Signin page",
};
const Page = () => {
  return (
    <>
      <Header isSignPage={true} />
      <main className="px-3">
      <SigninForm />
      </main>
    </>
  );
};

export default Page;
