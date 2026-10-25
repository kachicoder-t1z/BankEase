import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "./index.css";
const menus = {
  "Personal Banking": [
    { title: "Accounts", desc: "Savings and everyday banking", image: "photo-1554224155-6726b3ff858f" },
    { title: "Debit & Credit Cards", desc: "Cards for your daily needs", image: "photo-1556742049-0cfed4f6a45d" },
    { title: "Digital Banking", desc: "Bank from anywhere", image: "photo-1512428559087-560fa5ceab42" },
    { title: "Loans & Finance", desc: "Plan your next big step", image: "photo-1563013544-824ae1b704d3" },
    { title: "Wealth Management", desc: "Explore financial planning", image: "photo-1579621970563-ebec7560ff3e" },
    { title: "Customer Support", desc: "We're here to help", image: "photo-1521737711867-e3b97375f902" },
  ],
  "Business Banking": [
    { title: "Corporate Banking", desc: "Solutions for large businesses", image: "photo-1486406146926-c627a92ad1ab" },
    { title: "Investment Banking", desc: "Explore investment services", image: "photo-1460925895917-afdab827c52f" },
    { title: "Commercial Banking", desc: "Banking for growing businesses", image: "photo-1486312338219-ce68d2c6f44d" },
    { title: "Asset Management", desc: "Manage business assets", image: "photo-1460472178825-e5240623afd5" },
    { title: "Business Accounts", desc: "Accounts for your company", image: "photo-1454165804606-c3d57bc86b40" },
    { title: "Business Support", desc: "Help for your business", image: "photo-1521737711867-e3b97375f902" },
  ],
  "Ways to Bank": [
    { title: "Mobile Banking", desc: "Bank using your phone", image: "photo-1512428559087-560fa5ceab42" },
    { title: "Internet Banking", desc: "Manage your account online", image: "photo-1460925895917-afdab827c52f" },
    { title: "Bank Branches", desc: "Find in-person assistance", image: "photo-1486406146926-c627a92ad1ab" },
    { title: "Help Centre", desc: "Answers to common questions", image: "photo-1521737711867-e3b97375f902" },
  ],
};

const allServices = Object.values(menus).flat();

const transactions = [
  { name: "Salary Deposit", date: "Oct 22, 2026", amount: 85000 },
  { name: "Netflix Subscription", date: "Oct 21, 2026", amount: -1200 },
  { name: "Grocery Store", date: "Oct 20, 2026", amount: -4500 },
  { name: "Freelance Payment", date: "Oct 18, 2026", amount: 25000 },
];

const accountOptions = [
  {
    title: "Savings Account",
    desc: "Build your savings with a clear view of your goals.",
    features: [
      "Savings overview",
      "Goal planning",
      "Account activity",
    ],
    icon: "◉",
    image: "photo-1579621970563-ebec7560ff3e",
    heading: "Make your future a priority.",
    intro:
      "Create a clearer picture of your financial goals with a savings experience designed to help you plan ahead.",
    benefits: [
      {
        title: "Save with a purpose",
        desc: "Organize your savings around the goals that matter to you.",
        icon: "◎",
      },
      {
        title: "Track your progress",
        desc: "View your sample balance and follow your savings journey.",
        icon: "↗",
      },
      {
        title: "Stay organized",
        desc: "Review account activity and keep your financial information together.",
        icon: "✓",
      },
    ],
    steps: [
      "Review your financial goals.",
      "Explore available account features.",
      "Check the terms and eligibility of a real bank.",
    ],
  },
  {
    title: "Current Account",
    desc: "A simple demo account for everyday transactions.",
    features: [
      "Everyday transactions",
      "Payment tracking",
      "Account overview",
    ],
    icon: "⇄",
    image: "photo-1556742049-0cfed4f6a45d",
    heading: "Everyday banking, made simpler.",
    intro:
      "Explore a convenient account experience for everyday payments, regular transactions and keeping track of your money.",
    benefits: [
      {
        title: "Everyday payments",
        desc: "Explore a sample view of regular spending and payments.",
        icon: "⇄",
      },
      {
        title: "Transaction history",
        desc: "See how incoming and outgoing transactions can be organized.",
        icon: "↗",
      },
      {
        title: "Clear overview",
        desc: "Keep your sample account information in one easy-to-read place.",
        icon: "▤",
      },
    ],
    steps: [
      "Explore the account features.",
      "Review transaction and payment needs.",
      "Confirm account requirements with your chosen bank.",
    ],
  },
  {
    title: "Digital Account",
    desc: "Explore a modern, digital-first banking experience.",
    features: [
      "Online account overview",
      "Digital banking",
      "Activity tracking",
    ],
    icon: "▣",
    image: "photo-1512428559087-560fa5ceab42",
    heading: "Banking that fits your digital life.",
    intro:
      "Discover a digital-first banking experience with online account information, convenient navigation and an organized activity overview.",
    benefits: [
      {
        title: "Digital convenience",
        desc: "Explore a banking interface designed for online access.",
        icon: "▣",
      },
      {
        title: "Information at a glance",
        desc: "View a sample account overview through a clean interface.",
        icon: "◉",
      },
      {
        title: "Activity overview",
        desc: "Explore a simple way to review your sample account activity.",
        icon: "↗",
      },
    ],
    steps: [
      "Check whether digital account opening is available.",
      "Review identity verification requirements.",
      "Use only your bank's official and secure channels.",
    ],
  },
];

