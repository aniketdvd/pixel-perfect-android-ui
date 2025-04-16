import Logo from "@/components/Logo";
import Map from "@/components/Map";
import SafetyCard from "@/components/SafetyCard";
import StatusBar from "@/components/StatusBar";
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getAssetUrl } from "@/utils/assetUrl";

const Index = () => {
  const [searchParams] = useSearchParams();
  const isReturnedFromShelters = searchParams.get('unsafe') === 'true';
  const navigate = useNavigate();

  // Core state
  const [safetyState, setSafetyState] = useState({
    isSafe: !isReturnedFromShelters,
    contactsNotified: isReturnedFromShelters, // If returning from shelters, contacts were already notified
  });

  // Toast state
  const [toastState, setToastState] = useState({
    show: false,
    isAnimating: false,
    countdown: 10
  });

  // Handle initial unsafe transition
  useEffect(() => {
    // Only start the timer if we're safe and haven't notified contacts
    if (safetyState.isSafe && !safetyState.contactsNotified && !isReturnedFromShelters) {
      const timer = setTimeout(() => {
        setSafetyState(prev => ({ ...prev, isSafe: false }));
        setToastState(prev => ({ ...prev, show: true, isAnimating: true }));
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [safetyState.isSafe, safetyState.contactsNotified, isReturnedFromShelters]);

  // Handle toast countdown
  useEffect(() => {
    if (toastState.show && toastState.countdown > 0) {
      const countdownTimer = setInterval(() => {
        setToastState(prev => ({ ...prev, countdown: prev.countdown - 1 }));
      }, 1000);

      return () => clearInterval(countdownTimer);
    } else if (toastState.countdown === 0) {
      setToastState(prev => ({ ...prev, isAnimating: false }));
      setTimeout(() => {
        setToastState(prev => ({ ...prev, show: false }));
        setSafetyState(prev => ({ ...prev, contactsNotified: true }));
      }, 500);
    }
  }, [toastState.show, toastState.countdown]);

  const dismissToast = () => {
    setToastState(prev => ({ ...prev, isAnimating: false }));
    setTimeout(() => {
      setToastState(prev => ({ ...prev, show: false }));
      setSafetyState(prev => ({ ...prev, contactsNotified: true }));
    }, 500);
  };

  return (
    <div className="h-screen relative">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-10 p-4 flex justify-between items-center bg-white">
        <Logo />
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
            src={getAssetUrl("/lovable-uploads/c3266c61-47c1-4f9c-ac13-31db016bc651.png")}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Safety Banner */}
      <div className={`fixed top-[72px] left-0 right-0 z-10 ${safetyState.isSafe ? 'bg-[#25D366]' : 'bg-[#DD0F37]'} py-3`}>
        <h2 className="text-white text-base text-center font-medium">
          {safetyState.isSafe ? "You're in a Safe Zone" : "You're in an Unsafe Zone"}
        </h2>
      </div>

      {/* Toast Notification */}
      {toastState.show && !safetyState.contactsNotified && (
        <div 
          className={`
            fixed left-4 right-4 z-10
            flex justify-between items-center
            p-4 rounded-xl bg-white
            shadow-[0px_246px_69px_0px_rgba(0,_0,_0,_0.00),_0px_158px_63px_0px_rgba(0,_0,_0,_0.01),_0px_89px_53px_0px_rgba(0,_0,_0,_0.05),_0px_39px_39px_0px_rgba(0,_0,_0,_0.09),_0px_10px_22px_0px_rgba(0,_0,_0,_0.10)]
            transition-all duration-500 ease-in-out
            ${toastState.isAnimating ? 'translate-y-[136px] opacity-100' : '-translate-y-full opacity-0'}
          `}
        >
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-700">Notifying starred contacts in {toastState.countdown}s...</span>
          </div>
          <button 
            onClick={dismissToast}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* Map */}
      <Map />

      {/* Safety Card */}
      {safetyState.isSafe ? (
        <SafetyCard />
      ) : (
        <div className="fixed bottom-[72px] left-4 right-4">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-[#DD0F37] rounded-full flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">High Risk</h3>
                <p className="text-gray-600">Landslide Prone Area</p>
              </div>
            </div>
            <button 
              onClick={() => navigate('/shelters?unsafe=true')}
              className="w-full bg-[#DD0F37] text-white py-4 rounded-xl font-medium"
            >
              Find Shelter Near Me
            </button>
          </div>
        </div>
      )}

      {/* Status Bar */}
      <StatusBar />
    </div>
  );
};

export default Index;
