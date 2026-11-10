import { ArrowLeft, MapPin, BedDouble, Bath, Maximize, Phone, ShieldCheck } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const PropertyDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="details-page">
      <button onClick={() => navigate(-1)} className="back-button">
        <ArrowLeft size={18} /> Back to Properties
      </button>

      <div className="details-container">
        <img
          className="details-image"
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400"
          alt="Luxury property"
        />

        <div className="details-content">
          <span className="section-label">AYTORA EXCLUSIVE</span>
          <h1>Modern Luxury Villa</h1>

          <p className="details-location">
            <MapPin size={18} /> DHA Phase 6, Lahore
          </p>

          <h2>PKR 8.5 Crore</h2>

          <div className="details-features">
            <span><BedDouble /> 5 Bedrooms</span>
            <span><Bath /> 6 Bathrooms</span>
            <span><Maximize /> 1 Kanal</span>
          </div>

          <h3>Property Overview</h3>
          <p>
            Discover elegant living in this modern luxury villa.
            Designed with spacious interiors and contemporary
            architecture, this property offers a comfortable
            lifestyle for your family.
          </p>

          <div className="details-trust">
            <ShieldCheck />
            <span>Explore your next home with AYTORA Properties.</span>
          </div>

          <button
            className="details-contact"
            onClick={() => window.location.href = "mailto:hello@aytoraproperties.com?subject=Property%20Inquiry%20" + id}
          >
            <Phone size={18} /> Enquire About This Property
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
