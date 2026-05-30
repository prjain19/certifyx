import React from 'react'
import Logo from '../assets/img/logo.png'

export default function Header() {


  
  return (


    
    <div>

        <>
  {/* Header Start */}
  <header
    id="app_Mainheader"
    className="app_header border-top border-secondary border-5"
  >
    <button className="Close_menu_overlay">close</button>
    <div className=" container-fluid h-100">
      <div className="header_inner">
        <div className="d-flex align-items-center h-100 justify-content-between pb-3 pt-3 pb-xl-3 pt-xl-3">
          {/* <a
            href="index.php"
            className="link-default font-24px font-semibold d-inline-flex gap-2 position-absolute backLink"
          >
            {" "}
            <span>
              <svg
                className="svgFill"
                xmlns="http://www.w3.org/2000/svg"
                width={10}
                height={17}
                viewBox="0 0 10 17"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.387734 9.3608L7.87664 16.8497L9.74854 14.9778L3.19558 8.42485L9.74854 1.8719L7.87664 0L0.387734 7.48891C0.139555 7.73716 0.000134468 8.07382 0.000134468 8.42485C0.000134468 8.77589 0.139555 9.11255 0.387734 9.3608Z"
                />
              </svg>
            </span>{" "}
            Back
          </a> */}
          <div className="me-3  cursor-pointer d-flex align-items-center justify-content-center w-100">
            <div className="Applogo_col">
              <a href="index.php">
                {" "}
                <img src={Logo} />
              </a>
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

    </div>
  )
}
