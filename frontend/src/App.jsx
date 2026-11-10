
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import PropertyDetails from "./PropertyDetails";
import aytoraLogo from "./assets/aytora-logo.png";
import {
  Search,
  Menu,
  X,
  ArrowUpRight,
  MapPin,
  BedDouble,
  Bath,
  Maximize2,
  Building2,
  KeyRound,
  Home,
  ShieldCheck
} from "lucide-react";
import "./App.css";

const properties = [
  {
    id: 1,
    title: "The Grand Residence",
    location: "DHA Phase 6, Lahore",
    price: "PKR 4.85 Crore",
    beds: 4,
    baths: 5,
    area: "1 Kanal",
    type: "For Sale",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000&q=85",
    description: "A beautiful luxury residence with spacious interiors and elegant modern architecture."
  },
  {
    id: 2,
    title: "Modern Luxury Villa",
    location: "Bahria Town, Lahore",
    price: "PKR 2.75 Crore",
    beds: 5,
    baths: 6,
    area: "10 Marla",
    type: "For Sale",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&q=85",
    description: "A contemporary family home offering comfortable spaces and a premium lifestyle."
  },
  {
    id: 3,
    title: "The Contemporary Home",
    location: "Gulberg, Lahore",
    price: "PKR 1.85 Lac / Month",
    beds: 3,
    baths: 3,
    area: "1 Kanal",
    type: "For Rent",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1000&q=85",
    description: "A stylish and comfortable property in a convenient location."
  }
];

