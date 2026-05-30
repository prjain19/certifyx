import React from "react";
// import WelcomeBack from "../assets/img/Welcomeback.webp";

export default function Welcome() {
  return (
    <>
      <div className="welcome-card mb-4 mb-xl-5 rounded-15px py-3 px-2 px-md-4 text-white">
        <div className="row align-items-center mx-0 py-md-4 justify-content-center">
          <div className="col-md-12 col-lg-8">
            <h2 className="font-50px font-secondary-extrabold mb-2 d-inline-flex align-items-center gap-2">
              Your Digital Credentials Hub
            </h2>
            <p className="mb-3 mb-xl-4 font-20px">
              A secure platform for managing certificates, records, and
              achievements.
            </p>
            <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start top_banner_badge">
              <span className="badge graduation-badge rounded-pill d-inline-flex gap-2 align-items-center align-items-center font-semibold py-2 px-3">
                Secure Access
              </span>
            </div>
          </div>
          <div className="col-md-5 col-lg-4 d-flex justify-content-end align-items-center">
            <div className="profile-box d-flex mt-4 mt-lg-0 align-items-center gap-3 gap-xl-4 px-4 rounded-10px py-4 flex-column flex-xl-row">
              <div className="pe-xl-2">
                <div className="mb-2 font-24px font-bold">Account Status</div>
                <div className="font-16px">Documents Synced</div>
                <div className=" d-flex gap-2 gap-xl-3 pt-3">
                  <span className="badge graduation-badge rounded-pill d-inline-flex gap-2 align-items-center align-items-center font-semibold py-2 px-3">
                    Documents Verified
                  </span>
                  <span className="badge-custom d-inline-flex gap-2 align-items-center align-items-center">
                    Security Score
                  </span>
               
                </div>
              </div>
              {/* <div className="progress-circle mx-auto font-24px font-secondary-extrabold ">
                100%
              </div> */}
              {/* <div>
                 <span className="badge graduation-badge rounded-pill d-inline-flex gap-2 align-items-center align-items-center font-semibold py-2">
                Documents Verified
              </span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
