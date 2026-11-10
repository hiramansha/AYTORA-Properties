import { useState } from "react";
import {
  Search,
  MapPin,
  BedDouble,
  Bath,
  Maximize,
  Heart,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  Home,
  Building2,
  KeyRound,
  ShieldCheck,
  Phone,
  ArrowUpRight
} from "lucide-react";
import "./App.css";

const properties = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    location: "DHA Phase 6, Lahore",
    price: "PKR 8.5 Crore",
    beds: 5,
    baths: 6,
    area: "1 Kanal",
    type: "House",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900"
  },
  {
    id: 2,
    title: "Contemporary Family Home",
    location: "Bahria Town, Lahore",
    price: "PKR 4.2 Crore",
    beds: 4,
    baths: 4,
    area: "10 Marla",
    type: "House",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900"
  },
  {
    id: 3,
    title: "Premium Modern Apartment",
    location: "Gulberg, Lahore",
    price: "PKR 2.1 Crore",
    beds: 3,
    baths: 3,
    area: "2,200 Sq Ft",
    type: "Apartment",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900"
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [propertyType, setPropertyType] = useState("All");
  const [favorites, setFavorites] = useState([]);

  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(search.toLowerCase()) ||
      property.location.toLowerCase().includes(search.toLowerCase());

    const matchesType =
      propertyType === "All" || property.type === propertyType;

    return matchesSearch && matchesType;
  });

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="website">

      <div className="topbar">
        <span>Where Trust Finds a Home.</span>
        <span className="topbar-right">
          <Phone size={14} /> Your Property Journey Starts Here
        </span>
      </div>

      <header className="navbar">
        <a href="#home" className="brand">
          <span className="brand-icon"><Home size={23} /></span>
          <span>
            <strong>AYTORA</strong>
            <small>PROPERTIES</small>
          </span>
        </a>

        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#properties" onClick={() => setMenuOpen(false)}>Properties</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Our Services</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="#properties" className="nav-cta">Explore Properties <ArrowUpRight size={16} /></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <span className="eyebrow">FIND YOUR PLACE IN THE WORLD</span>
            <h1>Find a Home.<br /><span>Build Your Future.</span></h1>
            <p>
              Discover exceptional properties and find the perfect space
              for your next chapter with AYTORA Properties.
            </p>
            <a href="#properties" className="hero-button">
              Explore Properties <ArrowRight size={18} />
            </a>
          </div>

          <div className="hero-bottom">
            <span>01 / PREMIUM PROPERTY COLLECTION</span>
            <span>LAHORE · PAKISTAN</span>
          </div>
        </section>

        <section className="search-section">
          <div className="search-heading">
            <span>YOUR NEXT ADDRESS</span>
            <h2>Find the right property</h2>
          </div>

          <div className="search-box">
            <div className="search-input">
              <Search size={19} />
              <input
                placeholder="Search location or property..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
            >
              <option value="All">All Properties</option>
              <option value="House">Houses</option>
              <option value="Apartment">Apartments</option>
            </select>

            <a href="#properties" className="search-button">
              Search <ArrowRight size={17} />
            </a>
          </div>
        </section>

        <section className="properties-section" id="properties">
          <div className="section-heading">
            <div>
              <span className="section-label">CURATED FOR YOU</span>
              <h2>Featured Properties</h2>
              <p>Explore spaces selected for exceptional living.</p>
            </div>
            <a href="#properties" className="view-all">
              Explore Collection <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="property-grid">
            {filteredProperties.map((property) => (
              <article className="property-card" key={property.id}>
                <div className="property-image">
                  <img src={property.image} alt={property.title} />
                  <span className="property-tag">FEATURED</span>
                  <button
                    className={favorites.includes(property.id) ? "favorite active" : "favorite"}
                    onClick={() => toggleFavorite(property.id)}
                    aria-label="Add to favorites"
                  >
                    <Heart size={19} fill={favorites.includes(property.id) ? "currentColor" : "none"} />
                  </button>
                </div>

                <div className="property-info">
                  <span className="property-type">{property.type}</span>
                  <h3>{property.title}</h3>
                  <p className="property-location">
                    <MapPin size={15} /> {property.location}
                  </p>
                  <div className="property-features">
                    <span><BedDouble size={16} /> {property.beds} Beds</span>
                    <span><Bath size={16} /> {property.baths} Baths</span>
                    <span><Maximize size={16} /> {property.area}</span>
                  </div>
                  <div className="property-footer">
                    <strong>{property.price}</strong>
                    <button aria-label="View property"><ArrowUpRight size={19} /></button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="empty-state">
              <Search size={30} />
              <h3>No properties found</h3>
              <p>Try another location or property type.</p>
            </div>
          )}
        </section>

        <section className="services-section" id="services">
          <div className="section-heading">
            <div>
              <span className="section-label">THE AYTORA DIFFERENCE</span>
              <h2>More Than Just Properties</h2>
              <p>Thoughtful guidance at every step of your property journey.</p>
            </div>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <span><Home size={25} /></span>
              <h3>Buy a Property</h3>
              <p>Find a place that matches your lifestyle and future plans.</p>
            </div>
            <div className="service-card">
              <span><KeyRound size={25} /></span>
              <h3>Sell a Property</h3>
              <p>Connect with potential buyers through a trusted process.</p>
            </div>
            <div className="service-card">
              <span><Building2 size={25} /></span>
              <h3>Property Investment</h3>
              <p>Explore opportunities to make informed property decisions.</p>
            </div>
            <div className="service-card">
              <span><ShieldCheck size={25} /></span>
              <h3>Trusted Guidance</h3>
              <p>Receive transparent support throughout your journey.</p>
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1000"
              alt="Elegant modern home"
            />
          </div>
          <div className="about-content">
            <span className="section-label">OUR STORY</span>
            <h2>A Better Way to Find Your Place.</h2>
            <p>
              At AYTORA Properties, we believe finding a property should
              feel exciting, clear and trustworthy. Our goal is to make
              every property journey a meaningful experience.
            </p>
            <a href="#contact" className="dark-button">
              Get to Know Us <ArrowRight size={17} />
            </a>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <span className="section-label">LET'S FIND YOUR NEXT HOME</span>
          <h2>Your Next Chapter Starts Here.</h2>
          <p>Connect with AYTORA Properties and take the next step.</p>
          <a href="mailto:hello@aytoraproperties.com" className="contact-button">
            Contact Our Team <ArrowRight size={18} />
          </a>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="brand footer-brand">
          <span className="brand-icon"><Home size={22} /></span>
          <span><strong>AYTORA</strong><small>PROPERTIES</small></span>
        </a>
        <p>Where Trust Finds a Home.</p>
        <span className="copyright">© 2026 AYTORA Properties. All rights reserved.</span>
      </footer>

    </div>
  );
}

export default App;
