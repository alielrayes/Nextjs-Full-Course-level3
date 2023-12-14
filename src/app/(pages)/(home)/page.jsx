// @ts-nocheck
"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Suspense } from "react";
import Footer from "../../../components/footer/footer.jsx";
import Header from "../../../components/header/header.jsx";
import "./home.css";
import Products from "./products.jsx";
import Loading from "./loading.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const { data: session, status } = useSession();
  return (
    <>
      <div className="top-img">
        <Header />
        <section className="content">
          <p className="lifestyle">Lifestyle collection</p>
          <p className="men">MEN</p>
          <p className="sale">
            SALE UP TO <span>30% OFF</span>
          </p>
          <p className="free-shipping">
            Get Free Shipping on orders over $99.00
          </p>
          <button>Shop Now</button>
        </section>
      </div>

      <main>
        <h1 className="recommended flex">
          <FontAwesomeIcon
            style={{ width: "1.9rem", marginRight: "1.2rem" }}
            icon={faCheck}
          />
          Recommended for you
        </h1>

        {status === "loading" && <Loading />}

        {status == "unauthenticated" && (
          <h3
            style={{
              display: "flex",
              justifyContent: "center",
              marginBlock: "4rem",
            }}
          >
            You must be signed in to view the protected content on this page.
          </h3>
        )}

        {status === "authenticated" && (
          <Suspense fallback={<Loading />}>
            <Products />
          </Suspense>
        )}
      </main>

      <Footer />
    </>
  );
}
