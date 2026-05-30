import React from "react";


export default function FeatureCard() {
  return (
    <>
      <div className="">
        <div className="d-flex flex-column gap-3 max-w-650 WelcomeFeature">
          {/* Item 1 */}
          <div className="bg-white rounded-15px shadow-sm p-3 p-md-3 d-flex gap-3 mb-xl-1 line-height-140 ">
          
            <div className="d-flex flex-column justify-content-center">
              <div className="font-24px font-bold text-default mb-1">
                Secure Document Storage
              </div>
              <div className="font-20px text-default line-height-130">
            Keep your credentials organized and protected with encrypted cloud access.
              </div>
            </div>
          </div>
          {/* Item 2 */}
          <div className="bg-white rounded-15px shadow-sm p-3 p-md-3 d-flex gap-3 mb-xl-1">
        
            <div className="d-flex flex-column justify-content-center">
              <div className="font-24px font-bold text-default mb-1">
                Instant Verification
              </div>
              <div className="font-20px text-default line-height-130">
              Easily verify and share professional certificates anytime.
              </div>
            </div>
          </div>
          {/* Item 3 */}
          <div className="bg-white rounded-15px shadow-sm p-3 p-md-3 d-flex gap-3">
          
            <div className="d-flex flex-column justify-content-center">
              <div className="font-24px font-bold text-default mb-1">
                Access Anywhere
              </div>
              <div className="font-20px text-default line-height-130">
                Use your dashboard seamlessly across desktop, tablet and mobile devices.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
