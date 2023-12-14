import Footer from "components/footer/footer";
import Header from "components/header/header";
import RegisterForm from "./registerForm";

export const metadata = {
  title: "Register page",
  description: "description for Register page",
};
const Page = () => {
  return (
    <>
      <Header isRegisterPage={true} />
      <main className="px-3">
        <RegisterForm />
      </main>
    </>
  );
};

export default Page;
