"use client";

import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  BadgeCheck,
  CircleHelp,
  Command,
  Fingerprint,
  Headphones,
  LockKeyhole,
  Menu,
  Package,
  ShieldCheck,
  ShoppingBag,
  Users,
  Wallet,
  X,
  Zap,
  Eye,
  EyeOff,
} from "lucide-react";

type View = "home" | "login" | "signup" | "catalog" | "product";
type Role = "Customer" | "Reseller";

const products = [
  {
    name: "VOTS Boards",
    category: "Premium Access",
    description:
      "Flexible plans with order tracking and digital delivery.",
    icon: "◆",
    tag: "POPULAR",
    plans: ["1 Day", "2 Days", "7 Days"],
  },
  {
    name: "Digital License",
    category: "License Key",
    description: "A license product with key-based delivery.",
    icon: "⌘",
    tag: "LICENSE",
    plans: ["1 Day", "30 Days"],
  },
  {
    name: "Custom Service",
    category: "Required Details",
    description: "A service requiring details to process an order.",
    icon: "◈",
    tag: "CUSTOM",
    plans: ["Standard", "Priority"],
  },
];

const demoPlans = [
  { duration: "1 Day", customer: "$3.00", reseller: "$2.00" },
  { duration: "2 Days", customer: "$5.00", reseller: "$3.50" },
  { duration: "7 Days", customer: "$12.00", reseller: "$9.00" },
  { duration: "30 Days", customer: "$25.00", reseller: "$18.00" },
  { duration: "Standard", customer: "$10.00", reseller: "$7.00" },
  { duration: "Priority", customer: "$20.00", reseller: "$15.00" },
];

