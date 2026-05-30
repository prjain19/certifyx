import React from 'react'

export default function TopFeatureCard() {
  return (
    <>
    
                    <div className="row g-3 g-md-4 font-20px font-semibold text-default mb-4 mb-xl-5 feature-row1">

  {/* Overview */}
  <div className="col-6 col-md-4 col-lg-2">
    <div className="feature-card d-flex align-items-center gap-2 overview-bg">

      <div className="icon-circle icon-overview">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={48}
          height={48}
          viewBox="0 0 48 48"
          fill="none"
        >
          <rect
            x="0.5"
            y="0.5"
            width={47}
            height={47}
            rx="23.5"
            fill="white"
            stroke="#FFD7C2"
          />

          <path
            d="M16 30H20V22H16V30Z"
            fill="#FF7A30"
          />

          <path
            d="M22 30H26V16H22V30Z"
            fill="#FF7A30"
          />

          <path
            d="M28 30H32V25H28V30Z"
            fill="#FF7A30"
          />
        </svg>
      </div>

      <div>Overview</div>
    </div>
  </div>

  {/* Shared Files */}
  <div className="col-6 col-md-4 col-lg-2">
    <div className="feature-card d-flex align-items-center gap-2 shared-bg">

      <div className="icon-circle icon-shared">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={48}
          height={48}
          viewBox="0 0 48 48"
          fill="none"
        >
          <rect
            x="0.5"
            y="0.5"
            width={47}
            height={47}
            rx="23.5"
            fill="white"
            stroke="#F5C7FF"
          />

          <path
            d="M18 24C19.6569 24 21 22.6569 21 21C21 19.3431 19.6569 18 18 18C16.3431 18 15 19.3431 15 21C15 22.6569 16.3431 24 18 24Z"
            fill="#C44DFF"
          />

          <path
            d="M30 30C31.6569 30 33 28.6569 33 27C33 25.3431 31.6569 24 30 24C28.3431 24 27 25.3431 27 27C27 28.6569 28.3431 30 30 30Z"
            fill="#C44DFF"
          />

          <path
            d="M20.5 22.5L27.5 25.5"
            stroke="#C44DFF"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div>Shared Files</div>
    </div>
  </div>

  {/* Verification */}
  <div className="col-6 col-md-4 col-lg-2">
    <div className="feature-card d-flex align-items-center gap-2 verification-bg">

      <div className="icon-circle icon-verification">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={48}
          height={48}
          viewBox="0 0 48 48"
          fill="none"
        >
          <rect
            x="0.5"
            y="0.5"
            width={47}
            height={47}
            rx="23.5"
            fill="white"
            stroke="#FFD8A8"
          />

          <path
            d="M24 14L33 18V24C33 30 29 33 24 34C19 33 15 30 15 24V18L24 14Z"
            fill="#FFAA33"
          />

          <path
            d="M20 24L23 27L28 21"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div>Verification</div>
    </div>
  </div>

  {/* Documents */}
  <div className="col-6 col-md-4 col-lg-2">
    <div className="feature-card d-flex align-items-center gap-2 documents-bg">

      <div className="icon-circle icon-documents">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={48}
          height={48}
          viewBox="0 0 48 48"
          fill="none"
        >
          <rect
            x="0.5"
            y="0.5"
            width={47}
            height={47}
            rx="23.5"
            fill="white"
            stroke="#B6FFE5"
          />

          <path
            d="M18 14H26L31 19V33H18V14Z"
            fill="#2DD4A3"
          />

          <path
            d="M26 14V20H31"
            stroke="white"
            strokeWidth="2"
          />

          <path
            d="M21 25H28"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />

          <path
            d="M21 29H28"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div>Documents</div>
    </div>
  </div>

  {/* Secure Store */}
  <div className="col-6 col-md-4 col-lg-2">
    <div className="feature-card d-flex align-items-center gap-2 secure-bg">

      <div className="icon-circle icon-secure">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={48}
          height={48}
          viewBox="0 0 48 48"
          fill="none"
        >
          <rect
            x="0.5"
            y="0.5"
            width={47}
            height={47}
            rx="23.5"
            fill="white"
            stroke="#C8FFD8"
          />

          <path
            d="M24 14L33 18V24C33 30 29 33 24 34C19 33 15 30 15 24V18L24 14Z"
            fill="#33C96B"
          />

          <path
            d="M24 22C25.1046 22 26 21.1046 26 20C26 18.8954 25.1046 18 24 18C22.8954 18 22 18.8954 22 20C22 21.1046 22.8954 22 24 22Z"
            fill="white"
          />

          <path
            d="M24 22V27"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div>Secure </div>
    </div>
  </div>

  {/* Activity */}
  <div className="col-6 col-md-4 col-lg-2">
    <div className="feature-card d-flex align-items-center gap-2 activity-bg">

      <div className="icon-circle icon-activity">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={48}
          height={48}
          viewBox="0 0 48 48"
          fill="none"
        >
          <rect
            x="0.5"
            y="0.5"
            width={47}
            height={47}
            rx="23.5"
            fill="white"
            stroke="#FFF0A8"
          />

          <path
            d="M16 30L21 24L25 28L32 19"
            stroke="#D9B300"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <circle
            cx="16"
            cy="30"
            r="2"
            fill="#D9B300"
          />

          <circle
            cx="21"
            cy="24"
            r="2"
            fill="#D9B300"
          />

          <circle
            cx="25"
            cy="28"
            r="2"
            fill="#D9B300"
          />

          <circle
            cx="32"
            cy="19"
            r="2"
            fill="#D9B300"
          />
        </svg>
      </div>

      <div>Activity</div>
    </div>
  </div>

</div>
    </>
  )
}
