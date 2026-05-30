import React from "react";
import Footer from "../components/Footer";
import HeaderDashboard from "../components/HeaderDashboard";
import StatusCards from "../components/StatusCards";
import CertificatesFilters from "../components/CertificatesFilters";
import CertificatesVerifiedListView from "../components/CertificatesVerifiedListView";
import CertificatesVerifiedCardView from "../components/CertificatesVerifiedCardView";
import CertificatesPlaceholder from "../assets/img/certification-placeholder.png";
import { Link } from "react-router-dom";

export default function Certificates() {
  return (
    <>
      <div class="page-wrapper loginpage-wrapper">
        <HeaderDashboard></HeaderDashboard>
        <div id="Overview" className="">
          <div id="" className="banner_section  pb-0 ">
            <div className="container pt-2 pt-md-3  pt-xl-4">
              <div className="pt-2 pt-xl-4">
                <div className="d-flex justify-content-between align-items-lg-center flex-column flex-md-row gap-2 gap-md-0 mb-3 mb-md-0">
                  {/* Left Heading */}
                  <div className="">
                    <h1 className="font-secondary-extrabold font-50px mb-1 line-height-100 text_gredient_1 mt--3px">
                      Digital Credentials
                    </h1>
                    <div className="font-20px line-height-130 mb-1 mb-md-3">
                      A secure digital hub for your certificates, records, and
                      achievements
                    </div>
                  </div>
                  {/* Download Button */}
                  <div className="d-flex gap-2 gap-xl-3 flex-0-0-auto">
                    <a
                      href="#"
                      className="btn btn-primary h-48px font-20px rounded-10px d-inline-flex gap-2 px-xl-3 DownloadPDFBtn"
                    >
                      <span className="d-inline-block d-md-inline-block">
                        {" "}
                        + Add New Record
                      </span>
                    </a>

                    <div>
                      <ul
                        className="nav view-toggle-tabs border rounded-10px"
                        id="viewTabs"
                        role="tablist"
                      >
                        {/* Grid View */}
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            id="grid-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#gridView"
                            type="button"
                            role="tab"
                          >
                            {/* Grid Icon */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                              fill="none"
                            >
                              <path
                                d="M7.55852 6.93018C7.55852 7.27721 7.27721 7.55852 6.93018 7.55852H0.628337C0.28131 7.55852 0 7.27721 0 6.93018V0.628337C0 0.28131 0.28131 0 0.628337 0H6.93018C7.27721 0 7.55852 0.28131 7.55852 0.628337V6.93018ZM18 0.628337C18 0.28131 17.7187 0 17.3717 0H11.0698C10.7228 0 10.4415 0.28131 10.4415 0.628337V6.93018C10.4415 7.27719 10.7228 7.55852 11.0698 7.55852H17.3717C17.7187 7.55852 18 7.27719 18 6.93018V0.628337ZM7.55852 11.0698C7.55852 10.7228 7.27721 10.4415 6.93018 10.4415H0.628337C0.28131 10.4415 0 10.7228 0 11.0698V17.3717C0 17.7187 0.28131 18 0.628337 18H6.93018C7.27721 18 7.55852 17.7187 7.55852 17.3717V11.0698ZM18 11.0698C18 10.7228 17.7187 10.4415 17.3717 10.4415H11.0698C10.7228 10.4415 10.4415 10.7228 10.4415 11.0698V17.3717C10.4415 17.7187 10.7228 18 11.0698 18H17.3717C17.7187 18 18 17.7187 18 17.3717V11.0698Z"
                                fill="black"
                              />
                            </svg>
                          </button>
                        </li>
                        {/* List View */}
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="list-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#listView"
                            type="button"
                            role="tab"
                          >
                            {/* List Icon */}
                            <svg
                              width={22}
                              height={17}
                              viewBox="0 0 22 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20.9025 16.2683H6.19148C5.58517 16.2683 5.09375 15.7768 5.09375 15.1705C5.09375 14.5642 5.58517 14.0728 6.19148 14.0728H20.9022C21.5085 14.0728 21.9999 14.5642 21.9999 15.1705C21.9999 15.7768 21.5088 16.2683 20.9025 16.2683Z"
                                fill="black"
                              />
                              <path
                                d="M20.9025 9.37812H6.19148C5.58517 9.37812 5.09375 8.88669 5.09375 8.28037C5.09375 7.67404 5.58517 7.18262 6.19148 7.18262H20.9022C21.5085 7.18262 21.9999 7.67404 21.9999 8.28037C22.0003 8.88669 21.5088 9.37812 20.9025 9.37812Z"
                                fill="black"
                              />
                              <path
                                d="M20.9025 2.48701H6.19148C5.58517 2.48701 5.09375 1.99558 5.09375 1.38926C5.09375 0.782931 5.58517 0.291504 6.19148 0.291504H20.9022C21.5085 0.291504 21.9999 0.782931 21.9999 1.38926C21.9999 1.99558 21.5088 2.48701 20.9025 2.48701Z"
                                fill="black"
                              />
                              <path
                                d="M1.47425 2.94856C2.28846 2.94856 2.9485 2.2885 2.9485 1.47428C2.9485 0.660058 2.28846 0 1.47425 0C0.660045 0 0 0.660058 0 1.47428C0 2.2885 0.660045 2.94856 1.47425 2.94856Z"
                                fill="black"
                              />
                              <path
                                d="M1.47425 9.75422C2.28846 9.75422 2.9485 9.09417 2.9485 8.27994C2.9485 7.46572 2.28846 6.80566 1.47425 6.80566C0.660045 6.80566 0 7.46572 0 8.27994C0 9.09417 0.660045 9.75422 1.47425 9.75422Z"
                                fill="black"
                              />
                              <path
                                d="M1.47425 16.5599C2.28846 16.5599 2.9485 15.8998 2.9485 15.0856C2.9485 14.2714 2.28846 13.6113 1.47425 13.6113C0.660045 13.6113 0 14.2714 0 15.0856C0 15.8998 0.660045 16.5599 1.47425 16.5599Z"
                                fill="black"
                              />
                            </svg>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* <CertificatesFilters></CertificatesFilters> */}
                <div className="mb_30px">
                  {/* Stats Cards */}
                  <StatusCards></StatusCards>
                </div>
                {/* Tab Content */}
                <div
                  className="tab-content mb-4 mb-md-5 pb-xl-5"
                  id="viewTabsContent"
                >
                  {/* Grid Content */}
                  <div
                    className="tab-pane fade show active"
                    id="gridView"
                    role="tabpanel"
                  >
                    {/* Cards Row */}
                    <div
                      className="certificate-dashboard"
                      id="certificateDashboard"
                    >
                      {/* Certificate Cards */}
                      <div className="row row_g_30px" id="certificateList">
                        {/* Card */}
                        <div className="col-12 col-md-6 col-lg-4">
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
                                <span className="badge  border-danger text-danger border rounded-pill border-1  font-14px font-semibold d-inline-flex align-items-center gap-1">
                                  Pending
                                </span>
                              </div>
                              <div className=" d-flex flex-column gap-3">
                                <h5 className="font-28px font-bold ">
                                  Professional Certificate
                                </h5>
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
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                          <CertificatesVerifiedCardView></CertificatesVerifiedCardView>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                          <CertificatesVerifiedCardView></CertificatesVerifiedCardView>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                          <CertificatesVerifiedCardView></CertificatesVerifiedCardView>
                        </div>{" "}
                        <div className="col-12 col-md-6 col-lg-4">
                          <CertificatesVerifiedCardView></CertificatesVerifiedCardView>
                        </div>{" "}
                        <div className="col-12 col-md-6 col-lg-4">
                          <CertificatesVerifiedCardView></CertificatesVerifiedCardView>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* List Content */}
                  <div className="tab-pane fade" id="listView" role="tabpanel">
                    <div
                      className="certificate-dashboard"
                      id="certificateDashboard"
                    >
                      {/* Certificate Cards */}
                      <div
                        className="row row_g_30px certificateList_listview"
                        id="certificateList"
                      >
                        {/* Card */}
                        <div className="col-12 col-md-12 col-lg-12">
                          <div className="border rounded-15px overflow-hidden h-100 d-flex p-30px flex-column flex-md-row">
                            {/* Image */}
                            <div className="bg-F8FBFF mb-1 text-center p-4 certificate_wrap d-flex align-items-center justify-content-center border rounded-15px">
                              <img
                                src={CertificatesPlaceholder}
                                className="position-relative top-5"
                                alt=""
                              />
                            </div>
                            {/* Content */}
                            <div className="px-md-4 ms-xl-2 flex-grow-1">
                              {/* Status */}
                              <div className="mb-3">
                                <span className="badge badge_danger border-danger text-danger border rounded-pill border-1 font-14px font-semibold d-inline-flex align-items-center gap-1">
                                  Pending
                                </span>
                              </div>
                              <div className=" d-flex flex-column gap-3">
                                <h5 className="font-24px font-bold ">
                                  Bachelor of Science in Computer Science
                                </h5>
                                <div className="d-flex align-items-start gap-2 font-16px max-w-460">
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
                        </div>
                        <div className="col-12 col-md-12 col-lg-12">
                          <CertificatesVerifiedListView></CertificatesVerifiedListView>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer></Footer>
      </div>
    </>
  );
}
