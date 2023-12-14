import Footer from 'components/footer/footer';
import Header from 'components/header/header';
import React from 'react';

const NotFound = () => {
  return (
    <div style={{
      height: "100vh",
      display: "grid",
      alignItems: "center",
      gridTemplateRows: "auto 1fr auto",
    }}>
      <Header />

      <main style={{textAlign: "center"}}>
        <p style={{ fontSize: "1.9rem", fontWeight: "bold" }}>Sorry,</p>

        <p style={{ fontSize: "1.5rem", fontWeight: "500", marginTop: "1rem" }}>
          we could not find the page you were looing for :(
        </p>
      </main>


      <Footer />
    </div>
  );
}

export default NotFound;