function HomePage() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [location, setLocation] = useState("All Locations");
  const [propertyType, setPropertyType] = useState("All Properties");

  const filteredProperties = properties.filter((property) => {
    const locationMatch =
      location === "All Locations" ||
      property.location.includes(location);

    const typeMatch =
      propertyType === "All Properties" ||
      property.type === propertyType;

    return locationMatch && typeMatch;
  });

  return (
    <div className="site-wrapper">

      <header className="navbar">
        <a href="#home" className="brand">
          <img src={aytoraLogo} alt="AYTORA Properties" />
        </a>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#properties" onClick={() => setMenuOpen(false)}>Properties</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

        <a href="#contact" className="nav-cta">
          Let's Talk <ArrowUpRight size={16} />
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-image" />

          <div className="hero-content">
            <div className="eyebrow">
              <span /> YOUR TRUSTED PROPERTY PARTNER
            </div>

            <h1>
              Find a Place<br />
              to Call <em>Home.</em>
            </h1>

            <p>
              Discover exceptional properties, explore new possibilities,
              and make your next move with confidence.
            </p>

            <div className="hero-buttons">
              <a href="#properties" className="primary-btn">
                Explore Properties <ArrowUpRight size={18} />
              </a>

              <a href="#about" className="text-btn">
                Discover AYTORA
              </a>
            </div>
          </div>

          <div className="hero-bottom">
            <span>01 — 03</span>
            <span>EXCEPTIONAL SPACES. MEANINGFUL LIVING.</span>
            <span>LAHORE, PAKISTAN</span>
          </div>

          <div className="hero-side-text">AYTORA REAL ESTATE</div>
        </section>

        <section className="search-section">
          <div className="search-heading">
            <span>FIND YOUR PROPERTY</span>
            <p>Let's find what you're looking for.</p>
          </div>

          <div className="search-controls">
            <div className="search-field">
              <MapPin size={19} />
              <div>
                <label>LOCATION</label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                >
                  <option>All Locations</option>
                  <option>DHA</option>
                  <option>Bahria Town</option>
                  <option>Gulberg</option>
                </select>
              </div>
            </div>

            <div className="search-field">
              <Building2 size={19} />
              <div>
                <label>PROPERTY TYPE</label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                >
                  <option>All Properties</option>
                  <option>For Sale</option>
                  <option>For Rent</option>
                </select>
              </div>
            </div>

            <button
              className="search-btn"
              onClick={() =>
                document.getElementById("properties").scrollIntoView({
                  behavior: "smooth"
                })
              }
            >
              <Search size={18} /> Search
            </button>
          </div>
        </section>

        <section className="properties-section" id="properties">
          <div className="section-heading">
            <div>
              <span className="section-label">CURATED FOR YOU</span>
              <h2>Explore Our <em>Properties.</em></h2>
              <p>Thoughtfully selected spaces for every lifestyle.</p>
            </div>

            <span className="property-count">
              {filteredProperties.length.toString().padStart(2, "0")} PROPERTIES
            </span>
          </div>

          <div className="property-grid">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property) => (
                <article className="property-card" key={property.id}>
                  <div className="property-image">
                    <img src={property.image} alt={property.title} />
                    <span className="property-tag">{property.type}</span>

                    <button
                      className="property-arrow"
                      aria-label={`View ${property.title}`}
                      onClick={() => navigate(`/property/${property.id}`)}
                    >
                      <ArrowUpRight size={20} />
                    </button>
                  </div>

                  <div className="property-info">
                    <span className="property-location">
                      <MapPin size={14} /> {property.location}
                    </span>

                    <h3>{property.title}</h3>

                    <strong className="property-price">
                      {property.price}
                    </strong>

                    <div className="property-details">
                      <span><BedDouble size={16} /> {property.beds} Beds</span>
                      <span><Bath size={16} /> {property.baths} Baths</span>
                      <span><Maximize2 size={15} /> {property.area}</span>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <p className="no-results">
                No properties match your selection.
              </p>
            )}
          </div>

          <div className="view-all">
            <a href="#contact">
              Interested in a property? Contact us <ArrowUpRight size={16} />
            </a>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1000"
              alt="Elegant modern home"
            />

            <div className="about-image-label">
              <span>THE AYTORA PROMISE</span>
              <strong>Trust. Quality. Home.</strong>
            </div>
          </div>

          <div className="about-content">
            <span className="section-label">OUR STORY</span>
            <h2>A Better Way to Find Your <em>Place.</em></h2>

            <p>
              At AYTORA Properties, we believe finding a property should
              feel exciting, clear and trustworthy. Our goal is to make
              every property journey a meaningful experience.
            </p>

            <a href="#contact" className="primary-btn">
              Get to Know Us <ArrowUpRight size={17} />
            </a>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="services-heading">
            <span className="section-label">THE AYTORA DIFFERENCE</span>
            <h2>More Than Just <em>Properties.</em></h2>
            <p>Thoughtful guidance at every step of your property journey.</p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <Home size={27} />
              <h3>Buy a Property</h3>
              <p>Find a place that matches your lifestyle and future plans.</p>
            </div>

            <div className="service-card">
              <KeyRound size={27} />
              <h3>Sell a Property</h3>
              <p>Connect with potential buyers through a trusted process.</p>
            </div>

            <div className="service-card">
              <Building2 size={27} />
              <h3>Property Investment</h3>
              <p>Explore opportunities to make informed property decisions.</p>
            </div>

            <div className="service-card">
              <ShieldCheck size={27} />
              <h3>Trusted Guidance</h3>
              <p>Receive transparent support throughout your journey.</p>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div>
            <span className="section-label">LET'S FIND YOUR NEXT HOME</span>
            <h2>Your Next Chapter Starts <em>Here.</em></h2>
            <p>Connect with AYTORA Properties and take the next step.</p>
          </div>

          <a href="mailto:hello@aytoraproperties.com" className="contact-btn">
            Contact Our Team <ArrowUpRight size={18} />
          </a>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="brand footer-brand">
          <img src={aytoraLogo} alt="AYTORA Properties" />
        </a>

        <p>Where Trust Finds a Home.</p>

        <span>© 2026 AYTORA Properties. All rights reserved.</span>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/property/:id" element={<PropertyDetails properties={properties} />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default App;