const faqItems = [
  {
    category: "Accounts",
    question: "Which account is right for me?",
    answer:
      "Choose an account based on your savings goals, daily transactions, and banking needs. Review the account details before making a decision.",
  },
  {
    category: "Online banking",
    question: "Can I manage my account online?",
    answer:
      "Online banking services may let you review account activity and access supported banking features. Availability depends on the actual bank service.",
  },
  {
    category: "Cards",
    question: "What should I do if my card is lost?",
    answer:
      "Contact your bank immediately through its official support channel to report the missing card and ask how to block it.",
  },
  {
    category: "Money transfers",
    question: "How can I transfer money?",
    answer:
      "Use an official banking channel that supports transfers, verify the recipient details carefully, and review any applicable charges before confirming.",
  },
  {
    category: "Security",
    question: "How can I keep my account secure?",
    answer:
      "Never share your PIN, password, or OTP. Use official banking channels, secure your device, and report suspicious activity immediately.",
  },
];

function FAQSection({ title = "Frequently Asked Questions" }) {
  return (
    <section className="be-faq-section">
      <p className="be-kicker">HERE TO HELP</p>
      <h2>{title}</h2>
      <p className="be-faq-intro">
        Find answers to common questions about banking services.
      </p>

      <div className="be-faq-list">
        {faqItems.map((faq, index) => (
          <details className="be-faq-item" key={faq.category}>
            <summary>
              <span>{faq.question}</span>
              <span className="be-faq-plus" aria-hidden="true">
                +
              </span>
            </summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}


function App() {
  const [activeMenu, setActiveMenu] = useState("");
  const [activePage, setActivePage] = useState("Home");
  const [search, setSearch] = useState("");
  const [showBalance, setShowBalance] = useState(true);
  const [selectedAccount, setSelectedAccount] = useState(null);
  useEffect(() => {
  if (!activeMenu) return;

  const previousOverflow = document.body.style.overflow;

  document.body.style.overflow = "hidden";

  return () => {
    document.body.style.overflow = previousOverflow;
  };
}, [activeMenu]);

  const openService = (title) => {
    setActivePage(title);
    setActiveMenu("");
    setSelectedAccount(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goHome = () => {
    setActivePage("Home");
    setActiveMenu("");
    setSelectedAccount(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredTransactions = transactions.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const selectedService = allServices.find(
    (service) => service.title === activePage
  );

  return (
    <div className="be-site">
      <header className="be-header">
        <button className="be-brand" onClick={goHome}>
          <span className="be-logo">B</span>
          <span>
            <strong>
              Bank<span>Ease</span>
            </strong>
            <small>Your trust. Our priority.</small>
          </span>
        </button>

        <nav className="be-nav">
          <button
            className={activePage === "Home" ? "be-nav-active" : ""}
            onClick={goHome}
          >
            Home
          </button>

          {Object.keys(menus).map((menu) => (
            <button
              key={menu}
              className={activeMenu === menu ? "be-nav-active" : ""}
              onClick={() =>
                setActiveMenu(activeMenu === menu ? "" : menu)
              }
              aria-expanded={activeMenu === menu}
            >
              {menu} <span>{activeMenu === menu ? "⌃" : "⌄"}</span>
            </button>
          ))}

          <button onClick={() => openService("About BankEase")}>
            About Us
          </button>

          <button onClick={() => openService("Customer Support")}>
            Support
          </button>
        </nav>

        <button
          className="be-get-started"
          onClick={() => openService("Accounts")}
        >
          Get started ↗
        </button>
      </header>


{activeMenu &&
  createPortal(
    <div
      className="be-mega-backdrop"
      onClick={() => setActiveMenu("")}
    >
      <section
        className="be-mega-menu"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="be-mega-side">
          <p className="be-kicker">EXPLORE BANKEASE</p>
          <h2>{activeMenu}</h2>
          <p>
            Discover services designed around your financial needs.
          </p>

          <button onClick={() => openService(activeMenu)}>
            Explore all services ↗
          </button>
        </div>

        <div className="be-mega-content">
          <div className="be-mega-heading">
            <h3>{activeMenu} services</h3>
            <button
              aria-label="Close menu"
              onClick={() => setActiveMenu("")}
            >
              ✕
            </button>
          </div>

          <div className="be-service-grid">
            {menus[activeMenu].map((service) => (
              <button
                className="be-service-card"
                key={service.title}
                onClick={() => openService(service.title)}
              >
                <img
                  src={`https://images.unsplash.com/${service.image}?auto=format&fit=crop&w=500&q=80`}
                  alt={service.title}
                  loading="lazy"
                />
                <strong>{service.title}</strong>
                <span>{service.desc}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>,
    document.body
  )}



      <main>
        {activePage === "Home" ? (
          <>
            <section className="be-hero">
              <div className="be-hero-copy">
                <p className="be-kicker">
                  SIMPLE · SECURE · TOGETHER
                </p>

                <h1>
                  Banking for a <span>brighter tomorrow.</span>
                </h1>

                <p>
                  Modern banking solutions designed for your life, your goals
                  and your future.
                </p>

                <button
                  className="be-primary"
                  onClick={() => setActiveMenu("Personal Banking")}
                >
                  Explore our services <span>→</span>
                </button>
              </div>

              <div className="be-hero-photo">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
                  alt="Modern financial district buildings"
                />

                <div className="be-photo-label">
                  <span className="be-logo">B</span>
                  <div>
                    <strong>BankEase</strong>
                    <small>Banking made simpler</small>
                  </div>
                </div>
              </div>
            </section>

            <section className="be-services-section">
              <div className="be-section-heading">
                <div>
                  <p className="be-kicker">BANKING THAT FITS YOU</p>
                  <h2>Explore our services</h2>
                </div>
                <p>Everything you need, all in one place.</p>
              </div>

              <div className="be-feature-grid">
                {[
                  {
                    title: "Personal Banking",
                    desc: "Everyday banking made easier.",
                    image: "photo-1554224155-6726b3ff858f",
                  },
                  {
                    title: "Business Banking",
                    desc: "Tools to support your business.",
                    image: "photo-1486406146926-c627a92ad1ab",
                  },
                  {
                    title: "Ways to Bank",
                    desc: "Choose how you want to bank.",
                    image: "photo-1512428559087-560fa5ceab42",
                  },
                ].map((item) => (
                  <button
                    className="be-feature-card"
                    key={item.title}
onClick={() => {
  setActiveMenu(item.title);
  window.scrollTo({ top: 0, behavior: "smooth" });
}}                  >
                    <img
                      src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=700&q=80`}
                      alt=""
                    />

                    <span className="be-feature-body">
                      <strong>{item.title}</strong>
                      <span>{item.desc}</span>
                      <b>Discover more →</b>
                    </span>
                  </button>
                ))}
              </div>
            </section>

            <section className="be-dashboard">
              <div className="be-section-heading">
                <div>
                  <p className="be-kicker">YOUR PORTFOLIO PREVIEW</p>
                  <h2>Demo account overview</h2>
                </div>
                <span className="be-demo-pill">● DEMO MODE</span>
              </div>

              <div className="be-stats">
                <article className="be-balance">
                  <span>Total demo balance</span>
                  <button onClick={() => setShowBalance(!showBalance)}>
                    {showBalance ? "Hide balance" : "Show balance"}
                  </button>

                  <h3>
                    {showBalance ? "Rs. 125,000.00" : "Rs. ••••••••"}
                  </h3>

                  <small>Sample portfolio data only</small>
                </article>

                <article className="be-stat">
                  <span>Total income</span>
                  <h3>Rs. 110,000</h3>
                  <small>+8.2% this month</small>
                </article>

                <article className="be-stat">
                  <span>Total expenses</span>
                  <h3>Rs. 18,500</h3>
                  <small>Sample monthly spending</small>
                </article>
              </div>

              <div className="be-transactions">
                <div className="be-section-heading">
                  <div>
                    <h2>Recent transactions</h2>
                    <p>Example activity in your demo account</p>
                  </div>

                  <input
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search transactions..."
                  />
                </div>

                {filteredTransactions.map((item) => (
                  <div className="be-transaction" key={item.name}>
                    <span className="be-transaction-icon">
                      {item.amount > 0 ? "↙" : "↗"}
                    </span>

                    <strong>{item.name}</strong>
                    <span>{item.date}</span>

                    <b className={item.amount > 0 ? "be-positive" : ""}>
                      {item.amount > 0 ? "+" : "−"}Rs.{" "}
                      {Math.abs(item.amount).toLocaleString("en-PK")}
                    </b>
                  </div>
                ))}

                {filteredTransactions.length === 0 && (
                  <p>No matching transactions found.</p>
                )}
              </div>
            </section>
          </>
        ) : activePage === "Accounts" ? (
          <section className="be-detail-page be-accounts-page">
            <button className="be-back-button" onClick={goHome}>
              ← Back to Home
            </button>

            {!selectedAccount ? (
              <>
                <p className="be-kicker">
                  BANKEASE · PERSONAL BANKING
                </p>

                <h1>Find the account for you.</h1>

                <p className="be-detail-intro">
                  Explore different account experiences and discover the
                  features that fit your everyday needs.
                </p>

                <div className="be-account-grid">
                  {accountOptions.map((account) => (
                    <button
                      className="be-account-card"
                      key={account.title}
                      onClick={() => {
                        setSelectedAccount(account);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      <span className="be-account-icon">
                        {account.icon}
                      </span>

                      <h2>{account.title}</h2>
                      <p>{account.desc}</p>
                      <b>Explore account →</b>
                    </button>
                  ))}
                </div>

                <div className="be-account-note">
                  <h3>Banking, on your terms.</h3>
                  <p>
                    This website is a student portfolio project. Account
                    features are illustrative and may differ from real bank
                    products.
                  </p>
                </div>
              </>
            ) : (
              <>
                <section className="be-account-hero">
                  <div className="be-account-hero-copy">
                    <p className="be-kicker">
                      BANKEASE · PERSONAL BANKING
                    </p>

                    <span className="be-account-icon">
                      {selectedAccount.icon}
                    </span>

                    <h1>{selectedAccount.heading}</h1>

                    <p>{selectedAccount.intro}</p>

                    <a className="be-account-cta" href="#account-benefits">
                      Explore benefits ↓
                    </a>
                  </div>

                  <img
                    src={`https://images.unsplash.com/${selectedAccount.image}?auto=format&fit=crop&w=1200&q=85`}
                    alt={selectedAccount.title}
                  />
                </section>

                <section
                  id="account-benefits"
                  className="be-account-content"
                >
                  <p className="be-kicker">MADE FOR YOUR GOALS</p>

                  <h2>{selectedAccount.title} benefits</h2>

                  <p className="be-account-lead">
                    Explore the features of this account through your
                    interactive BankEase portfolio demo.
                  </p>

                  <div className="be-account-benefits">
                    {selectedAccount.benefits.map((benefit) => (
                      <article
                        className="be-account-benefit"
                        key={benefit.title}
                      >
                        <span className="be-account-icon">
                          {benefit.icon}
                        </span>

                        <h3>{benefit.title}</h3>
                        <p>{benefit.desc}</p>
                      </article>
                    ))}
                  </div>
                </section>

                <section className="be-account-content be-account-split">
                  <div>
                    <p className="be-kicker">GETTING STARTED</p>

                    <h2>Explore your next steps</h2>

                    <p className="be-account-lead">
                      Before choosing a real bank account, take time to
                      understand the requirements and features.
                    </p>

                    <ol className="be-account-list">
                      {selectedAccount.steps.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                  </div>

                  <div className="be-account-note">
                    <span className="be-account-icon">i</span>

                    <h3>Before you apply</h3>

                    <p>
                      This is a student portfolio demonstration. It does
                      not open real accounts, collect banking credentials
                      or process payments.
                    </p>

                    <button
                      className="be-primary"
                      onClick={() =>
                        alert(
                          "Demo only. No real account application is available."
                        )
                      }
                    >
                      Try demo application ↗
                    </button>
                  </div>
                </section>

                <section className="be-account-content">
                  <p className="be-kicker">NEED TO KNOW</p>

                  <h2>Frequently asked questions</h2>

                  <div className="be-account-faqs">
                    <details>
                      <summary>Can I open an account on this website?</summary>
                      <p>
                        No. This is a portfolio demo. To open a real account,
                        use the official website or branch of your chosen bank.
                      </p>
                    </details>

                    <details>
                      <summary>Are there any account fees?</summary>
                      <p>
                        Fees, minimum balance requirements and eligibility
                        depend on the actual bank and account type. Review
                        the bank's official schedule of charges.
                      </p>
                    </details>

                    <details>
                      <summary>Does this page use real banking data?</summary>
                      <p>
                        No. The account information and examples on this
                        website are for demonstration purposes only.
                      </p>
                    </details>
                  </div>
                </section>

                <div className="be-account-actions">
                  <button
                    className="be-back-button"
                    onClick={() => {
                      setSelectedAccount(null);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    ← Back to all accounts
                  </button>

                  <div className="be-account-next">
                    <span>Explore another account</span>

                    {accountOptions
                      .filter(
                        (account) =>
                          account.title !== selectedAccount.title
                      )
                      .map((account) => (
                        <button
                          key={account.title}
                          onClick={() => {
                            setSelectedAccount(account);
                            window.scrollTo({
                              top: 0,
                              behavior: "smooth",
                            });
                          }}
                        >
                          {account.title} →
                        </button>
                      ))}
                  </div>
                </div>
              </>
            )}
          </section>
        ) : (
          <section className="be-detail-page">
            <button className="be-back-button" onClick={goHome}>
              ← Back to Home
            </button>

            <p className="be-kicker">BANKEASE · EXPLORE</p>

            <h1>{activePage}</h1>

            <p className="be-detail-intro">
              Explore {activePage.toLowerCase()} services in this BankEase
              portfolio demo.
            </p>

            {selectedService && (
              <img
                className="be-detail-image"
                src={`https://images.unsplash.com/${selectedService.image}?auto=format&fit=crop&w=1400&q=85`}
                alt={selectedService.title}
              />
            )}

            <div className="be-detail-panel">
              <h2>{selectedService?.title || activePage}</h2>

              <p>
                {selectedService?.desc ||
                  "Learn more about BankEase and explore the services available in this website demo."}
              </p>

              <p>
                This page is a visual demonstration for a student portfolio.
                No real account, payment or banking service is connected.
              </p>

              <button className="be-primary" onClick={goHome}>
                Return to Home →
              </button>
            </div>

            <h2 className="be-related-title">Explore more</h2>

            <div className="be-feature-grid">
              {allServices
                .filter((service) => service.title !== activePage)
                .slice(0, 3)
                .map((service) => (
                  <button
                    className="be-feature-card"
                    key={service.title}
                    onClick={() => openService(service.title)}
                  >
                    <img
                      src={`https://images.unsplash.com/${service.image}?auto=format&fit=crop&w=700&q=80`}
                      alt=""
                    />

                    <span className="be-feature-body">
                      <strong>{service.title}</strong>
                      <span>{service.desc}</span>
                      <b>Explore →</b>
                    </span>
                  </button>
                ))}
            </div>
          </section>
        )}
      </main>
<FAQSection title="Questions? We've got answers." />
      <footer className="be-footer">
        <strong>BankEase</strong>
        <span>© 2026 Student portfolio project</span>
        <span>Demo only — no real banking services</span>
      </footer>
    </div>
  );
}

export default App;
