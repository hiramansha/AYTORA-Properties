
import { useState } from 'react'
import aytoraLogo from './assets/aytora-logo.png'
import {
  Search, Menu, X, ArrowUpRight, MapPin,
  BedDouble, Bath, Maximize2, ChevronDown,
  Building2, KeyRound, Home, ShieldCheck
} from 'lucide-react'
import './App.css'

const properties = [
  {
    id: 1,
    title: 'The Grand Residence',
    location: 'DHA Phase 6, Lahore',
    price: 'PKR 4.85 Crore',
    beds: 4,
    baths: 5,
    area: '1 Kanal',
    type: 'For Sale',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000&q=85'
  },
  {
    id: 2,
    title: 'Modern Luxury Villa',
    location: 'Bahria Town, Lahore',
    price: 'PKR 2.75 Crore',
    beds: 5,
    baths: 6,
    area: '10 Marla',
    type: 'For Sale',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&q=85'
  },
  {
    id: 3,
    title: 'The Contemporary Home',
    location: 'Gulberg, Lahore',
    price: 'PKR 1.85 Lac / Month',
    beds: 3,
    baths: 3,
    area: '1 Kanal',
    type: 'For Rent',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1000&q=85'
  }
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [location, setLocation] = useState('All Locations')
  const [propertyType, setPropertyType] = useState('All Properties')

  const filteredProperties = properties.filter(property => {
    const locationMatch =
      location === 'All Locations' ||
      property.location.includes(location)

    const typeMatch =
      propertyType === 'All Properties' ||
      property.type === propertyType

    return locationMatch && typeMatch
  })

  return (
    <div className="site-wrapper">

      {/* Navigation */}
      <header className="navbar">
        <a href="#home" className="brand">
          <img src={aytoraLogo} alt="AYTORA Properties" />
        </a>

        <nav className={menuOpen ? 'nav-links active' : 'nav-links'}>
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

      {/* Hero */}
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

      {/* Search */}
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
                onChange={e => setLocation(e.target.value)}
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
                onChange={e => setPropertyType(e.target.value)}
              >
                <option>All Properties</option>
                <option>For Sale</option>
                <option>For Rent</option>
              </select>
            </div>
          </div>

          <button
            className="search-btn"
            onClick={() => document.getElementById('properties').scrollIntoView({ behavior: 'smooth' })}
          >
            <Search size={18} /> Search
          </button>
        </div>
      </section>

      {/* Properties */}
      <section className="properties-section" id="properties">
        <div className="section-heading">
          <div>
            <span className="section-label">CURATED FOR YOU</span>
            <h2>Explore Our <em>Properties.</em></h2>
            <p>Thoughtfully selected spaces for every lifestyle.</p>
          </div>
          <span className="property-count">
            {filteredProperties.length.toString().padStart(2, '0')} PROPERTIES
          </span>
        </div>

        <div className="property-grid">
          {filteredProperties.length > 0 ? (
            filteredProperties.map(property => (
              <article className="property-card" key={property.id}>
                <div className="property-image">
                  <img src={property.image} alt={property.title} />
                  <span className="property-tag">{property.type}</span>
                  <button className="property-arrow" aria-label={`View ${property.title}`}>
                    <ArrowUpRight size={20} />
                  </button>
                </div>

                <div className="property-info">
                  <span className="property-location">
                    <MapPin size={14} /> {property.location}
                  </span>
                  <h3>{property.title}</h3>
                  <strong className="property-price">{property.price}</strong>

                  <div className="property-details">
                    <span><BedDouble size={16} /> {property.beds} Beds</span>
                    <span><Bath size={16} /> {property.baths} Baths</span>
                    <span><Maximize2 size={15} /> {property.area}</span>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <p>No properties match your selection.</p>
          )}
        </div>

        <div className="view-all">
          <a href="#contact">Interested in a property? Contact us <ArrowUpRight size={16} /></a>
        </div>
      </section>

      {/* About */}
      <section className="about-section" id="about">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000&q=85"
            alt="Elegant modern living room"
          />
          <div className="about-image-label">
            <span>YOUR NEXT CHAPTER</span>
            <strong>Begins Here.</strong>
          </div>
        </div>

        <div className="about-content">
          <span className="section-label">A LITTLE ABOUT US</span>
          <h2>More Than Property.<br />It's About <em>Belonging.</em></h2>
          <p>
            At AYTORA Properties, we believe finding the right property
            is about more than four walls. It's about finding a place
            where your future feels right.
          </p>
          <p>
            From discovering your dream home to making confident
            property decisions, we're here to make every step simpler.
          </p>

          <a href="#contact" className="primary-btn">
            Get to Know Us <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="services-section" id="services">
        <div className="services-heading">
          <span className="section-label">WHAT WE OFFER</span>
          <h2>Property Made <em>Simpler.</em></h2>
          <p>Personal guidance and professional support at every step.</p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <Home size={27} />
            <h3>Buying Property</h3>
            <p>Find a property that fits your lifestyle and future goals.</p>
            <ArrowUpRight size={18} className="service-arrow" />
          </div>

          <div className="service-card">
            <KeyRound size={27} />
            <h3>Selling Property</h3>
            <p>Make your selling journey straightforward and confident.</p>
            <ArrowUpRight size={18} className="service-arrow" />
          </div>

          <div className="service-card">
            <Building2 size={27} />
            <h3>Rental Solutions</h3>
            <p>Discover comfortable spaces for your next chapter.</p>
            <ArrowUpRight size={18} className="service-arrow" />
          </div>

          <div className="service-card">
            <ShieldCheck size={27} />
            <h3>Property Guidance</h3>
            <p>Navigate property decisions with professional guidance.</p>
            <ArrowUpRight size={18} className="service-arrow" />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section" id="contact">
        <div>
          <span className="section-label">LET'S CONNECT</span>
          <h2>Your Next Move<br />Starts <em>With Us.</em></h2>
          <p>Have a property in mind? Let's talk about it.</p>
        </div>
        <a href="mailto:info@aytoraproperties.com" className="contact-btn">
          Get in Touch <ArrowUpRight size={19} />
        </a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <a href="#home" className="brand footer-brand">
          <img src={aytoraLogo} alt="AYTORA Properties" />
        </a>

        <p>Exceptional spaces. Meaningful living.</p>

        <span>© {new Date().getFullYear()} AYTORA Properties. All rights reserved.</span>
      </footer>

    </div>
  )
}

export default App
