import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./HelpPage.css";

const HelpPage = () => {
  return (
    <div className="help-page bg-[#E0D082] min-h-screen">
      <Navbar />
      <div className="help-container mx-auto px-6 py-12 pt-24">
        <h1 className="help-title text-center">Help & Support</h1>

        {/* Help Section */}
        <div className="help-grid">
          {/* FAQ Section */}
          <div className="help-card">
            <h2 className="help-card-title">
              <i className="fas fa-question-circle"></i> FAQs
            </h2>
            <div className="help-card-content">
              <p>
                <strong>How do I adopt a pet?</strong> <br />
                Browse the available pets on the "All Pets" page, click on the pet you are interested in, and fill out the adoption application form.
              </p>
              <p>
                <strong>Can I cancel my adoption application?</strong> <br />
                Yes, you can cancel your application from your Profile page under the "Applications" section.
              </p>
              <p>
                <strong>How can I donate to support animals?</strong> <br />
                Visit our "Donate" page, fill out the form, and make a contribution to support homeless animals.
              </p>
            </div>
          </div>

          {/* Contact Support */}
          <div className="help-card">
            <h2 className="help-card-title">
              <i className="fas fa-headset"></i> Contact Support
            </h2>
            <div className="help-card-content">
              <p>
                <i className="fas fa-envelope"></i> Email:{" "}
                <a href="mailto:support@pawsandhomes.com" className="help-link">
                  support@pawsandhomes.com
                </a>
              </p>
              <p>
                <i className="fas fa-phone"></i> Phone: +977 9876543210
              </p>
              <p>
                <i className="fas fa-clock"></i> Support Hours: Monday - Friday, 9:00 AM - 5:00 PM
              </p>
            </div>
          </div>

          {/* Navigation Guidance */}
          <div className="help-card">
            <h2 className="help-card-title">
              <i className="fas fa-compass"></i> Navigation Guidance
            </h2>
            <div className="help-card-content">
              <p>
                <strong>Homepage:</strong> Explore tabs like "Dogs," "Cats," and "All Pets."
              </p>
              <p>
                <strong>All Pets Page:</strong> Use filters to search for pets based on type, gender, or size.
              </p>
              <p>
                <strong>Profile Page:</strong> View and manage your applications.
              </p>
              <p>
                <strong>Donation Page:</strong> Support animals by making a donation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HelpPage;
