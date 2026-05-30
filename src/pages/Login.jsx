import React from "react";
import Header from "../components/Header";
// import Bg4 from "../assets/img/bg-4.png";
import LoginForm from "../components/LoginForm";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";

export default function Login() {
  return (
    <>
      <div className="page-wrapper loginpage-wrapper">
        <Header></Header>

        <>
          {/* Banner Section Start */}
          <div id="Overview" className="position-relative">
            <div
              id="Overview_Industries_Genesis"
              className="banner_section banner_section_haveOverlay pb-0 bg-gradient pb-4 pb-xl-5 mb-4 mb-md-0 "
            >
              <div className="container container_banner  pt-xxl-3 text-white">
                <div className="mx-auto pe-0 position-relative pt-xl-5">
                  <div className="row justify-content-center pt-4 pt-md-5">
                    <div className="col-12 col-lg-6 pe-lg-4 col-xl-6 col-xxl-6 mb-4 mb-md-5 mb-lg-0">
                      <div className="bannerTagLine">
                        {/* Tag line */}
                        <div className="d-inline-flex align-items-center gap-2 rounded-50px bg-secondary px-3 py-1 mb-md-1 mb-3 badge_custom1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={15}
                            height={15}
                            viewBox="0 0 15 15"
                            fill="none"
                          >
                            <path
                              d="M7.5 2.51538C8.68846 3.51923 10.0385 4.03846 11.5385 4.03846C12.0231 4.03846 12.5423 3.94615 13.1308 3.76154C12.6231 8.23846 10.7538 11.2846 7.5 13.0615V2.51538ZM15 1.15385C15 1.15385 12.6923 2.30769 11.5385 2.30769C10.0038 2.30769 8.65385 1.53462 7.5 0C6.34615 1.53462 4.99615 2.30769 3.46154 2.30769C2.30769 2.30769 0 1.15385 0 1.15385C0 8.07692 2.50385 12.6923 7.5 15C12.4962 12.6923 15 8.07692 15 1.15385Z"
                              fill="white"
                            />
                          </svg>
                          <span className="text-white font-16px font-semibold py-1">
                            Trusted Digital Credentials
                          </span>
                        </div>
                        {/* Heading */}
                        <h1 className="font-70px line-height-110 mb-2 font-secondary-extrabold text-white pt-xl-1">
                          
                          Your Trusted Digital Credential Hub
                        </h1>
                        {/* Description */}
                        <div className="font-22px mb-3 mb-xl-4 line-height-150 font-primary text-white max-w-650 ">
          Access your secure dashboard to manage, verify, and organize professional credentials in one place.
                        </div>
                      </div>
                      {/* Buttons */}
                      {/* Feature points */}
                      <FeatureCard></FeatureCard>

                    
                    </div>
                    <div className="col-12 col-lg-6 col-xl-6 col-xxl-5 position-relative  z-3">
                      <div className="">
                        <LoginForm></LoginForm>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="banner_shape position-absolute start-0 bottom-0 w-100 z-1">
              <img
                src={Bg4}
                className="w-100"
                width={1920}
                height={154}
                alt=""
              />
            </div> */}
          </div>
          {/* Banner Section End */}
        </>
      </div>
      <>
    <Footer></Footer>
      </>
    </>
  );
}
