import Footer from "components/footer/footer";
import Header from "components/header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import "../globals.css";
import "./auth.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from "app/providers/AuthProvider";



export const metadata = {
  icons: {
    icon: "./images/bag-shopping-solid.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          height: "100vh",
          display: "grid",
          gridTemplateRows: "auto 1fr auto",
          alignItems: "center",
        }}
        className="text-center text-bg-dark auth-pages"
      >



<AuthProvider>
{children}
        <Footer />

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />



</AuthProvider>



      </body>
    </html>
  );
}
