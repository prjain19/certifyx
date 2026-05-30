import React from "react";
import Footer from "../components/Footer";
import HeaderDashboard from "../components/HeaderDashboard";
import Welcome from "../components/Welcome";
import RecentNotifications from "../components/RecentNotifications";
import GraduationStatus from "../components/GraduationStatus";
import TopFeatureCard from "../components/TopFeatureCard";

export default function Dashboard() {
  return (
    <>
      <div class="page-wrapper loginpage-wrapper">
        <HeaderDashboard></HeaderDashboard>
        <div id="Overview" className="">
          <div id="" className="banner_section  pb-0 ">
               <div className="px-4 pt-2 pt-xl-4"> <Welcome></Welcome></div>
            <div className="container ">
              <div className="">
                   {/* Feature Cards */}
              
            

                    <TopFeatureCard></TopFeatureCard>
                <>
               
              

                  <div className="row g-4 row_g_30px row-cols-1 row-cols-md-2 row-cols-lg-3 mb_30px text-default">
                    <div className="col">
                      <div className="rounded-15px card card_design1 card_design1_p_25px border-top-0 overflow-hidden h-100 ">
                        <div className="text-white card-header clearance_header d-flex align-items-center gap-2 py-2">
                          <span className="position-relative pe-xl-1 py-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="40"
                              height="40"
                              fill="none"
                              viewBox="0 0 40 40"
                            >
                              <rect
                                x="0.5"
                                y="0.5"
                                width="39"
                                height="39"
                                rx="19.5"
                                fill="white"
                                stroke="#005097"
                              />
                              <path
                                d="M20 9L10 14L20 19L28 15V22H30V14L20 9ZM14 20V24C14 26.2 16.7 28 20 28C23.3 28 26 26.2 26 24V20L20 23L14 20Z"
                                fill="#005097"
                              />
                            </svg>
                          </span>
                          <div className="font-28px font-secondary-bold">
                            Academic Regalia
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="lock-box mb-3 px-3 pt-3 pb-4">
                            <div className="mb-2">
                              <i className="bi bi-lock fs-1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={30}
                                  viewBox="0 0 24 30"
                                  fill="none"
                                >
                                  <path
                                    d="M19.5 10.5V7.5C19.5 3.3 16.2 0 12 0C7.8 0 4.5 3.3 4.5 7.5V10.5C1.95 10.5 0 12.45 0 15V25.5C0 28.05 1.95 30 4.5 30H19.5C22.05 30 24 28.05 24 25.5V15C24 12.45 22.05 10.5 19.5 10.5ZM7.5 7.5C7.5 4.95 9.45 3 12 3C14.55 3 16.5 4.95 16.5 7.5V10.5H7.5V7.5Z"
                                    fill="#9CA3AF"
                                  />
                                </svg>
                              </i>
                            </div>
                            <div className="font-18px font-semibold opacity-05">
                              Complete all graduation clearance requirements to
                              access gown booking
                            </div>
                          </div>
                          <ul className="list-unstyled mb-0 list_app list_app_tick">
                            <li className="mb-1">
                              Official graduation gown reservation
                            </li>
                            <li className="mb-1">
                              Convenient collection scheduling
                            </li>
                            <li className="mb-1">
                              Clear return and handover guidelines
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="rounded-15px card card_design1 card_design1_p_25px border-top-0 overflow-hidden h-100 ">
                        <div className="text-white card-header clearance_header d-flex align-items-center gap-2 py-2">
                          <span className="position-relative pe-xl-1 py-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={40}
                              height={40}
                              viewBox="0 0 40 40"
                              fill="none"
                            >
                              <rect
                                x="0.5"
                                y="0.5"
                                width={39}
                                height={39}
                                rx="19.5"
                                fill="white"
                                stroke="#005097"
                              />
                              <path
                                d="M28 14H12C10.9 14 10 14.9 10 16V18C11.1 18 12 18.9 12 20C12 21.1 11.1 22 10 22V24C10 25.1 10.9 26 12 26H28C29.1 26 30 25.1 30 24V22C28.9 22 28 21.1 28 20C28 18.9 28.9 18 30 18V16C30 14.9 29.1 14 28 14ZM22 23H18V21H22V23ZM22 19H18V17H22V19Z"
                                fill="#005097"
                              />
                            </svg>
                          </span>
                          <div className="font-28px font-secondary-bold">
                            Verification Requests
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="lock-box mb-4 px-3 pt-3 pb-4">
                            <div className="mb-2">
                              <i className="bi bi-lock fs-1">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={30}
                                  viewBox="0 0 24 30"
                                  fill="none"
                                >
                                  <path
                                    d="M19.5 10.5V7.5C19.5 3.3 16.2 0 12 0C7.8 0 4.5 3.3 4.5 7.5V10.5C1.95 10.5 0 12.45 0 15V25.5C0 28.05 1.95 30 4.5 30H19.5C22.05 30 24 28.05 24 25.5V15C24 12.45 22.05 10.5 19.5 10.5ZM7.5 7.5C7.5 4.95 9.45 3 12 3C14.55 3 16.5 4.95 16.5 7.5V10.5H7.5V7.5Z"
                                    fill="#9CA3AF"
                                  />
                                </svg>
                              </i>
                            </div>
                            <div className="font-18px font-semibold opacity-05">
                              Event Passes will be available once all graduation
                              requirements are completed
                            </div>
                          </div>
                          <div className="rounded-10px p-3 d-flex align-items-start alert alert-info bg-F5FAFF border-D1D5DB text-default mb-0">
                            <div className="me-2 mt-1 position-relative top--3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={18}
                                height={18}
                                viewBox="0 0 18 18"
                                fill="none"
                              >
                                <path
                                  d="M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389957 7.20038 -0.17433 9.00998 0.172936 10.7558C0.520203 12.5016 1.37737 14.1053 2.63604 15.364C3.89472 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C18 6.61305 17.0518 4.32387 15.364 2.63604C13.6761 0.948212 11.3869 0 9 0ZM7.5 3.8625C7.5 3.56583 7.58798 3.27582 7.7528 3.02914C7.91762 2.78247 8.15189 2.59021 8.42598 2.47668C8.70007 2.36315 9.00167 2.33344 9.29264 2.39132C9.58361 2.4492 9.85088 2.59206 10.0607 2.80184C10.2704 3.01162 10.4133 3.27889 10.4712 3.56986C10.5291 3.86083 10.4994 4.16244 10.3858 4.43652C10.2723 4.71061 10.08 4.94488 9.83336 5.1097C9.58668 5.27453 9.29667 5.3625 9 5.3625C8.7968 5.37267 8.59365 5.3414 8.40292 5.27059C8.21218 5.19977 8.03785 5.0909 7.89052 4.95058C7.74319 4.81027 7.62594 4.64145 7.54591 4.45439C7.46589 4.26734 7.42475 4.06595 7.425 3.8625H7.5ZM12.75 13.5C12.75 13.6989 12.671 13.8897 12.5303 14.0303C12.3897 14.171 12.1989 14.25 12 14.25H6.75C6.55109 14.25 6.36033 14.171 6.21967 14.0303C6.07902 13.8897 6 13.6989 6 13.5C6 13.3011 6.07902 13.1103 6.21967 12.9697C6.36033 12.829 6.55109 12.75 6.75 12.75H8.25V8.25H7.5C7.30109 8.25 7.11032 8.17098 6.96967 8.03033C6.82902 7.88968 6.75 7.69891 6.75 7.5C6.75 7.30109 6.82902 7.11032 6.96967 6.96967C7.11032 6.82902 7.30109 6.75 7.5 6.75H10.5V12.75H12C12.1989 12.75 12.3897 12.829 12.5303 12.9697C12.671 13.1103 12.75 13.3011 12.75 13.5Z"
                                  fill="#005097"
                                />
                              </svg>
                            </div>
                            <div className="font-16px line-height-140">
                              You'll receive 4 event passes with QR-enabled
                              access for entry
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 col-lg">
                      <div className="rounded-15px card card_design1 card_design1_p_25px border-top-0 overflow-hidden h-100 ">
                        <div className="text-white card-header clearance_header d-flex align-items-center gap-2 py-2">
                          <span className="position-relative pe-xl-1 py-1">
                            <svg
                              width={40}
                              height={40}
                              viewBox="0 0 40 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="0.5"
                                y="0.5"
                                width={39}
                                height={39}
                                rx="19.5"
                                fill="white"
                                stroke="#005097"
                              />
                              <path
                                d="M15 10H23L28 15V29C28 30.1 27.1 31 26 31H15C13.9 31 13 30.1 13 29V12C13 10.9 13.9 10 15 10Z"
                                fill="#005097"
                              />
                              <path
                                d="M23 10V15H28"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M17 19H24"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                              <path
                                d="M17 23H24"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                              <path
                                d="M20 26L22 24.8L24 26V21H20V26Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                          <div className="font-28px font-secondary-bold">
                            Featured Credential
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="certificate_card card card_design1 p-3 mb-4">
                            <div className="d-flex justify-content-between align-items-start ">
                              <div>
                                <div className="font-18px font-semibold fs-5 pb-1 line-height-120">
                                  AWS Cloud Practitioner
                                </div>

                                <div className="font-18px opacity-06 line-height-120">
                                  Global Learning Institute
                                </div>
                              </div>
                              <span className="badge badge_green badge_green_color2 rounded-pill px-2 font-14px font-semibold py-1 line-height-130">
                                {" "}
                                <span className="px-xl-1"> Authenticated</span>
                              </span>
                            </div>
                            <div className="mt-2 d-flex gap-2">
                              <a
                                href="certificates.php"
                                className="btn btn-primary btn-h-30 text-white px-4 flex-grow-1 w-50 font-16px"
                              >
                                Preview
                              </a>
                              <button className="btn btn-outline-primary btn-h-30 px-4 flex-grow-1 w-50 font-16px">
                                Export PDF
                              </button>
                            </div>
                          </div>
                          <div className="dashed-box font-18px font-semibold position-relative">
                            + Upload Document
                            <input
                              type="file"
                              className="position-absolute start-0 top-0 w-100 h-100 opacity-0"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
    <GraduationStatus></GraduationStatus>
                  <div className="row g-4 row_g_30px row-cols-1 row-cols-lg-2 mb-4">
                    <div className="col">
                      <div className="rounded-15px card card_design1 card_design1_p_25px border-top-0 overflow-hidden h-100 ">
                        <div className="text-white card-header clearance_header d-flex align-items-center gap-2 py-2">
                          <span className="position-relative pe-xl-1 py-1">
                            <svg
                              width={40}
                              height={40}
                              viewBox="0 0 40 40"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="0.5"
                                y="0.5"
                                width={39}
                                height={39}
                                rx="19.5"
                                fill="white"
                                stroke="#005097"
                              />
                              <path
                                d="M14 12H22L27 17V28C27 29.1 26.1 30 25 30H14C12.9 30 12 29.1 12 28V14C12 12.9 12.9 12 14 12Z"
                                fill="#005097"
                              />
                              <path
                                d="M22 12V17H27"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M16 20H23"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                              <path
                                d="M16 23H23"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                              <path
                                d="M16 26H21"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                              />
                            </svg>
                          </span>
                          <div className="font-28px font-secondary-bold">
                            Document Hub
                          </div>
                        </div>
                        <div className="card-body">
                          <p className="font-18px mb-3 mb-md-4">
                            Organize and access your academic records securely
                          </p>
                         
                          <div className="row g-3 mb-4 line-height-120">
                            <div className="col-6">
                              <div className="vault_stat bg-CCFBF1 font-30px font-bold">
                                8<br />
                                <span className="fw-normal font-16px opacity-08 font-primary">
                                  Credentials
                                </span>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="vault_stat bg-FCF3EA font-30px font-bold">
                                5<br />
                                <span className="fw-normal font-16px opacity-08 font-primary">
                                  Reports
                                </span>
                              </div>
                            </div>
                         
                          </div>

                           <div className="p-3 rounded-10px border border-65BF87 bg-F0FDF4 mb-4">
                            <div className="p-xl-1">
                              <div className="d-flex justify-content-between font-18px font-semibold pb-1">
                                <span>Space Utilized <span className="font-13px font-primary opacity-75">(450 MB / 4 GB)</span></span> 
                                
                              </div>
                              <div
                                className="progress progress_color2 mt-2"
                                style={{ height: 8 }}
                              >
                                <div
                                  className="progress-bar"
                                  style={{ width: "5%" }}
                                />
                              </div>
                              
                            </div>
                          </div>
                          <div className="d-flex gap-3 flex-wrap">
                            <button className="btn btn-primary text-white flex-fill font-20px">
                              Access Hub
                            </button>

                            <button className="btn btn-outline-primary flex-fill font-20px">
                              Add File
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <RecentNotifications></RecentNotifications>
                    </div>
                  </div>
                </>
              </div>
            </div>
          </div>
        </div>

        <Footer></Footer>
      </div>
    </>
  );
}
