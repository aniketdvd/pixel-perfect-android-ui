import { useNavigate } from "react-router-dom";
import { MapPin, ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

const AllowLocation = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleAllowLocation = () => {
    // Request location permission
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {
          // On success, navigate to main app
          navigate('/home', { replace: true }); // Using replace to prevent going back to onboarding
        },
        (error) => {
          console.error('Error getting location:', error);
          // Still navigate to main app even if permission denied
          navigate('/home', { replace: true });
        }
      );
    } else {
      // If geolocation is not supported, still navigate
      navigate('/home', { replace: true });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Back Button Container */}
      <div className="flex items-center gap-1 p-4 self-stretch">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
      </div>

      {/* Illustration and Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        {/* Location Icon */}
        <div className="w-20 h-20 bg-[#E6F7ED] rounded-full flex items-center justify-center mb-8">
          <MapPin className="w-10 h-10 text-[#25D366]" />
        </div>

        {/* Text Content */}
        <h1 className="text-2xl font-semibold text-center mb-4">
          {t('onboarding.location.title')}
        </h1>
        <p className="text-gray-600 text-center mb-8">
          {t('onboarding.location.description')}
        </p>

        {/* Permission Buttons */}
        <div className="w-full space-y-3">
          <button
            onClick={handleAllowLocation}
            className="w-full bg-[#25D366] text-white font-medium py-4 rounded-2xl"
          >
            {t('onboarding.location.allow')}
          </button>
          <button
            onClick={() => navigate('/home', { replace: true })}
            className="w-full border border-gray-200 text-gray-900 font-medium py-4 rounded-2xl"
          >
            {t('onboarding.location.skip')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllowLocation; 