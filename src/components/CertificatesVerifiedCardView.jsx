import React from "react";
import CertificatesPlaceholder from "../assets/img/certification-placeholder.png";
import { Link } from "react-router-dom";

export default function CertificatesVerifiedCardView() {
  return (
    <>
      <div className="border rounded-20px overflow-hidden h-100">
        {/* Image */}
        <div className="bg-F8FBFF mb-1 text-center p-4 certificate_wrap d-flex align-items-center justify-content-center border-bottom rounded-15px rounded-bottom-0">
          <img
            src={CertificatesPlaceholder}
            className="position-relative top-5"
            alt=""
          />
        </div>
        {/* Content */}
        <div className="p-3">
          {/* Status */}
          <div className="mb-3">
            <span className="badge badge_green border rounded-pill border-1 text-default font-14px font-semibold d-inline-flex align-items-center gap-1">
              <svg
                className="position-relative top--1"
                xmlns="http://www.w3.org/2000/svg"
                width={12}
                height={12}
                viewBox="0 0 12 12"
                fill="none"
              >
                <circle cx={6} cy={6} r={6} fill="#15803D" />
                <path
                  d="M5.28673 6.71433L3.85778 5.28588L3.14355 6.00011L5.28673 8.14328L8.85784 4.57166L8.14412 3.85693L5.28673 6.71433Z"
                  fill="white"
                />
              </svg>{" "}
              Verified
            </span>
          </div>
          <div className=" d-flex flex-column gap-3">
            <h5 className="font-28px font-bold ">Professional Certificate</h5>
            <div className="d-flex align-items-start gap-2 font-16px">
              Uploaded: 12 May 2026
            </div>

            {/* Actions */}
            <div className="d-flex gap-2 btnRow">
              <Link to="/certificate-details" className="btn btn-primary flex-fill rounded-10px">
                View Certificate
              </Link>

              <button className="btn min-w-inherit btn-outline-primary flex-fill rounded-10px">
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
