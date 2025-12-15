import React, { useState } from "react";
import { Link } from "react-router-dom";

const GetQuoteModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    const phoneRegex = /^[0-9\-\+\(\)\s]{10,}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone (at least 10 digits)";
    }

    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      // Send email via Google Apps Script
      const sendFormData = new FormData();
      sendFormData.append('name', formData.name);
      sendFormData.append('email', formData.email);
      sendFormData.append('phone', formData.phone);
      sendFormData.append('company', formData.company);
      sendFormData.append('message', formData.message);
      sendFormData.append('formType', 'Get Quote');

      fetch('https://script.google.com/macros/s/AKfycbwPZn9qmywqygUhlrVCrxPnWX8eMreHidQo1N-37J6sBA1zCVPGty3HKAVmVpkqcCng/exec', {
        method: 'POST',
        body: sendFormData,
      })
        .then((res) => res.text())
        .then((responseData) => {
          console.log('Email sent:', responseData);
          // Download booklet
          downloadBooklet();
          
          // Reset form and close modal
          setFormData({ name: "", email: "", phone: "", company: "", message: "" });
          setIsSubmitting(false);
          onClose();
        })
        .catch((error) => {
          console.error('Error sending email:', error);
          // Still download booklet on error
          downloadBooklet();
          setFormData({ name: "", email: "", phone: "", company: "", message: "" });
          setIsSubmitting(false);
          onClose();
        });
    }
  };

  const downloadBooklet = () => {
    const link = document.createElement("a");
    link.href = "assets/broucher/BTPL_Booklet.pdf";
    link.download = "BTPL_Booklet.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Modal Backdrop */}
      <div
        className="modal-backdrop fade show"
        style={{ display: "block", backdropFilter: "blur(4px)" }}
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div
        className="modal fade show d-block"
        tabIndex="-1"
        style={{ paddingRight: "17px", display: "block" }}
        onClick={onClose}
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          onClick={(e) => e.stopPropagation()}
          style={{
            maxWidth: "1000px",
            animation: "slideUp 0.4s ease-out",
          }}
        >
          <style>{`
            @keyframes slideUp {
              from {
                transform: translateY(50px);
                opacity: 0;
              }
              to {
                transform: translateY(0);
                opacity: 1;
              }
            }
            @keyframes fadeInLeft {
              from {
                transform: translateX(-20px);
                opacity: 0;
              }
              to {
                transform: translateX(0);
                opacity: 1;
              }
            }
            @keyframes fadeInRight {
              from {
                transform: translateX(20px);
                opacity: 0;
              }
              to {
                transform: translateX(0);
                opacity: 1;
              }
            }
            .quote-modal-form-input:focus {
              border-color: #3eb8e7 !important;
              box-shadow: 0 0 0 0.2rem rgba(62, 184, 231, 0.25);
            }
            .quote-modal-form-input::placeholder {
              color: #999;
            }
            .quote-submit-btn {
              background: linear-gradient(135deg, #3eb8e7 0%, #1d3b6a 100%);
              border: none;
              font-weight: 600;
              letter-spacing: 0.5px;
              transition: all 0.3s ease;
            }
            .quote-submit-btn:hover:not(:disabled) {
              transform: translateY(-2px);
              box-shadow: 0 8px 20px rgba(62, 184, 231, 0.3);
            }
            .quote-submit-btn:disabled {
              opacity: 0.7;
            }
            .feature-badge {
              display: inline-flex;
              align-items: center;
              padding: 10px 16px;
              background: rgba(255, 255, 255, 0.1);
              border-radius: 8px;
              margin-bottom: 12px;
              backdrop-filter: blur(10px);
              border: 1px solid rgba(255, 255, 255, 0.2);
              font-size: 14px;
              transition: all 0.3s ease;
            }
            .feature-badge:hover {
              background: rgba(255, 255, 255, 0.15);
              transform: translateX(4px);
            }
          `}</style>

          <div className="modal-content border-0 shadow-lg" style={{ borderRadius: "16px", overflow: "hidden" }}>
            {/* Close Button */}
            <button
              type="button"
              className="btn-close position-absolute top-0 end-0 m-3"
              onClick={onClose}
              style={{
                zIndex: 10,
                filter: "brightness(0.8)",
              }}
              aria-label="Close"
            ></button>

            {/* Modal Body - Two Column Layout */}
            <div className="modal-body p-0" style={{ minHeight: "550px" }}>
              <div className="row g-0 align-items-stretch">
                {/* Left Column - Attractive Illustration */}
                <div
                  className="col-md-5 d-none d-md-flex flex-column align-items-center justify-content-between p-5"
                  style={{
                    background: "linear-gradient(135deg, #1d3b6a 0%, #2d5a9e 50%, #3eb8e7 100%)",
                    position: "relative",
                    overflow: "hidden",
                    animation: "fadeInLeft 0.5s ease-out",
                  }}
                >
                  {/* Decorative animated elements */}
                  <div
                    style={{
                      position: "absolute",
                      width: "400px",
                      height: "400px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.08)",
                      top: "-100px",
                      right: "-100px",
                      animation: "float 6s ease-in-out infinite",
                    }}
                  ></div>
                  <div
                    style={{
                      position: "absolute",
                      width: "250px",
                      height: "250px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.05)",
                      bottom: "-80px",
                      left: "-80px",
                      animation: "float 8s ease-in-out infinite reverse",
                    }}
                  ></div>

                  {/* Content */}
                  <div style={{ position: "relative", zIndex: 2, textAlign: "center", width: "100%" }}>
                    {/* Icon */}
                    <div
                      style={{
                        fontSize: "80px",
                        marginBottom: "24px",
                        background: "rgba(255,255,255,0.15)",
                        width: "140px",
                        height: "140px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 24px",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <i className="bi bi-file-earmark-pdf" style={{ color: "#fff" }}></i>
                    </div>

                    {/* Title */}
                    <h2
                      className="text-white fw-bold mb-3"
                      style={{
                        fontSize: "28px",
                        lineHeight: "1.4",
                        letterSpacing: "-0.5px",
                      }}
                    >
                      Get Your Personalized Quote
                    </h2>

                    {/* Subtitle */}
                    <p
                      className="text-white mb-4"
                      style={{
                        fontSize: "14px",
                        opacity: 0.9,
                        lineHeight: "1.6",
                      }}
                    >
                      Share your requirements and receive a tailored solution roadmap with our exclusive digital assets booklet
                    </p>

                    {/* Features */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <div className="feature-badge">
                        <i
                          className="bi bi-lightning-fill me-2"
                          style={{ fontSize: "16px", color: "#ffd700" }}
                        ></i>
                        <span>Custom Solutions</span>
                      </div>
                      <div className="feature-badge">
                        <i
                          className="bi bi-shield-check me-2"
                          style={{ fontSize: "16px", color: "#4ae54a" }}
                        ></i>
                        <span>Expert Consultation</span>
                      </div>
                      <div className="feature-badge">
                        <i
                          className="bi bi-rocket-fill me-2"
                          style={{ fontSize: "16px", color: "#ff6b6b" }}
                        ></i>
                        <span>Quick Implementation</span>
                      </div>
                      <div className="feature-badge">
                        <i
                          className="bi bi-award me-2"
                          style={{ fontSize: "16px", color: "#9d4edd" }}
                        ></i>
                        <span>10+ Years Expertise</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom decoration */}
                  <div style={{ fontSize: "48px", opacity: 0.15, position: "relative", zIndex: 1 }}>
                    💼 🎯 🚀
                  </div>
                </div>

                {/* Right Column - Form */}
                <div
                  className="col-md-7 p-5"
                  style={{
                    animation: "fadeInRight 0.5s ease-out 0.1s both",
                    background: "#f8f9fa",
                  }}
                >
                  <h3 className="mb-2 text-dark fw-bold" style={{ fontSize: "24px" }}>
                    Get a Free Quote
                  </h3>
                  <p className="text-muted mb-4" style={{ fontSize: "14px" }}>
                    Global IT Solutions — your trusted global partner for your digital needs
                  </p>

                  <form onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <div className="mb-4">
                      <label htmlFor="quote-name" className="form-label fw-600 mb-2" style={{ fontSize: "14px", color: "#333" }}>
                        Full Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className={`form-control quote-modal-form-input ${errors.name ? "is-invalid" : ""}`}
                        id="quote-name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        style={{
                          borderRadius: "8px",
                          border: "1px solid #ddd",
                          padding: "10px 14px",
                          fontSize: "14px",
                          transition: "all 0.3s ease",
                        }}
                      />
                      {errors.name && (
                        <div className="invalid-feedback d-block" style={{ fontSize: "12px", marginTop: "4px" }}>
                          {errors.name}
                        </div>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="mb-4">
                      <label htmlFor="quote-email" className="form-label fw-600 mb-2" style={{ fontSize: "14px", color: "#333" }}>
                        Email Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className={`form-control quote-modal-form-input ${errors.email ? "is-invalid" : ""}`}
                        id="quote-email"
                        name="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        style={{
                          borderRadius: "8px",
                          border: "1px solid #ddd",
                          padding: "10px 14px",
                          fontSize: "14px",
                          transition: "all 0.3s ease",
                        }}
                      />
                      {errors.email && (
                        <div className="invalid-feedback d-block" style={{ fontSize: "12px", marginTop: "4px" }}>
                          {errors.email}
                        </div>
                      )}
                    </div>

                    {/* Phone Field */}
                    <div className="mb-4">
                      <label htmlFor="quote-phone" className="form-label fw-600 mb-2" style={{ fontSize: "14px", color: "#333" }}>
                        Phone Number <span className="text-danger">*</span>
                      </label>
                      <input
                        type="tel"
                        className={`form-control quote-modal-form-input ${errors.phone ? "is-invalid" : ""}`}
                        id="quote-phone"
                        name="phone"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={handleInputChange}
                        style={{
                          borderRadius: "8px",
                          border: "1px solid #ddd",
                          padding: "10px 14px",
                          fontSize: "14px",
                          transition: "all 0.3s ease",
                        }}
                      />
                      {errors.phone && (
                        <div className="invalid-feedback d-block" style={{ fontSize: "12px", marginTop: "4px" }}>
                          {errors.phone}
                        </div>
                      )}
                    </div>

                    {/* Company Field (Optional) */}
                    <div className="mb-4">
                      <label htmlFor="quote-company" className="form-label fw-600 mb-2" style={{ fontSize: "14px", color: "#333" }}>
                        Company Name <span className="text-muted" style={{ fontSize: "12px" }}>(Optional)</span>
                      </label>
                      <input
                        type="text"
                        className="form-control quote-modal-form-input"
                        id="quote-company"
                        name="company"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={handleInputChange}
                        style={{
                          borderRadius: "8px",
                          border: "1px solid #ddd",
                          padding: "10px 14px",
                          fontSize: "14px",
                          transition: "all 0.3s ease",
                        }}
                      />
                    </div>

                    {/* Message Field (Optional) */}
                    <div className="mb-4">
                      <label htmlFor="quote-message" className="form-label fw-600 mb-2" style={{ fontSize: "14px", color: "#333" }}>
                        Project Details <span className="text-muted" style={{ fontSize: "12px" }}>(Optional)</span>
                      </label>
                      <textarea
                        className="form-control quote-modal-form-input"
                        id="quote-message"
                        name="message"
                        rows="3"
                        placeholder="Tell us about your project, goals, and requirements..."
                        value={formData.message}
                        onChange={handleInputChange}
                        style={{
                          borderRadius: "8px",
                          border: "1px solid #ddd",
                          padding: "10px 14px",
                          fontSize: "14px",
                          transition: "all 0.3s ease",
                          resize: "vertical",
                        }}
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="btn quote-submit-btn w-100 py-2 mb-3"
                      style={{
                        fontSize: "15px",
                        borderRadius: "8px",
                        color: "#fff",
                      }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-download me-2"></i>
                          Get Booklet & Quote
                        </>
                      )}
                    </button>
                    
                    {/* Trust badge */}
                    <p style={{ fontSize: "12px", color: "#666", textAlign: "center", marginTop: "12px" }}>
                      <i className="bi bi-shield-check me-1" style={{ fontSize: "12px", color: "#3eb8e7" }}></i>
                      Your information is safe and secure
                    </p>

                    {/* Terms & Privacy Disclaimer */}
                    <p style={{ 
                      fontSize: "11px", 
                      color: "#777", 
                      textAlign: "center", 
                      marginTop: "16px",
                      lineHeight: "1.6",
                      borderTop: "1px solid #eee",
                      paddingTop: "12px"
                    }}>
                      By submitting this form you agree to our{" "}
                      <Link 
                        to="/terms" 
                        style={{ 
                          color: "#3eb8e7", 
                          textDecoration: "none",
                          fontWeight: "500"
                        }}
                        onMouseEnter={(e) => e.target.style.textDecoration = "underline"}
                        onMouseLeave={(e) => e.target.style.textDecoration = "none"}
                      >
                        Terms & Condition
                      </Link>
                      {" "}& {" "}
                      <Link 
                        to="/policy" 
                        style={{ 
                          color: "#3eb8e7", 
                          textDecoration: "none",
                          fontWeight: "500"
                        }}
                        onMouseEnter={(e) => e.target.style.textDecoration = "underline"}
                        onMouseLeave={(e) => e.target.style.textDecoration = "none"}
                      >
                        Privacy Policy
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetQuoteModal;
