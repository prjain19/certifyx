import React from "react";
import Google from "../assets/img/google.webp";
import Microsoft from "../assets/img/microsoft.webp";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {


   const navigate = useNavigate();

  const handleSubmit = (e) => {
    //    e.preventDefault();
    // your login validation here
    navigate("/dashboard");
  };

  return (
    <>
      <div className="bg-white rounded-20px shadow_1 p-4 p-md-4 mx-auto text-default">
        <div className="p-xl-3">
          {/* Heading */}
          <div className="mb-3 mb-md-4">
            <div className="font-48px font-secondary-extrabold  mb-2 mb-xl-2">
              <span className="">Sign in to continue</span>
            </div>
            <div className="font-20px line-height-140">
              Store, verify and access your certificates and important documents from one secure platform.
            </div>
          </div>
          {/* Login Toggle */}
          <div className="bg-light rounded-12px p-2 gap-1 d-flex mb-3 mb-md-4 form-checkRadio-box font-20px font-semibold flex-wrap d-none">
            {/* Student Login */}
            <div className="flex-fill form-checkRadio-box">
              <input
                type="radio"
                className="btn-check"
                name="options-outlined"
                id="success-outlined"
                autoComplete="off"
                defaultChecked=""
              />
              <label className="btn w-100 font-20px" htmlFor="success-outlined">
                Student Login
              </label>
            </div>
            {/* Institution Login */}
            <div className="flex-fill form-checkRadio-box">
              <input
                type="radio"
                className="btn-check"
                name="options-outlined"
                id="danger-outlined"
                autoComplete="off"
              />
              <label className="btn w-100 font-20px" htmlFor="danger-outlined">
                Institution Login
              </label>
            </div>
          </div>
          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-3 mb-xl-4">
              <label className="font-20px font-semibold mb-1 d-block line-height-130">
                Email Address
              </label>
              <input
                type="email"
                className="form-control h-55px rounded-8px px-xl-3"
                placeholder="Enter your email address"
              />
            </div>
            {/* Password */}
            <div className="mb-3 position-relative">
              <label className="font-20px font-semibold mb-1 d-block line-height-130">
                Password
              </label>
              <div className="position-relative">
                <input
                  type="password"
                  className="form-control pe-5 h-55px rounded-8px px-xl-3"
                  placeholder="••••••••"
                />
                <a className="position-absolute top-50 end-0 translate-middle-y me-3 cursor-pointer link-default">
                  <svg
                    className="svgFill opacity-05"
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={17}
                    viewBox="0 0 22 17"
                    fill="none"
                  >
                    <path d="M21.8167 7.8265C21.6975 7.50658 18.7917 0 11 0C3.20833 0 0.298833 7.50658 0.183333 7.8265L0 8.305L0.183333 8.7835C0.3025 9.10342 3.20833 16.61 11 16.61C18.7917 16.61 21.7012 9.10342 21.8167 8.7835L22 8.305L21.8167 7.8265ZM11 13.8829C6.0335 13.8829 3.62908 9.74508 2.9425 8.305C3.63092 6.86125 6.03625 2.72708 11 2.72708C15.9637 2.72708 18.3682 6.86033 19.0575 8.305C18.3682 9.74967 15.9637 13.8829 11 13.8829Z" />
                    <path d="M10.9987 11.972C13.0237 11.972 14.6654 10.3304 14.6654 8.30534C14.6654 6.28029 13.0237 4.63867 10.9987 4.63867C8.97365 4.63867 7.33203 6.28029 7.33203 8.30534C7.33203 10.3304 8.97365 11.972 10.9987 11.972Z" />
                  </svg>
                </a>
              </div>
            </div>
            {/* Remember + Forgot */}
            <div className="d-flex align-items-center justify-content-between mb-3 mb-md-4 pt-xl-1">
              <div className="form-check d-flex align-items-center p-0 gap-2">
                <input
                  className="form-check-input form-check-input-22px m-0"
                  type="checkbox"
                  id="rememberMe"
                />
                <label
                  className="form-check-label font-16px"
                  htmlFor="rememberMe"
                >
                  Keep me signed in
                </label>
              </div>
              {/* <a href="#" className="font-18px font-semibold text-secondary">
                Forgot Password?
              </a> */}
            </div>
            {/* Submit */}
            <button
              
              className="btn btn-primary w-100 btn-h-56 mb-3 mb-4 font-20px"
            >
              Sign In
            </button>
            {/* Divider */}
            <div className="d-flex align-items-center mb-4">
              <div className="flex-grow-1 border-top" />
              <span className="px-3 font-18px text-uppercase">
                Or Continue With
              </span>
              <div className="flex-grow-1 border-top" />
            </div>
            {/* Social Login */}
            <div className="row g-2 g-md-3 mb-4 Google_Microsoft_btn">
              <div className="col-6">
                <button
                  type="button"
                  className="btn  border-2 btn-outline-grey w-100 d-flex align-items-center justify-content-center gap-2"
                >
                  <img src={Google} alt="" />
                  Google
                </button>
              </div>
              <div className="col-6">
                <button
                  type="button"
                  className="btn  btn-outline-grey w-100 d-flex align-items-center justify-content-center gap-2 border-2"
                >
                  <img src={Microsoft} alt="" />
                  Microsoft
                </button>
              </div>
            </div>
            {/* Footer */}
            <div className="text-center font-18px line-height-130 border-top pt-3 mt-3 mb-xl-2 d-none">
              Don’t have an account? <br />
              <a href="#" className="link-primary font-bold">
                Create Account
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