export default function Home() {
  const [view, setView] = useState<View>("home");
  const [role, setRole] = useState<Role>("Customer");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [selectedPlan, setSelectedPlan] = useState("1 Day");
  const [notice, setNotice] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function openLogin(nextRole: Role) {
    setRole(nextRole);
    setView("login");
    setNotice("");
    setMobileMenu(false);
  }

  function submitDemo(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice(
      "Demo only: real authentication will be enabled after backend integration.",
    );
  }

  function openSignup() {
    setRole("Customer");
    setView("signup");
    setNotice("");
  }

  return (
    <main className="site-shell">
      <header className="topbar">
        <button
          className="brand"
          onClick={() => setView("home")}
          aria-label="ROBO MODS STORE home"
        >
          <span className="brand-mark">
            <Command size={21} />
          </span>
          <span className="brand-name">
            ROBO<span>MODS</span>
            <small>STORE</small>
          </span>
        </button>

        <nav className={mobileMenu ? "nav-links nav-open" : "nav-links"}>
          <button
            className={view === "home" ? "nav-active" : ""}
            onClick={() => {
              setView("home");
              setMobileMenu(false);
            }}
          >
            Home
          </button>
          <button
            className={view === "catalog" || view === "product" ? "nav-active" : ""}
            onClick={() => {
              setView("catalog");
              setMobileMenu(false);
            }}
          >
            Products
          </button>
          <a href="#features" onClick={() => setMobileMenu(false)}>
            Features
          </a>
          <a href="#support" onClick={() => setMobileMenu(false)}>
            Support
          </a>
        </nav>

        <div className="header-actions">
          <button className="login-link" onClick={() => openLogin("Customer")}>
            Sign in
          </button>
          <button className="button button-small" onClick={openSignup}>
            Create account <ArrowRight size={15} />
          </button>
        </div>

        <button
          className="mobile-toggle"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle menu"
        >
          {mobileMenu ? <X /> : <Menu />}
        </button>
      </header>

      {view === "home" && (
        <>
          <section className="hero">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="status-dot" />
                DIGITAL GOODS · LICENSES · RESELLER ACCESS
              </div>

              <h1>
                Power your setup.
                <br />
                <span>Unlock more.</span>
              </h1>

              <p className="hero-description">
                Your hub for digital products, flexible plans, and a
                streamlined order experience built for customers and resellers.
              </p>

              <div className="hero-buttons">
                <button
                  className="button"
                  onClick={() => setView("catalog")}
                >
                  Explore products <ArrowRight size={17} />
                </button>
                <button
                  className="button button-ghost"
                  onClick={() => openLogin("Reseller")}
                >
                  Reseller portal <ArrowDownRight size={17} />
                </button>
              </div>

              <div className="hero-proof">
                <div className="proof-icon">
                  <ShieldCheck size={19} />
                </div>
                <div>
                  <strong>Account-based access</strong>
                  <span>Orders and plans in one place</span>
                </div>
                <div className="proof-divider" />
                <div>
                  <strong>Built for resellers</strong>
                  <span>Separate reseller pricing</span>
                </div>
              </div>
            </div>

            <div className="hero-art">
              <div className="glow-grid" />
              <div className="visual-card">
                <div className="visual-top">
                  <span className="tiny-brand">
                    <Command size={16} /> ROBO CORE
                  </span>
                  <span className="live-pill">● UI PREVIEW</span>
                </div>

                <div className="visual-symbol">
                  <div className="symbol-ring">
                    <Command size={66} strokeWidth={1.3} />
                  </div>
                </div>

                <div className="visual-label">
                  <span>STORE CONTROL EXPERIENCE</span>
                  <strong>
                    ROBO MODS <em>STORE</em>
                  </strong>
                </div>

                <div className="visual-bottom">
                  <span>● FRONTEND PREVIEW</span>
                  <span>V. 1.0.0</span>
                </div>
              </div>

              <div className="floating-card float-top">
                <Zap size={19} />
                <div>
                  <strong>Simple ordering</strong>
                  <small>Designed for clarity</small>
                </div>
              </div>

              <div className="floating-card float-bottom">
                <Fingerprint size={19} />
                <div>
                  <strong>Separate portals</strong>
                  <small>Customer and reseller UI</small>
                </div>
                <BadgeCheck size={18} />
              </div>
            </div>
          </section>

          <section className="portal-section">
            <div className="section-heading">
              <div>
                <span className="eyebrow">GET STARTED</span>
                <h2>Choose your portal</h2>
                <p>
                  Continue as a customer or access your reseller account.
                </p>
              </div>
              <span className="section-index">01 / PORTALS</span>
            </div>

            <div className="portal-grid">
              <button
                className="portal-card"
                onClick={() => openLogin("Customer")}
              >
                <span className="portal-icon">
                  <ShoppingBag size={22} />
                </span>
                <span className="card-kicker">FOR EVERYONE</span>
                <h3>Customer portal</h3>
                <p>
                  Browse products, choose a plan and prepare to track orders.
                </p>
                <span className="card-link">
                  Continue as customer <ArrowRight size={16} />
                </span>
                <span className="card-number">01</span>
              </button>

              <button
                className="portal-card"
                onClick={() => openLogin("Reseller")}
              >
                <span className="portal-icon">
                  <Users size={22} />
                </span>
                <span className="card-kicker">INVITE ONLY</span>
                <h3>Reseller portal</h3>
                <p>
                  A dedicated area for reseller pricing and future order
                  management.
                </p>
                <span className="card-link">
                  Enter reseller portal <ArrowRight size={16} />
                </span>
                <span className="card-number">02</span>
              </button>
            </div>
          </section>

          <section id="features" className="features-section">
            <div className="section-heading">
              <div>
                <span className="eyebrow">DESIGNED FOR CLARITY</span>
                <h2>Everything in one place</h2>
                <p>
                  A storefront that can grow when the backend API is ready.
                </p>
              </div>
            </div>

            <div className="feature-grid">
              <Feature
                icon={<Package size={20} />}
                title="Digital products"
                text="A catalogue designed for products and configurable plans."
              />
              <Feature
                icon={<Wallet size={20} />}
                title="Reseller balance"
                text="A future wallet display for approved reseller accounts."
              />
              <Feature
                icon={<LockKeyhole size={20} />}
                title="Separate portals"
                text="Distinct customer and reseller sign-in screens."
              />
              <Feature
                icon={<Headphones size={20} />}
                title="Order support"
                text="Support information can be configured later."
              />
            </div>
          </section>

          <section className="cta-strip" id="support">
            <div className="cta-symbol">
              <CircleHelp size={22} />
            </div>
            <div>
              <h3>Need help with an order?</h3>
              <p>
                Support contact details will be added when the store backend
                is connected.
              </p>
            </div>
            <button
              className="button button-ghost"
              onClick={() =>
                setNotice("Support details will be configured later.")
              }
            >
              Support information <ArrowRight size={16} />
            </button>
          </section>
        </>
      )}

      {view === "catalog" && (
        <section className="inner-page">
          <div className="inner-heading">
            <span className="eyebrow">STORE CATALOGUE</span>
            <h1>
              Explore products<span>.</span>
            </h1>
            <p>
              These are sample products. Live catalogue data will come from
              your API later.
            </p>
          </div>

          <div className="catalog-grid">
            {products.map((product) => (
              <article className="product-card" key={product.name}>
                <div className="product-card-top">
                  <span className="product-glyph">{product.icon}</span>
                  <span className="tag">{product.tag}</span>
                </div>
                <small>{product.category}</small>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <button
                  className="button button-full"
                  onClick={() => {
                    setSelectedProduct(product);
                    setSelectedPlan(product.plans[0]);
                    setView("product");
                  }}
                >
                  View plans <ArrowRight size={16} />
                </button>
              </article>
            ))}
          </div>

          <button className="back-link" onClick={() => setView("home")}>
            ← Back to home
          </button>
        </section>
      )}

      {view === "product" && (
        <section className="inner-page product-detail">
          <button className="back-link" onClick={() => setView("catalog")}>
            ← All products
          </button>

          <div className="inner-heading">
            <span className="eyebrow">
              {selectedProduct.category.toUpperCase()}
            </span>
            <h1>
              {selectedProduct.name}
              <span>.</span>
            </h1>
            <p>{selectedProduct.description}</p>
          </div>

          <div className="plans-grid">
            {demoPlans
              .filter((plan) => selectedProduct.plans.includes(plan.duration))
              .map((plan) => (
                <button
                  className={
                    selectedPlan === plan.duration
                      ? "plan-card plan-selected"
                      : "plan-card"
                  }
                  key={plan.duration}
                  onClick={() => setSelectedPlan(plan.duration)}
                >
                  <span>{plan.duration}</span>
                  <strong>{plan.customer}</strong>
                  <small>Sample display price</small>
                  <span className="plan-select">
                    {selectedPlan === plan.duration
                      ? "Selected ✓"
                      : "Choose plan"}
                  </span>
                </button>
              ))}
          </div>

          <div className="demo-note">
            <ShieldCheck size={17} />
            Demo prices only. These are not live offers and cannot be purchased
            until the backend is connected.
          </div>

          <button
            className="button"
            onClick={() => openLogin("Customer")}
          >
            Sign in to continue <ArrowRight size={16} />
          </button>
        </section>
      )}

      {(view === "login" || view === "signup") && (
        <section className="auth-layout">
          <div className="auth-aside">
            <button
              className="back-link"
              onClick={() => setView("home")}
            >
              ← Back to store
            </button>

            <div className="auth-emblem">
              <Command size={46} />
            </div>

            <span className="eyebrow">ROBO MODS STORE</span>
            <h1>
              {role === "Reseller"
                ? "Reseller access."
                : "Your digital store."}
            </h1>
            <p>
              {role === "Reseller"
                ? "A private portal for approved resellers."
                : "A customer account interface for products and orders."}
            </p>

            <div className="auth-benefit">
              <ShieldCheck size={18} />
              Authentication will be connected securely later.
            </div>
          </div>

          <div className="auth-form-wrap">
            <div className="auth-form">
              <div className="role-switch">
                <button
                  className={role === "Customer" ? "role-active" : ""}
                  onClick={() => {
                    setRole("Customer");
                    setNotice("");
                  }}
                >
                  Customer
                </button>
                <button
                  className={role === "Reseller" ? "role-active" : ""}
                  onClick={() => {
                    setRole("Reseller");
                    setNotice("");
                  }}
                >
                  Reseller
                </button>
              </div>

              <span className="eyebrow">
                {view === "signup" ? "NEW ACCOUNT" : "WELCOME BACK"}
              </span>
              <h2>
                {view === "signup"
                  ? "Create account"
                  : role === "Reseller"
                    ? "Reseller portal"
                    : "Customer portal"}
              </h2>
              <p>
                {view === "signup"
                  ? "Create a customer account interface."
                  : "Enter your details in this demo form."}
              </p>

              <form onSubmit={submitDemo}>
                <label>
                  Username
                  <input
                    required
                    autoComplete="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    placeholder="Enter your username"
                  />
                </label>

                <label>
                  Password
                  <span className="password-wrap">
                    <input
                      required
                      minLength={6}
                      autoComplete={
                        view === "signup" ? "new-password" : "current-password"
                      }
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label="Toggle password visibility"
                    >
                      {showPassword ? (
                        <EyeOff size={17} />
                      ) : (
                        <Eye size={17} />
                      )}
                    </button>
                  </span>
                </label>

                <button className="button button-full" type="submit">
                  {view === "signup" ? "Create customer account" : "Sign in"}
                  <ArrowRight size={16} />
                </button>
              </form>

              {view === "signup" && role === "Customer" && (
                <p className="form-switch">
                  Already have an account?{" "}
                  <button
                    onClick={() => {
                      setView("login");
                      setNotice("");
                    }}
                  >
                    Sign in
                  </button>
                </p>
              )}

              {view === "login" && role === "Customer" && (
                <p className="form-switch">
                  New here?{" "}
                  <button onClick={openSignup}>Create an account</button>
                </p>
              )}

              {role === "Reseller" && (
                <div className="reseller-notice">
                  <LockKeyhole size={16} />
                  Reseller accounts will be managed by the separate admin
                  website.
                </div>
              )}

              {notice && <div className="notice">{notice}</div>}

              <div className="form-security">
                <LockKeyhole size={14} />
                Demo form only — no credentials are sent or saved.
              </div>
            </div>
          </div>
        </section>
      )}

      <footer className="footer">
        <div className="footer-brand">
          <span className="brand-mark small">
            <Command size={16} />
          </span>
          <strong>ROBO MODS STORE</strong>
        </div>
        <span>Digital goods, managed simply.</span>
        <span className="footer-status">● FRONTEND PREVIEW</span>
        <span>© {new Date().getFullYear()} ROBO MODS</span>
      </footer>

      {notice && view === "home" && (
        <div className="toast" role="status">
          {notice}
          <button onClick={() => setNotice("")} aria-label="Close notice">
            <X size={15} />
          </button>
        </div>
      )}
    </main>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <article className="feature-card">
      <span className="feature-icon">{icon}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
