import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { seoProducts } from "../../data/products";
import { buyerFaqs } from "../../data/faqs";
import "./Faq.css";

const productFaqs = seoProducts.flatMap((product) =>
  product.faqs.map((faq) => ({ ...faq, productName: product.name }))
);
const faqItems = [...buyerFaqs, ...productFaqs];
const faqGroups = faqItems.reduce((groups, item, index) => {
  const group = groups[item.productName] || [];
  group.push({ ...item, index });
  groups[item.productName] = group;
  return groups;
}, {});

function Faq({ embedded = false }) {
  const [openQuestion, setOpenQuestion] = useState(0);

  return (
    <>
      {!embedded && <Navbar />}
      <main className={`faq-page ${embedded ? "faq-page--embedded" : ""}`} id={embedded ? "faq" : undefined}>
        <header className="faq-intro">
          <span className="section-tag">Buyer support</span>
          <h1>Frequently Asked Questions</h1>
          <p>
            Find clear answers about ferro alloy grades, applications, and
            supply support from SFA Globex FZCO.
          </p>
        </header>

        <section className="faq-list" aria-label="Frequently asked questions">
          {Object.entries(faqGroups).map(([groupName, groupItems]) => (
            <section className="faq-group" key={groupName}>
              <h2>{groupName}</h2>
              <div className="faq-group-list">
                {groupItems.map((item) => {
                  const isOpen = openQuestion === item.index;

                  return (
                    <article className={`faq-item ${isOpen ? "is-open" : ""}`} key={`${groupName}-${item.question}`}>
                      <button
                        type="button"
                        className="faq-question"
                        onClick={() => setOpenQuestion(isOpen ? -1 : item.index)}
                        aria-expanded={isOpen}
                      >
                        <span>{item.question}</span>
                        <strong aria-hidden="true">{isOpen ? "−" : "+"}</strong>
                      </button>
                      {isOpen && <p className="faq-answer">{item.answer}</p>}
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </section>
      </main>
      {!embedded && <Footer />}
    </>
  );
}

export default Faq;