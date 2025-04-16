import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SafetyConfirmationPage = () => {
  const navigate = useNavigate();

  const handleSafetyConfirm = () => {
    navigate('/');  // Navigate back to initial state
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Check Icon */}
        <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center mb-6">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Title and Subtitle */}
        <h1 className="text-[24px] font-semibold text-center mb-2">Confirm Your Safety</h1>
        <p className="text-gray-600 text-center">Please confirm that you've reached a safe location</p>
      </div>

      {/* Bottom Section */}
      <div className="w-full mt-auto">
        {/* Buttons Container */}
        <div className="flex flex-col px-6 py-6 gap-2">
          {/* Primary Button */}
          <button 
            onClick={handleSafetyConfirm}
            className="w-full bg-[#25D366] text-white font-medium py-4 px-4 rounded-2xl"
          >
            I've Reached Safely
          </button>

          {/* Secondary Buttons */}
          <button className="w-full bg-gray-50 text-gray-900 font-medium py-4 px-4 rounded-2xl flex items-center justify-center gap-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 8.333a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM15.833 4.167h-5M15.833 7.5h-5M17.5 12.5H2.5a.833.833 0 00-.833.833v3.334c0 .46.373.833.833.833h15a.833.833 0 00.833-.833v-3.334a.833.833 0 00-.833-.833z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Notify Starred Contacts
          </button>

          <button className="w-full bg-gray-50 text-gray-900 font-medium py-4 px-4 rounded-2xl flex items-center justify-center gap-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15.833 8.333V15a.833.833 0 01-.833.833H5a.833.833 0 01-.833-.833V8.333M16.667 5H3.333C2.873 5 2.5 5.373 2.5 5.833v1.667c0 .46.373.833.833.833h13.334c.46 0 .833-.373.833-.833V5.833C17.5 5.373 17.127 5 16.667 5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Contact Authorities
          </button>
        </div>

        {/* Footer Text */}
        <p className="text-gray-500 text-sm text-center pb-8 px-8">
          Your location and timestamp will be automatically shared when marking as safe
        </p>
      </div>
    </div>
  );
};

export default SafetyConfirmationPage; 