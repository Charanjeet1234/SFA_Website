import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { JsonLd, localBusinessSchema } from "../components/Seo/JsonLd";
import { useSeoMeta } from "../hooks/useSeoMeta";
import { seoProductsMap } from "../data/products";

function ProductPage() {
  const { slug } = useParams();
  const product = seoProductsMap[slug] || null;
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [slug]);

  useSeoMeta(
    product
      ? {
          title: `${product.name} Supplier in Dubai, UAE | SFA Globex DMCC`,
          description: product.description,
          keywords: product.keywords,
          canonical: `https://sfaglobex.ae/products/${product.slug}`,
          ogTitle: `${product.name} | SFA Globex DMCC`,
          ogDescription: product.description,
        }
      : {
          title: "Product Not Found | SFA Globex DMCC",
          description: "SFA Globex DMCC is a leading ferro alloys supplier in Dubai, UAE.",
          canonical: "https://sfaglobex.ae/",
        }
  );

  if (!product) {
    return (
      <>
        <Navbar />
        <div style={{ padding: "4rem 1.5rem", textAlign: "center" }}>
          <h1>Product not found</h1>
          <Link to="/">Return to home</Link>
        </div>
        <Footer />
      </>
    );
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "SFA Globex DMCC",
    },
    category: "Ferro Alloys",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "AED",
      seller: {
        "@type": "Organization",
        name: "SFA Globex DMCC",
      },
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={productSchema} />
      <JsonLd data={faqSchema} />
      <Navbar />
      <main style={{ padding: "2rem 1.25rem 4rem" }}>
        <div className="container">
          <nav aria-label="Breadcrumb" style={{ marginBottom: "2rem" }}>
            <Link to="/">Home</Link>
            <span style={{ margin: "0 0.5rem" }}>/</span>
            <span>{product.name}</span>
          </nav>

          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <p style={{ color: "#7b8aa3", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>
                Ferro Alloys Supplier in Dubai, UAE
              </p>
              <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", letterSpacing: "-0.04em" }}>
                {product.name} Supplier in Dubai, UAE
              </h1>
              <p style={{ fontSize: "1.08rem", lineHeight: "1.8", color: "#2e3a4d" }}>
                {product.description}
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1rem" }}>
                <a href="mailto:marketing@sfaglobex.ae" className="btn btn-primary">
                  Request Quote
                </a>
                <a href="tel:+971524426170" className="btn btn-outline-primary">
                  Call +971-524426170
                </a>
              </div>
            </div>
            <div className="col-lg-5">
              <div
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: "16px",
                  padding: "2rem",
                  boxShadow: "0 12px 30px rgba(28, 39, 66, 0.08)",
                }}
              >
                <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Key Applications</h2>
                <ul style={{ margin: 0, paddingLeft: "1.2rem", lineHeight: "2" }}>
                  {product.applications.map((application) => (
                    <li key={application}>{application}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "3rem" }}>
            <h2>Why buy {product.name} from SFA Globex DMCC?</h2>
            <p style={{ lineHeight: "1.8", color: "#2e3a4d" }}>
              SFA Globex DMCC works with industrial buyers and steel producers requiring dependable raw material supply, technical understanding, and consistent logistics support. Our focus is to help customers reduce production disruption while maintaining quality, cost efficiency, and reliable delivery.
            </p>
          </div>

          <div style={{ marginTop: "3rem" }}>
            <h2>Frequently Asked Questions</h2>
            <div className="accordion" id="productFaqs" style={{ marginTop: "1rem" }}>
              {product.faqs.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <div className="accordion-item" key={item.question} style={{ border: "1px solid #e2e8f0", borderRadius: "12px", overflow: "hidden", marginBottom: "0.75rem" }}>
                    <h3 className="accordion-header" style={{ margin: 0 }}>
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? -1 : index)}
                        aria-expanded={isOpen}
                        style={{
                          width: "100%",
                          border: 0,
                          background: isOpen ? "#edf6ff" : "#ffffff",
                          color: "#0f172a",
                          fontWeight: 600,
                          padding: "1rem 1.1rem",
                          textAlign: "left",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          cursor: "pointer",
                          fontSize: "1rem",
                        }}
                      >
                        <span>{item.question}</span>
                        <span style={{ fontSize: "1.3rem", lineHeight: 1 }}>{isOpen ? "−" : "+"}</span>
                      </button>
                    </h3>
                    {isOpen && (
                      <div style={{ background: "#ffffff", padding: "1rem 1.1rem 1.2rem", borderTop: "1px solid #e2e8f0", color: "#334155", lineHeight: "1.8" }}>
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ProductPage;
