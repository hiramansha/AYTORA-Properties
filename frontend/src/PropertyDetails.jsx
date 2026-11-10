
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  MapPin,
  BedDouble,
  Bath,
  Maximize2,
  Phone,
  ShieldCheck
} from "lucide-react";

function PropertyDetails({ properties }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const property = properties.find((item) => item.id === Number(id));

  if (!property) {
    return (
      <div className="details-not-found">
        <h1>Property Not Found</h1>
        <button onClick={() => navigate("/")}>
          <ArrowLeft size={18} /> Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="details-page">
      <header className="details-navbar">
        <button onClick={() => navigate("/")} className="back-button">
          <ArrowLeft size={18} /> Back to Properties
        </button>
        <strong>AYTORA PROPERTIES</strong>
      </header>

      <main className="details-container">
        <div className="details-image-wrap">
          <img src={property.image} alt={property.title} />
        </div>

        <div className="details-content">
          <span className="section-label">AYTORA EXCLUSIVE</span>

          <h1>{property.title}</h1>

          <p className="details-location">
            <MapPin size={18} /> {property.location}
          </p>

          <h2>{property.price}</h2>

          <div className="details-features">
            <span><BedDouble /> {property.beds} Bedrooms</span>
            <span><Bath /> {property.baths} Bathrooms</span>
            <span><Maximize2 /> {property.area}</span>
          </div>

          <h3>Property Overview</h3>
          <p className="details-description">
            {property.description}
          </p>

          <div className="details-trust">
            <ShieldCheck />
            <span>Explore your next home with AYTORA Properties.</span>
          </div>

          <a
            className="details-contact"
            href={`mailto:hello@aytoraproperties.com?subject=${encodeURIComponent(
              "Property Inquiry: " + property.title
            )}`}
          >
            <Phone size={18} /> Enquire About This Property
            <ArrowUpRight size={18} />
          </a>
        </div>
      </main>
    </div>
  );
}

export default PropertyDetails;

