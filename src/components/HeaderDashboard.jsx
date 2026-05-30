import React from "react";
import Logo from "../assets/img/logo.png";
import UserImage from "../assets/img/graduate.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function HeaderDashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Header Start */}
      {/* <header
    id="app_Mainheader"
    className="app_header app_header_after_login border-top border-secondary border-5"
  > */}
      <header
        id="app_Mainheader"
        className={`app_header app_header_after_login border-top border-secondary border-5 ${
          menuOpen ? "MenuOpen" : ""
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="Close_menu_overlay"
        >
          close
        </button>
        <div className=" container-fluid h-100">
          <div className="header_inner">
            <div className="d-flex align-items-center h-100 justify-content-between pb-3 pt-3 pb-xl-3 pt-xl-3">
              <div className="me-3  cursor-pointer d-flex align-items-center">
                <div className="Applogo_col">
                  <a href="">
                    {" "}
                    <img src={Logo} />
                  </a>
                </div>
              </div>
              <div className="d-flex">
                <div className="header_menu  d-flex align-items-center justify-content-between w-100 flex-grow-1">
                  <div className="header_menu_inner d-flex align-items-center justify-content-center flex-grow-1">
                    {/* <button className='HeaderMenuCta' id="Close_menu_CTA"
                onClick={() => setMenuOpen(!menuOpen)}
                > */}
                    <button
                      id="Close_menu_CTA"
                      className=""
                      onClick={() => setMenuOpen(false)}
                    >
                      {" "}
                      <svg
                        className="me-1 position-relative top--1"
                        width="9.653"
                        height="9.653"
                        viewBox="0 0 9.653 9.653"
                      >
                        <path
                          id="Icon_ionic-md-close"
                          data-name="Icon ionic-md-close"
                          d="M17.176,8.489l-.965-.965L12.35,11.385,8.489,7.523l-.965.965,3.861,3.861L7.523,16.211l.965.965,3.861-3.861,3.861,3.861.965-.965L13.315,12.35Z"
                          transform="translate(-7.523 -7.523)"
                          fill="rgba(255,255,255,1)"
                        />
                      </svg>
                    </button>
                    <nav id="navbar-example3" className="w-100">
                      <ul className="">
                        <li>
                          <Link to="/dashboard">Dashboard</Link>
                        </li>
                        {/* <li>
                      <a href="">Graduation </a>
                    </li> */}
                        <li>
                          <Link to="/certificates">Credential Hub</Link>
                        </li>
                        {/* <li>
                      <a href="#">Vault </a>
                    </li> */}
                      </ul>
                    </nav>
                    {/* <div class="list_institution_mbl"> <a href="login.php" class="btn btn-secondary h-42px font-18px font-semibold ms-1 ms-xxl-2 min-w-inherit "> <span class=""><span class="pe-1"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 18" fill="none">
                                          <path d="M12.75 6.318V5.25C12.75 3.85761 12.1969 2.52226 11.2123 1.53769C10.2277 0.553124 8.89239 0 7.5 0C6.10761 0 4.77226 0.553124 3.78769 1.53769C2.80312 2.52226 2.25 3.85761 2.25 5.25V6.318C1.58202 6.60953 1.01347 7.08939 0.613874 7.69891C0.214279 8.30842 0.000958782 9.02118 0 9.75V14.25C0.00119089 15.2442 0.396662 16.1973 1.09967 16.9003C1.80267 17.6033 2.7558 17.9988 3.75 18H11.25C12.2442 17.9988 13.1973 17.6033 13.9003 16.9003C14.6033 16.1973 14.9988 15.2442 15 14.25V9.75C14.999 9.02118 14.7857 8.30842 14.3861 7.69891C13.9865 7.08939 13.418 6.60953 12.75 6.318ZM3.75 5.25C3.75 4.25544 4.14509 3.30161 4.84835 2.59835C5.55161 1.89509 6.50544 1.5 7.5 1.5C8.49456 1.5 9.44839 1.89509 10.1517 2.59835C10.8549 3.30161 11.25 4.25544 11.25 5.25V6H3.75V5.25ZM13.5 14.25C13.5 14.8467 13.2629 15.419 12.841 15.841C12.419 16.2629 11.8467 16.5 11.25 16.5H3.75C3.15326 16.5 2.58097 16.2629 2.15901 15.841C1.73705 15.419 1.5 14.8467 1.5 14.25V9.75C1.5 9.15326 1.73705 8.58097 2.15901 8.15901C2.58097 7.73705 3.15326 7.5 3.75 7.5H11.25C11.8467 7.5 12.419 7.73705 12.841 8.15901C13.2629 8.58097 13.5 9.15326 13.5 9.75V14.25Z" fill="white" />
                                          <path d="M7.5 10.5C7.30109 10.5 7.11032 10.579 6.96967 10.7197C6.82902 10.8603 6.75 11.0511 6.75 11.25V12.75C6.75 12.9489 6.82902 13.1397 6.96967 13.2803C7.11032 13.421 7.30109 13.5 7.5 13.5C7.69891 13.5 7.88968 13.421 8.03033 13.2803C8.17098 13.1397 8.25 12.9489 8.25 12.75V11.25C8.25 11.0511 8.17098 10.8603 8.03033 10.7197C7.88968 10.579 7.69891 10.5 7.5 10.5Z" fill="white" />
                                      </svg></span> Login</span> </a></div> */}
                  </div>
                </div>
              </div>
              <div className="d-flex header_rt position-relative z-5 gap-md-2 gap-xxl-2 align-items-center">
                <button
                  id="menu_mbl_CTA"
                  className="btn btn-primary h-42px px-2 d-flex align-items-center min-w-inherit dropdown-arrow-none me-3 "
                  onClick={() => setMenuOpen(true)}
                >
                  <svg className="" width={18} height={12} viewBox="0 0 18 12">
                    <path
                      id="Path_5135"
                      data-name="Path 5135"
                      d="M3,18H21V16H3Zm0-5H21V11H3ZM3,6V8H21V6Z"
                      transform="translate(-3 -6)"
                      fill="#fff"
                    />
                  </svg>
                </button>

                <div className="position-relative notification-col me-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={23}
                    height={23}
                    viewBox="0 0 23 23"
                    fill="none"
                  >
                    <path
                      opacity="0.8"
                      d="M22.3737 16.3135L19.6904 6.63435C19.1512 4.68729 17.9759 2.97666 16.3518 1.77493C14.7277 0.573209 12.7482 -0.050485 10.7286 0.00319692C8.70898 0.0568788 6.76539 0.784848 5.20744 2.07115C3.64949 3.35745 2.56678 5.1281 2.13177 7.10106L0.0569824 16.4352C-0.0208009 16.7855 -0.0189287 17.1487 0.0624608 17.4981C0.14385 17.8476 0.302679 18.1743 0.527221 18.4541C0.751764 18.7339 1.03629 18.9597 1.35978 19.1149C1.68328 19.27 2.0375 19.3505 2.39627 19.3505H6.36665C6.67162 20.4051 7.31103 21.3321 8.18856 21.9919C9.0661 22.6516 10.1342 23.0083 11.2321 23.0083C12.33 23.0083 13.3981 22.6516 14.2757 21.9919C15.1532 21.3321 15.7926 20.4051 16.0976 19.3505H20.066C20.4354 19.3505 20.7997 19.2651 21.1306 19.101C21.4615 18.9369 21.75 18.6986 21.9735 18.4045C22.197 18.1105 22.3495 17.7688 22.4191 17.406C22.4887 17.0433 22.4725 16.6694 22.3737 16.3135ZM2.99332 16.4755L4.93873 7.71918C5.2367 6.37375 5.97617 5.16666 7.03944 4.29006C8.10271 3.41347 9.42867 2.91775 10.8062 2.88182C12.1838 2.84589 13.5338 3.27182 14.6413 4.09181C15.7488 4.91179 16.5502 6.07869 16.9179 7.40677L19.4364 16.4755H2.99332Z"
                      fill="black"
                    />
                  </svg>
                  <span className="rounded-circle position-absolute text-white notification-num">
                    <span>2</span>
                  </span>
                </div>
                <div className="dropdown ">
                  <button
                    className="btn text-default border border-1 profile-btn dropdown-toggle dropdown-arrow-none min-w-inherit"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div className="ProfileImg rounded-circle overflow-hidden">
                      <div className="imges-outer">
                        {" "}
                        <img
                          src={UserImage}
                          className="profile-img"
                          alt="Profile"
                        />
                      </div>
                    </div>
                    <div className="profile-text d-none d-md-block">
                      <div className="fw-semibold font-18px pb-xl-1">
                        Darren Barajas
                      </div>
                      <div className="font-primary font-16px">Student</div>
                    </div>
                    <span className="ms-md-2 me-md-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={10}
                        viewBox="0 0 16 10"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.51838 8.72514L15.3333 1.74478L13.6299 -1.19156e-06L7.66667 6.10797L1.70344 -1.48919e-07L-7.62668e-08 1.74478L6.81495 8.72514C7.04086 8.95647 7.34722 9.08642 7.66667 9.08642C7.98611 9.08642 8.29247 8.95647 8.51838 8.72514Z"
                          fill="#9C9C9C"
                        />
                      </svg>
                    </span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-arrow-none ">
                    <li>
              
                  <Link to={"/Profile"}>Profile</Link>
                </li>
                    {/* <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li> */}
                    <li>
                      {/* <a className="dropdown-item text-danger" href="#">
                    Logout
                  </a> */}
                      <Link to={"/"}>Logout</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Header End */}
      <a
        href="#page-body"
        id="backtoTop"
        className="btn btn-primary BackToTop p-0 min-w-inherit d-flex align-items-center justify-content-center font-26px cursor-pointer position-fixed z-3 shadow"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={22}
          height={22}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-arrow-up"
        >
          <line x1={12} y1={19} x2={12} y2={5} />
          <polyline points="5 12 12 5 19 12" />
        </svg>
      </a>
    </>
  );
}
