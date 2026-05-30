import React from "react";

export default function GraduationStatus() {
  return (
    <>
      <section className="graduation_dashboard mb_30px">
        <div className="">
          <div className="row g-4 row_g_30px">
            {/* LEFT COLUMN */}
            <div className="col-lg-8 text-default">
              <div className="rounded-15px overflow-hidden bg-white card card_design1 border-top-0">
                {/* Header */}
                <div className="card-header d-flex justify-content-between align-items-center text-white graduation_header flex-wrap gap-2">
                  <div className="py-1">
                    <h2 className="font-36px font-secondary-extrabold mb-md-2">
                     Verification Progress
                    </h2>
                    <p className="font-20px mb-0 line-height-130 ">
                      Track the status of your professional credentials
                    </p>
                  </div>
                  {/* <div className="border flex-0-0-auto border-white dateInputt rounded-pill text-white font-18px font-semibold h-42px line-height-130 px-3 py-1 py-md-2 rounded-pill d-inline-flex align-items-center">
                    <i className="bi bi-calendar me-2 position-relative top--1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={19}
                        height={19}
                        viewBox="0 0 19 19"
                        fill="none"
                      >
                        <path
                          d="M14.6383 1.58252H14.2427V1.18689C14.2427 0.872107 14.1176 0.570217 13.895 0.347632C13.6725 0.125047 13.3706 0 13.0558 0C12.741 0 12.4391 0.125047 12.2165 0.347632C11.9939 0.570217 11.8689 0.872107 11.8689 1.18689V1.58252H7.12134V1.18689C7.12134 0.872107 6.99629 0.570217 6.77371 0.347632C6.55112 0.125047 6.24923 0 5.93445 0C5.61967 0 5.31778 0.125047 5.09519 0.347632C4.87261 0.570217 4.74756 0.872107 4.74756 1.18689V1.58252H4.35193C3.19773 1.58252 2.0908 2.04103 1.27465 2.85717C0.458505 3.67331 0 4.78024 0 5.93445L0 14.6383C0 15.7925 0.458505 16.8994 1.27465 17.7156C2.0908 18.5317 3.19773 18.9902 4.35193 18.9902H14.6383C15.7925 18.9902 16.8994 18.5317 17.7156 17.7156C18.5317 16.8994 18.9902 15.7925 18.9902 14.6383V5.93445C18.9902 4.78024 18.5317 3.67331 17.7156 2.85717C16.8994 2.04103 15.7925 1.58252 14.6383 1.58252ZM14.6383 16.6165H4.35193C3.82729 16.6165 3.32414 16.408 2.95317 16.0371C2.58219 15.6661 2.37378 15.1629 2.37378 14.6383V7.9126H16.6165V14.6383C16.6165 15.1629 16.408 15.6661 16.0371 16.0371C15.6661 16.408 15.1629 16.6165 14.6383 16.6165Z"
                          fill="white"
                        />
                      </svg>
                    </i>{" "}
                    31 Dec 2025
                  </div> */}
                </div>
                {/* Timeline Body */}
                <div className="card-body">
                  <div className=" position-relative graduation_timeline">
                    {/* Approved */}
                    <div className="timeline_item completed mb-4 d-flex">
                      <div className="timeline_icon me-2 me-md-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={36}
                          height={36}
                          viewBox="0 0 36 36"
                          fill="none"
                        >
                          <circle cx={18} cy={18} r={18} fill="#22C55E" />
                          <path
                            d="M15.858 20.143L11.5711 15.8577L9.42847 18.0003L15.858 24.4298L26.5713 13.715L24.4302 11.5708L15.858 20.143Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div className="flex-grow-1 rounded-12px p-3 bg-F0FDF4 border-22C55E">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <div className="font-20px font-bold">
                            Credential Verified
                          </div>
                          <span className="badge badge_green border rounded-pill border-1 text-default font-14px font-semibold">
                            Completed
                          </span>
                        </div>
                        <p className="mb-2">
                         Your submitted credential has been successfully verified
                        </p>
                        <small className="opacity-07 font-16px">
                        Verified on: Nov 20, 2025
                        </small>
                      </div>
                    </div>
                    {/* Exams Cleared */}
                    <div className="timeline_item completed mb-4 d-flex">
                      <div className="timeline_icon me-2 me-md-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={36}
                          height={36}
                          viewBox="0 0 36 36"
                          fill="none"
                        >
                          <circle cx={18} cy={18} r={18} fill="#22C55E" />
                          <path
                            d="M15.858 20.143L11.5711 15.8577L9.42847 18.0003L15.858 24.4298L26.5713 13.715L24.4302 11.5708L15.858 20.143Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div className="flex-grow-1 rounded-12px p-3 bg-F0FDF4  border-22C55E">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <div className="font-20px font-bold">
                         

                            Document Approved



                          </div>
                          <span className="badge badge_green border rounded-pill border-1 text-default font-14px font-semibold">
                            Completed
                          </span>
                        </div>
                        <p className="mb-2">
                          All uploaded documents have been approved
                        </p>
                        <small className="opacity-07 font-16px">
                          Approved on: Nov 25, 2025
                        </small>
                      </div>
                    </div>
                    {/* Fee Clearance */}
                    <div className="timeline_item danger mb-4 d-flex">
                      <div className="timeline_icon me-2 me-md-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={36}
                          height={36}
                          viewBox="0 0 36 36"
                          fill="none"
                        >
                          <circle cx={18} cy={18} r={18} fill="#EF4444" />
                          <path
                            d="M18.0002 10.2856C17.6206 10.2856 17.2735 10.6082 17.2989 10.9869L17.6496 20.4543C17.6496 20.5473 17.6865 20.6365 17.7523 20.7023C17.818 20.768 17.9072 20.805 18.0002 20.805C18.0932 20.805 18.1824 20.768 18.2482 20.7023C18.3139 20.6365 18.3509 20.5473 18.3509 20.4543L18.7015 10.9869C18.7269 10.6082 18.3798 10.2856 18.0002 10.2856Z"
                            stroke="white"
                            strokeWidth="2.32499"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M18.0001 25.7146C18.3874 25.7146 18.7014 25.4006 18.7014 25.0133C18.7014 24.626 18.3874 24.312 18.0001 24.312C17.6128 24.312 17.2988 24.626 17.2988 25.0133C17.2988 25.4006 17.6128 25.7146 18.0001 25.7146Z"
                            stroke="white"
                            strokeWidth="2.32499"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="flex-grow-1 rounded-12px p-3 bg-danger-light  border-danger">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <div className="font-20px font-bold ">
                            Verification Required



                          </div>
                          <span className="badge badge_red border rounded-pill border-1 text-default font-14px font-semibold">
                            Action Required
                          </span>
                        </div>
                        <p className="mb-3">Additional verification is needed for one document</p>
                        <a
                          href="graduation-status.php"
                          className="btn btn-outline-danger btn-outline-danger-bg-white font-18px font-bold h-40px px-2 border-1 "
                        >
                          {" "}
                          <span className="px-xl-1">
                            {" "}
                            View Verification Details
                          </span>
                        </a>
                      </div>
                    </div>
                    {/* Gown Booking */}
                    <div className="timeline_item pending mb-4 d-flex">
                      <div className="timeline_icon me-2 me-md-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={36}
                          height={36}
                          viewBox="0 0 36 36"
                          fill="none"
                        >
                          <circle cx={18} cy={18} r={18} fill="#FD840C" />
                          <path
                            d="M18 9.85693C13.5099 9.85693 9.85718 13.5097 9.85718 17.9998C9.85718 22.4899 13.5099 26.1426 18 26.1426C22.4901 26.1426 26.1429 22.4899 26.1429 17.9998C26.1429 13.5097 22.4901 9.85693 18 9.85693ZM19.6965 20.938C19.5899 20.9998 19.4732 21.0289 19.3579 21.0289C19.1231 21.0289 18.8951 20.9075 18.7695 20.6896L17.4124 18.3391C17.3527 18.2359 17.3215 18.1192 17.3215 17.9998V13.9284C17.3215 13.5538 17.6248 13.2498 18 13.2498C18.3753 13.2498 18.6786 13.5538 18.6786 13.9284V17.8179L19.9448 20.0111C20.1321 20.3354 20.0208 20.7507 19.6965 20.938Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div className="flex-grow-1 rounded-12px p-3 bg-FFF9F0  border-FD840C">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <div className="font-20px font-bold  text-FD840C">
                            Document Sharing


                          </div>
                          <span className="badge badge_orange border rounded-pill border-1 text-default font-14px font-semibold">
                            Pending
                          </span>
                        </div>
                        <p className="mb-0">Available after verification</p>
                      </div>
                    </div>
                    {/* Guest Tickets */}
                    <div className="timeline_item pending mb-4 d-flex">
                      <div className="timeline_icon me-2 me-md-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={36}
                          height={36}
                          viewBox="0 0 36 36"
                          fill="none"
                        >
                          <circle cx={18} cy={18} r={18} fill="#FD840C" />
                          <path
                            d="M26.1842 22.0921L26.1842 20.6395C26.1813 20.3342 26.0771 20.0386 25.888 19.799C25.6989 19.5594 25.4356 19.3894 25.1394 19.3157C24.851 19.2367 24.5965 19.0652 24.4152 18.8275C24.2338 18.5898 24.1356 18.2991 24.1356 18.0001C24.1356 17.7011 24.2338 17.4104 24.4152 17.1727C24.5965 16.935 24.851 16.7634 25.1394 16.6845C25.4356 16.6107 25.6989 16.4407 25.888 16.2011C26.0771 15.9615 26.1813 15.6659 26.1842 15.3607L26.1842 13.908C26.1842 13.3654 25.9687 12.8449 25.5849 12.4612C25.2012 12.0775 24.6808 11.862 24.1382 11.862L21.4101 11.862L21.4101 14.59C21.4101 14.7709 21.3383 14.9444 21.2104 15.0723C21.0825 15.2002 20.909 15.272 20.7281 15.272C20.5472 15.272 20.3738 15.2002 20.2459 15.0723C20.118 14.9444 20.0461 14.7709 20.0461 14.59L20.0461 11.862L13.226 11.862C12.3219 11.863 11.4552 12.2227 10.8159 12.8619C10.1766 13.5012 9.817 14.3679 9.81592 15.272L9.81592 15.3607C9.81882 15.6659 9.923 15.9615 10.1121 16.2011C10.3012 16.4407 10.5646 16.6107 10.8608 16.6845C11.1491 16.7634 11.4036 16.935 11.585 17.1727C11.7663 17.4104 11.8646 17.7011 11.8646 18.0001C11.8646 18.2991 11.7663 18.5898 11.585 18.8275C11.4036 19.0652 11.1491 19.2367 10.8608 19.3157C10.5646 19.3894 10.3012 19.5594 10.1121 19.799C9.923 20.0386 9.81882 20.3342 9.81592 20.6395L9.81592 20.7281C9.817 21.6322 10.1766 22.4989 10.8159 23.1382C11.4552 23.7775 12.3219 24.1371 13.226 24.1382L20.0461 24.1382L20.0461 21.4101C20.0461 21.2293 20.118 21.0558 20.2459 20.9279C20.3738 20.8 20.5472 20.7281 20.7281 20.7281C20.909 20.7281 21.0825 20.8 21.2104 20.9279C21.3383 21.0558 21.4101 21.2293 21.4101 21.4101L21.4101 24.1382L24.1382 24.1382C24.6808 24.1382 25.2012 23.9226 25.5849 23.5389C25.9687 23.1552 26.1842 22.6348 26.1842 22.0921ZM20.0461 18.6821L20.0461 17.3181C20.0461 17.1372 20.118 16.9637 20.2459 16.8358C20.3738 16.7079 20.5472 16.636 20.7281 16.636C20.909 16.636 21.0825 16.7079 21.2104 16.8358C21.3383 16.9637 21.4101 17.1372 21.4101 17.3181L21.4101 18.6821C21.4101 18.863 21.3383 19.0364 21.2104 19.1643C21.0825 19.2922 20.909 19.3641 20.7281 19.3641C20.5472 19.3641 20.3738 19.2922 20.2459 19.1643C20.118 19.0364 20.0461 18.863 20.0461 18.6821Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div className="flex-grow-1 rounded-12px p-3 bg-FFF9F0  border-FD840C">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="font-20px font-bold mb-1 text-FD840C">
                            Secure Storage

                          </div>
                          <span className="badge badge_orange border rounded-pill border-1 text-default font-14px font-semibold">
                            Pending
                          </span>
                        </div>
                        <p className="mb-0">Available after verification</p>
                      </div>
                    </div>
                    {/* Certificate */}
                    <div className="timeline_item pending d-flex">
                      <div className="timeline_icon me-2 me-md-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={36}
                          height={36}
                          viewBox="0 0 36 36"
                          fill="none"
                        >
                          <circle cx={18} cy={18} r={18} fill="#FD840C" />
                          <path
                            d="M22.0487 18.7368C21.4012 18.7346 20.7712 18.9465 20.2567 19.3397C19.7421 19.7328 19.3721 20.285 19.204 20.9103C19.036 21.5357 19.0795 22.199 19.3277 22.7971C19.576 23.3951 20.015 23.8943 20.5764 24.2169V26.3024C20.5764 26.4075 20.6075 26.5101 20.6658 26.5975C20.7241 26.6848 20.807 26.7529 20.904 26.7931C21.0011 26.8333 21.1078 26.8438 21.2108 26.8233C21.3138 26.8028 21.4084 26.7522 21.4826 26.6779L22.0487 26.1125L22.6149 26.6779C22.6891 26.7522 22.7837 26.8028 22.8867 26.8233C22.9897 26.8438 23.0964 26.8333 23.1935 26.7931C23.2905 26.7529 23.3734 26.6848 23.4317 26.5975C23.49 26.5101 23.5211 26.4075 23.5211 26.3024V24.2169C24.0825 23.8943 24.5215 23.3951 24.7698 22.7971C25.018 22.199 25.0615 21.5357 24.8935 20.9103C24.7254 20.285 24.3554 19.7328 23.8408 19.3397C23.3263 18.9465 22.6963 18.7346 22.0487 18.7368Z"
                            fill="white"
                          />
                          <path
                            d="M17.6316 21.6814C17.6307 20.9057 17.8343 20.1436 18.2219 19.4717C18.6095 18.7998 19.1673 18.242 19.8392 17.8545C20.5111 17.467 21.2733 17.2634 22.0489 17.2644C22.8245 17.2653 23.5862 17.4707 24.2571 17.8599V12.8473C24.256 11.8715 23.8678 10.9359 23.1778 10.2459C22.4877 9.55585 21.5522 9.16767 20.5763 9.1665H14.6869C13.7111 9.16767 12.7755 9.55585 12.0855 10.2459C11.3954 10.9359 11.0073 11.8715 11.0061 12.8473V21.6814C11.0073 22.6572 11.3954 23.5928 12.0855 24.2828C12.7755 24.9729 13.7111 25.361 14.6869 25.3622H19.104V24.9647C18.641 24.5521 18.2704 24.0463 18.0167 23.4805C17.7629 22.9146 17.6317 22.3015 17.6316 21.6814ZM14.6869 12.1112H20.5763C20.7715 12.1112 20.9588 12.1887 21.0968 12.3268C21.2349 12.4649 21.3125 12.6521 21.3125 12.8473C21.3125 13.0426 21.2349 13.2298 21.0968 13.3679C20.9588 13.506 20.7715 13.5835 20.5763 13.5835H14.6869C14.4917 13.5835 14.3045 13.506 14.1664 13.3679C14.0283 13.2298 13.9508 13.0426 13.9508 12.8473C13.9508 12.6521 14.0283 12.4649 14.1664 12.3268C14.3045 12.1887 14.4917 12.1112 14.6869 12.1112ZM14.6869 15.0559H20.5763C20.7715 15.0559 20.9588 15.1334 21.0968 15.2715C21.2349 15.4095 21.3125 15.5968 21.3125 15.792C21.3125 15.9873 21.2349 16.1745 21.0968 16.3126C20.9588 16.4506 20.7715 16.5282 20.5763 16.5282H14.6869C14.4917 16.5282 14.3045 16.4506 14.1664 16.3126C14.0283 16.1745 13.9508 15.9873 13.9508 15.792C13.9508 15.5968 14.0283 15.4095 14.1664 15.2715C14.3045 15.1334 14.4917 15.0559 14.6869 15.0559ZM16.8955 19.4729H14.6869C14.4917 19.4729 14.3045 19.3953 14.1664 19.2572C14.0283 19.1192 13.9508 18.9319 13.9508 18.7367C13.9508 18.5415 14.0283 18.3542 14.1664 18.2161C14.3045 18.0781 14.4917 18.0005 14.6869 18.0005H16.8955C17.0907 18.0005 17.2779 18.0781 17.416 18.2161C17.5541 18.3542 17.6316 18.5415 17.6316 18.7367C17.6316 18.9319 17.5541 19.1192 17.416 19.2572C17.2779 19.3953 17.0907 19.4729 16.8955 19.4729Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div className="flex-grow-1 rounded-12px p-3 bg-FFF9F0  border-FD840C">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="font-20px font-bold mb-1 text-FD840C">
                        
                            Credential Download

                          </div>
                          <span className="badge badge_orange border rounded-pill border-1 text-default font-14px font-semibold">
                            Pending
                          </span>
                        </div>
                        <p className="mb-0">
                          Available after verification completion
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* RIGHT COLUMN */}
            <div className="col-lg-4">
              <div className="d-flex flex-column gap-30px">
                {/* Clearance Status */}
                <div className="rounded-15px card card_design1 card_design1_p_25px border-top-0 overflow-hidden ">
                  <div className=" text-white card-header clearance_header gap-2 d-flex align-items-center py-2 ">
                    <span className="position-relative top--1 pe-xl-1 py-1">
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
                          d="M30.9411 18.6446L29.3725 17.0763C29.0002 16.704 28.6951 15.9683 28.6951 15.4406V13.2226C28.6951 12.1675 27.8332 11.3055 26.7783 11.3049H24.5594C24.0324 11.3049 23.2958 10.9993 22.9234 10.6273L21.3551 9.05891C20.6099 8.3137 19.3897 8.3137 18.6445 9.05891L17.0761 10.6284C16.7035 11.0007 15.9661 11.3055 15.4402 11.3055H13.2222C12.1684 11.3055 11.3054 12.1675 11.3054 13.2226V15.4407C11.3054 15.9662 11.0003 16.7043 10.628 17.0763L9.05933 18.6447C8.31356 19.3899 8.31356 20.6101 9.05933 21.3565L10.628 22.9248C11.0006 23.2971 11.3054 24.0349 11.3054 24.5605V26.7786C11.3054 27.8326 12.1684 28.6957 13.2222 28.6957H15.4403C15.9673 28.6957 16.7038 29.0007 17.0762 29.3728L18.6446 30.9417C19.3898 31.6863 20.6099 31.6863 21.3551 30.9417L22.9235 29.3728C23.2961 29.0005 24.0324 28.6957 24.5594 28.6957H26.7784C27.8332 28.6957 28.6952 27.8326 28.6952 26.7786V24.5605C28.6952 24.0326 29.0005 23.2969 29.3726 22.9248L30.9412 21.3565C31.6858 20.6101 31.6858 19.3899 30.9411 18.6446ZM18.4783 24.3128L14.2494 20.0833L15.6047 18.7283L18.4787 21.6022L24.3947 15.6877L25.7496 17.0427L18.4783 24.3128Z"
                          fill="#005097"
                        />
                      </svg>
                    </span>
                    <div className="font-28px font-secondary-bold mb-0">
                      {" "}
                      Verification Status
                    </div>
                  </div>
                  <div className="card-body text-default">
                    <div className="d-flex justify-content-between align-items-center mb-3 p-3 rounded-12px bg-F0FDF4 border border-success font-20px font-semibold">
                      <span className="d-inline-flex gap-2 align-items-center align-items-center">
                        <svg
                          className=" position-relative top--1"
                          xmlns="http://www.w3.org/2000/svg"
                          width={22}
                          height={22}
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <circle cx={11} cy={11} r={11} fill="#22C55E" />
                          <path
                            d="M9.69111 12.3098L7.07137 9.69103L5.76196 11.0004L9.69111 14.9296L16.2382 8.38162L14.9297 7.07129L9.69111 12.3098Z"
                            fill="white"
                          />
                        </svg>{" "}
                        Identity Check     
 

                      </span>
                      <span className="badge badge_green border rounded-pill border-1 text-default font-14px font-semibold">
                        Completed
                      </span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3 p-3 rounded-12px bg-F0FDF4 border border-success font-20px font-semibold">
                      <span className="d-inline-flex gap-2 align-items-center">
                        <svg
                          className=" position-relative top--1"
                          xmlns="http://www.w3.org/2000/svg"
                          width={22}
                          height={22}
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <circle cx={11} cy={11} r={11} fill="#22C55E" />
                          <path
                            d="M9.69111 12.3098L7.07137 9.69103L5.76196 11.0004L9.69111 14.9296L16.2382 8.38162L14.9297 7.07129L9.69111 12.3098Z"
                            fill="white"
                          />
                        </svg>{" "}
                        Document Review    
                      </span>
                      <span className="badge badge_green border rounded-pill border-1 text-default font-14px font-semibold">
                        Completed
                      </span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3 p-3 rounded-12px bg-F0FDF4 border border-success font-20px font-semibold">
                      <span className="d-inline-flex gap-2 align-items-center">
                        <svg
                          className=" position-relative top--1"
                          xmlns="http://www.w3.org/2000/svg"
                          width={22}
                          height={22}
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <circle cx={11} cy={11} r={11} fill="#22C55E" />
                          <path
                            d="M9.69111 12.3098L7.07137 9.69103L5.76196 11.0004L9.69111 14.9296L16.2382 8.38162L14.9297 7.07129L9.69111 12.3098Z"
                            fill="white"
                          />
                        </svg>{" "}
                        Credential Match    

                      </span>
                      <span className="badge badge_green border rounded-pill border-1 text-default font-14px font-semibold">
                        Completed
                      </span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center p-3 rounded-12px bg-danger-light border border-danger font-20px font-semibold">
                      <span className="d-inline-flex gap-2 align-items-center">
                        <svg
                          className=" position-relative top--1"
                          xmlns="http://www.w3.org/2000/svg"
                          width={22}
                          height={22}
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <circle cx={11} cy={11} r={11} fill="#EF4949" />
                          <path
                            d="M11.0002 6.28564C10.7682 6.28564 10.5561 6.48278 10.5716 6.71421L10.7859 12.4998C10.7859 12.5567 10.8085 12.6112 10.8487 12.6514C10.8888 12.6915 10.9433 12.7141 11.0002 12.7141C11.057 12.7141 11.1115 12.6915 11.1517 12.6514C11.1919 12.6112 11.2145 12.5567 11.2145 12.4998L11.4287 6.71421C11.4443 6.48278 11.2321 6.28564 11.0002 6.28564Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.0001 15.7146C11.2368 15.7146 11.4287 15.5227 11.4287 15.286C11.4287 15.0493 11.2368 14.8574 11.0001 14.8574C10.7634 14.8574 10.5715 15.0493 10.5715 15.286C10.5715 15.5227 10.7634 15.7146 11.0001 15.7146Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Final Verification  
                      </span>
                      <a
                        href="clearance-status.php"
                        className="badge badge_red border rounded-pill border-1 text-default font-14px font-semibold"
                      >
                        view
                      </a>
                    </div>
                  </div>
                </div>
                {/* Ceremony Details */}
                <div className="rounded-15px card card_design1 border-top-1 card_design1_p_25px ceremony_card">
                  <div className="card-body">
                    <div className="font-28px font-secondary-bold mb-3 d-flex gap-2 align-items-center">
                      <span className="pe-xl-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={40}
                          height={40}
                          viewBox="0 0 40 40"
                          fill="none"
                        >
                          <rect width={40} height={40} rx={20} fill="white" />
                          <path
                            d="M30 15.8333V16.6667H10V15.8333C10 13.5325 11.8658 11.6667 14.1667 11.6667H15V10.8333C15 10.3733 15.3733 10 15.8333 10C16.2933 10 16.6667 10.3733 16.6667 10.8333V11.6667H23.3333V10.8333C23.3333 10.3733 23.7067 10 24.1667 10C24.6267 10 25 10.3733 25 10.8333V11.6667H25.8333C28.1342 11.6667 30 13.5325 30 15.8333ZM30 24.1667C30 27.3833 27.3825 30 24.1667 30C20.9508 30 18.3333 27.3833 18.3333 24.1667C18.3333 20.95 20.9508 18.3333 24.1667 18.3333C27.3825 18.3333 30 20.95 30 24.1667ZM25.8333 24.655L25 23.8217V22.5C25 22.04 24.6267 21.6667 24.1667 21.6667C23.7067 21.6667 23.3333 22.04 23.3333 22.5V24.1667C23.3333 24.3875 23.4208 24.6 23.5775 24.7558L24.655 25.8333C24.98 26.1583 25.5083 26.1583 25.8333 25.8333C26.1583 25.5083 26.1583 24.98 25.8333 24.655ZM16.6667 24.1667C16.6667 21.8092 17.7567 19.7083 19.4575 18.3333H10V25.8333C10 28.1342 11.8658 30 14.1667 30H19.4575C17.7567 28.625 16.6667 26.5242 16.6667 24.1667Z"
                            fill="#005097"
                          />
                        </svg>
                      </span>{" "}
                      Verification Overview
                    </div>
                    <div className="mb-3 DetailsBox rounded-10px d-flex gap-2 p-3">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={36}
                          height={36}
                          viewBox="0 0 36 36"
                          fill="none"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width={35}
                            height={35}
                            rx="17.5"
                            fill="white"
                            stroke="#D1D5DB"
                          />
                          <path
                            d="M22.3333 11.3333H22V11C22 10.7348 21.8946 10.4804 21.7071 10.2929C21.5196 10.1054 21.2652 10 21 10C20.7348 10 20.4804 10.1054 20.2929 10.2929C20.1054 10.4804 20 10.7348 20 11V11.3333H16V11C16 10.7348 15.8946 10.4804 15.7071 10.2929C15.5196 10.1054 15.2652 10 15 10C14.7348 10 14.4804 10.1054 14.2929 10.2929C14.1054 10.4804 14 10.7348 14 11V11.3333H13.6667C12.6942 11.3333 11.7616 11.7196 11.0739 12.4073C10.3863 13.0949 10 14.0275 10 15V22.3333C10 23.3058 10.3863 24.2384 11.0739 24.9261C11.7616 25.6137 12.6942 26 13.6667 26H22.3333C23.3058 26 24.2384 25.6137 24.9261 24.9261C25.6137 24.2384 26 23.3058 26 22.3333V15C26 14.0275 25.6137 13.0949 24.9261 12.4073C24.2384 11.7196 23.3058 11.3333 22.3333 11.3333ZM22.3333 24H13.6667C13.2246 24 12.8007 23.8244 12.4882 23.5118C12.1756 23.1993 12 22.7754 12 22.3333V16.6667H24V22.3333C24 22.7754 23.8244 23.1993 23.5118 23.5118C23.1993 23.8244 22.7754 24 22.3333 24Z"
                            fill="#005097"
                          />
                        </svg>
                      </span>
                      <div>
                        <div className="opacity-08 pb-1 font-16px"> Verification Date</div>
                        <div className="font-20px font-semibold">
                         
15th December 2025
                        </div>
                      </div>
                    </div>
                    <div className="mb-3 DetailsBox rounded-10px d-flex gap-2 p-3">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={36}
                          height={36}
                          viewBox="0 0 36 36"
                          fill="none"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width={35}
                            height={35}
                            rx="17.5"
                            fill="white"
                            stroke="#D1D5DB"
                          />
                          <path
                            d="M17.9836 9.21191C13.355 9.21191 9.5896 12.9773 9.5896 17.606C9.5896 22.2346 13.355 26 17.9836 26C22.6123 26 26.3777 22.2346 26.3777 17.606C26.3777 12.9773 22.6123 9.21191 17.9836 9.21191ZM19.7324 20.6348C19.6226 20.6985 19.5023 20.7285 19.3833 20.7285C19.1413 20.7285 18.9063 20.6033 18.7769 20.3788L17.3779 17.9557C17.3163 17.8494 17.2841 17.7291 17.2841 17.606V13.4089C17.2841 13.0228 17.5968 12.7094 17.9836 12.7094C18.3705 12.7094 18.6831 13.0228 18.6831 13.4089V17.4185L19.9884 19.6793C20.1815 20.0136 20.0668 20.4417 19.7324 20.6348Z"
                            fill="#005097"
                          />
                        </svg>
                      </span>
                      <div>
                        <div className="opacity-08 pb-1 font-16px">Status</div>
                        <div className="font-20px font-semibold">
                          In Progress
                        </div>
                      </div>
                    </div>
                    <div className="mb-3 DetailsBox rounded-10px d-flex gap-2 p-3">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={36}
                          height={36}
                          viewBox="0 0 36 36"
                          fill="none"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width={35}
                            height={35}
                            rx="17.5"
                            fill="white"
                            stroke="#D1D5DB"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17.3987 26.0882C17.3987 26.0882 11.4827 21.1058 11.4827 16.2032C11.4827 14.4748 12.1693 12.8171 13.3915 11.5949C14.6137 10.3727 16.2714 9.68604 17.9999 9.68604C19.7283 9.68604 21.386 10.3727 22.6082 11.5949C23.8305 12.8171 24.5171 14.4748 24.5171 16.2032C24.5171 21.1058 18.6011 26.0882 18.6011 26.0882C18.272 26.3913 17.7302 26.388 17.3987 26.0882ZM17.9999 19.0545C18.3743 19.0545 18.7451 18.9808 19.091 18.8375C19.4369 18.6942 19.7513 18.4842 20.016 18.2194C20.2808 17.9546 20.4908 17.6403 20.6341 17.2944C20.7774 16.9485 20.8512 16.5777 20.8512 16.2032C20.8512 15.8288 20.7774 15.458 20.6341 15.1121C20.4908 14.7662 20.2808 14.4519 20.016 14.1871C19.7513 13.9223 19.4369 13.7123 19.091 13.569C18.7451 13.4257 18.3743 13.352 17.9999 13.352C17.2437 13.352 16.5184 13.6524 15.9837 14.1871C15.449 14.7218 15.1486 15.447 15.1486 16.2032C15.1486 16.9595 15.449 17.6847 15.9837 18.2194C16.5184 18.7541 17.2437 19.0545 17.9999 19.0545Z"
                            fill="#005097"
                          />
                        </svg>
                      </span>
                      <div>
                        <div className="opacity-08 pb-1 font-16px">Organization
</div>
                        <div className="font-20px font-semibold">
                          Google UX Design Certificate
                        </div>
                      </div>
                    </div>
                    <button className="btn btn-primary w-100 font-20px h-55px">
                      View Verification Report
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
