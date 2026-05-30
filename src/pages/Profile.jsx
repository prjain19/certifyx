import React, { useState } from "react";
import Footer from "../components/Footer";
import HeaderDashboard from "../components/HeaderDashboard";
import UserImage from "../assets/img/graduate.png";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("personal");
  return (
    <>
      <div class="page-wrapper loginpage-wrapper d-flex flex-column min-vh-100">
        <HeaderDashboard></HeaderDashboard>
        <div id="Overview" className="flex-grow-1">
          <div id="" className="banner_section  pb-0 ">
            <div className="container py-4">
              <section className="profile-page">
                <div className="profile-header">
                  <div className="profile-left">
                    <div className="profile-img">
                      <img src={UserImage} alt="Profile" />
                    </div>

                    <div>
                      <h2>Darren Barajas</h2>
                      <p>Student Account</p>
                    </div>
                  </div>

                  <button className="btn btn-primary">Edit Profile</button>
                </div>

                <div className="profile-tabs">
                  <button
                    className={activeTab === "personal" ? "active" : ""}
                    onClick={() => setActiveTab("personal")}
                  >
                    Personal Information
                  </button>

                  <button
                    className={activeTab === "academic" ? "active" : ""}
                    onClick={() => setActiveTab("academic")}
                  >
                    Academic Information
                  </button>
                </div>

                <div className="profile-card">
                  {activeTab === "personal" && (
                    <div className="profile-grid">
                      <div className="profile-item">
                        <label>Full Name</label>
                        <span>Darren Barajas</span>
                      </div>

                      <div className="profile-item">
                        <label>Email</label>
                        <span>darren@example.com</span>
                      </div>

                      <div className="profile-item">
                        <label>Phone</label>
                        <span>+254 700 123 456</span>
                      </div>

                      <div className="profile-item">
                        <label>Date of Birth</label>
                        <span>12 March 2000</span>
                      </div>

                      <div className="profile-item">
                        <label>Address</label>
                        <span>Nairobi, Kenya</span>
                      </div>
                    </div>
                  )}

                  {activeTab === "academic" && (
                    <div className="profile-grid">
                      <div className="profile-item">
                        <label>Student ID</label>
                        <span>STU-2025-001</span>
                      </div>

                      <div className="profile-item">
                        <label>Institution</label>
                        <span>University of Nairobi</span>
                      </div>

                      <div className="profile-item">
                        <label>Program</label>
                        <span>Bachelor of Computer Science</span>
                      </div>

                      <div className="profile-item">
                        <label>Enrollment Date</label>
                        <span>January 2022</span>
                      </div>

                      <div className="profile-item">
                        <label>Graduation Status</label>
                        <span>Eligible</span>
                      </div>

                      <div className="profile-item">
                        <label>Credentials</label>
                        <span>8 Documents</span>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>

        <Footer></Footer>
      </div>
    </>
  );
}
