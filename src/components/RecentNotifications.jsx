import React from "react";

export default function RecentNotifications() {
  return (
    <>
      <div className="rounded-15px card card_design1 card_design1_p_25px border-top-0 overflow-hidden h-100 ">
        <div className="text-white card-header clearance_header d-flex align-items-center gap-2 py-2 justify-content-between">
          <div className="d-flex align-items-center gap-2">
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
                  width="39"
                  height="39"
                  rx="19.5"
                  fill="white"
                  stroke="#005097"
                />
                <path
                  d="M14 26H26V28H14V26ZM16 12H19V24H16V12ZM21 16H24V24H21V16ZM26 19H29V24H26V19ZM11 20H14V24H11V20Z"
                  fill="#005097"
                />
              </svg>
            </span>
            <div className="font-28px font-secondary-bold">
              Activity Updates
            </div>
          </div>
          {/* <div className="flex-0-0-auto">
            {" "}
            <a className="link-white link-white-hover-opaity1 link-white-hover-secondary-light">
              View All{" "}
              <span className="position-relative top--2 ps-1">
                {" "}
                <svg
                  className="svgFill"
                  xmlns="http://www.w3.org/2000/svg"
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.35177 5.88163L1.47014 -9.53674e-07L-1.54256e-06 1.47015L5.14655 6.6167L-1.92786e-07 11.7633L1.47015 13.2334L7.35177 7.35177C7.54669 7.1568 7.65618 6.89239 7.65618 6.6167C7.65618 6.34101 7.54669 6.0766 7.35177 5.88163Z"
                  />
                </svg>
              </span>{" "}
            </a>{" "}
          </div> */}
        </div>
        <div className="card-body RecentNotificationsContent">
          <div className="p-3 rounded-12px bg-danger-light border border-danger mb-3 d-flex gap-2 gap-xl-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
              >
                <circle cx={16} cy={16} r={16} fill="#EF4949" />
                <path
                  d="M16.0003 9.14355C15.6629 9.14355 15.3543 9.4303 15.3769 9.76692L15.6886 18.1824C15.6886 18.265 15.7214 18.3443 15.7799 18.4028C15.8383 18.4612 15.9176 18.4941 16.0003 18.4941C16.0829 18.4941 16.1622 18.4612 16.2207 18.4028C16.2791 18.3443 16.312 18.265 16.312 18.1824L16.6237 9.76692C16.6463 9.4303 16.3377 9.14355 16.0003 9.14355Z"
                  stroke="white"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.0001 22.8571C16.3444 22.8571 16.6235 22.578 16.6235 22.2337C16.6235 21.8894 16.3444 21.6104 16.0001 21.6104C15.6558 21.6104 15.3767 21.8894 15.3767 22.2337C15.3767 22.578 15.6558 22.8571 16.0001 22.8571Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="font-bold font-20px">
                Profile Verification Pending
              </div>

              <small className="font-14px opacity-06">8 hours ago</small>
            </div>
          </div>
          <div className="p-3 rounded-12px bg-info-light border mb-3 d-flex gap-2 gap-xl-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
              >
                <circle cx={16} cy={16} r={16} fill="#005097" />
                <path
                  d="M13.5399 14.9336H16.1639V21.9855M13.1709 22.1495H18.8289"
                  stroke="white"
                  strokeWidth="1.63999"
                  strokeMiterlimit={10}
                  strokeLinecap="square"
                />
                <path
                  d="M16 12.4736C15.7405 12.4736 15.4868 12.3966 15.2711 12.2525C15.0553 12.1083 14.8872 11.9034 14.7879 11.6637C14.6886 11.4239 14.6626 11.1601 14.7132 10.9056C14.7638 10.6511 14.8888 10.4174 15.0723 10.2339C15.2557 10.0504 15.4895 9.92544 15.744 9.87482C15.9985 9.8242 16.2623 9.85018 16.5021 9.94948C16.7418 10.0488 16.9467 10.2169 17.0909 10.4327C17.235 10.6485 17.312 10.9021 17.312 11.1616C17.312 11.5096 17.1737 11.8433 16.9277 12.0893C16.6817 12.3354 16.3479 12.4736 16 12.4736Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>
              <div className="font-bold font-20px">
                Academic Records Updated
              </div>

              <small className="font-14px opacity-06">1 day ago</small>
            </div>
          </div>
          <div className="p-3 rounded-12px bg-success-light border d-flex gap-2 gap-xl-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
              >
                <circle cx={16} cy={16} r={16} fill="#22C55E" />
                <path
                  d="M14.096 17.9049L10.2855 14.0957L8.38086 16.0003L14.096 21.7154L23.619 12.1911L21.7157 10.2852L14.096 17.9049Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>
              <div className="font-bold font-20px">
                Application Successfully Processed
              </div>

              <small className="font-14px opacity-06">5 days ago</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
