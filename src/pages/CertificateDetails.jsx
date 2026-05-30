import React, { useState } from "react";
import Footer from "../components/Footer";
import HeaderDashboard from "../components/HeaderDashboard";
import UserImage from "../assets/img/graduate.png";
import CertificateImg from "../assets/img/certification-placeholder.png";


export default function CertificateDetails() {
  return (
     <>
        <div class="page-wrapper loginpage-wrapper d-flex flex-column min-vh-100">
          <HeaderDashboard></HeaderDashboard>
          <div id="Overview" className="flex-grow-1">
            <div id="" className="banner_section  pb-0 ">
              <div className="container py-4">
      <section className="certificate-details-page">

      <div className="page-header">
        <div>
          <h1 className="font-secondary-extrabold font-50px mb-1 line-height-100 text_gredient_1 mt--3px">Credential Details</h1>
          <p>
            Securely stored and verified digital credential
          </p>
        </div>

        <span className="status-badge">
          Verified
        </span>
      </div>

      <div className="credential-wrapper">

        {/* Certificate Preview */}

        <div className="certificate-preview-card">

          <div className="card-header">
            Certificate Preview
          </div>

          <div className="certificate-preview">
            <img
              src={CertificateImg}
              alt="Certificate"
            />
          </div>

        </div>

        {/* Details */}

        <div className="credential-info-card">

          <div className="card-header">
            Credential Information
          </div>

          <div className="info-grid">

            <div className="info-item">
              <label>Certificate ID</label>
              <span>CTX-2026-001</span>
            </div>

            <div className="info-item">
              <label>Student Name</label>
              <span>Darren Barajas</span>
            </div>

            <div className="info-item">
              <label>Institution</label>
              <span>University of Nairobi</span>
            </div>

            <div className="info-item">
              <label>Program</label>
              <span>Bachelor of Science in Computer Science</span>
            </div>

            <div className="info-item">
              <label>Issue Date</label>
              <span>12 June 2026</span>
            </div>

            <div className="info-item">
              <label>Status</label>
              <span className="text-success">
                Verified
              </span>
            </div>

          </div>

          <div className="action-buttons">
            <button className="btn btn-primary px-4">
              Download
            </button>

            <button className="btn btn-outline-primary">
              Share
            </button>
          </div>

        </div>

      </div>

      {/* Verification Timeline */}

      <div className="timeline-card">

        <h3>Verification Timeline</h3>

        <ul className="timeline-list">

          <li>
            <span className="timeline-dot"></span>
            Certificate Issued
          </li>

          <li>
            <span className="timeline-dot"></span>
            Institution Verification Completed
          </li>

          <li>
            <span className="timeline-dot"></span>
            Added to Credential Hub
          </li>

        </ul>

      </div>

    </section>
              </div>
            </div>
          </div>
  
          <Footer></Footer>
        </div>
      </>
  )
}
