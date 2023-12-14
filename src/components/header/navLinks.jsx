"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCartShopping,
  faHouse,
  faPlus,
  faRightToBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const NavLinks = ({ isSignPage, isRegisterPage, isAdminPage = false }) => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading.....</p>;
  }

  if (status === "authenticated" && session.user.email === "admin@admin.com") {
    return (
      <nav className="links flex">
        <Link
          className={`register ${isAdminPage ? "border" : null}`}
          style={{ marginRight: "0.6rem" }}
          href="/admin"
        >
          <FontAwesomeIcon
            className="fa-solid fa-user-plus"
            style={{
              width: "0.8rem",
            }}
            icon={faPlus}
          />
          Add Product
        </Link>

        <p style={{ marginBottom: "0" }}>Welcome {session.user.name} ♥</p>
      </nav>
    );
  }

  return (
    <nav className="links flex">
      {status === "authenticated" && (
        <>
          <Link style={{ position: "relative" }} className="cart" href="/cart">
            <FontAwesomeIcon
              className="fa-solid fa-cart-shopping"
              style={{
                width: "0.8rem",
              }}
              icon={faCartShopping}
            />
            $0.00
            <span className="products-number">2</span>
          </Link>
          <button
            className="sign-in"
            onClick={() => {
              signOut();
            }}
          >
            Sign out
          </button>

          <p>Welcome {session.user.name}</p>
        </>
      )}

      {status === "unauthenticated" && (
        <>
          <Link
            className={`sign-in ${isSignPage ? "border" : null}`}
            href="/signin"
          >
            <FontAwesomeIcon
              className="fa-solid fa-right-to-bracket"
              style={{
                width: "0.8rem",
              }}
              icon={faRightToBracket}
            />
            Sign in
          </Link>

          <Link
            className={`register ${isRegisterPage ? "border" : null}`}
            href="/register"
          >
            <FontAwesomeIcon
              className="fa-solid fa-user-plus"
              style={{
                width: "0.8rem",
              }}
              icon={faUserPlus}
            />
            Register
          </Link>
        </>
      )}
    </nav>
  );
};

export default NavLinks;
