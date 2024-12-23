import React from "react";
import { Helmet } from "react-helmet";

// Import your Header and Footer components
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ title, description, keywords, children }) => {
  return (
    <>
      {/* SEO configuration with react-helmet */}
      <Helmet>
        <title>{title || "Default Page Title"}</title>
        <meta name="description" content={description || "Default description for the page."} />
        <meta name="keywords" content={keywords || "default, keywords, here"} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      {/* Page layout structure */}
      <Header />
      <main style={{ minHeight: "calc(100vh - 200px)", padding: "1rem", boxSizing: "border-box" }}>
        {children}
      </main>
      <Footer />

      {/* Global responsive styles */}
      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        @media (max-width: 768px) {
          main {
            padding: 0.5rem;
          }
        }

        @media (max-width: 480px) {
          main {
            padding: 0.25rem;
          }
        }
      `}</style>
    </>
  );
};

export default Layout;
