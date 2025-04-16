import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Map from "@/components/Map";
import { useState, useEffect } from "react";

const RouteStep = ({ 
  icon, 
  title, 
  subtitle,
  isHighlighted
}: { 
  icon: React.ReactNode; 
  title: string; 
  subtitle: string;
  isHighlighted: boolean;
}) => (
  <div className={`flex items-start gap-4 py-4 rounded-xl transition-all duration-300 ${isHighlighted ? 'outline outline-[2.5px] outline-[#0066FF]' : ''}`}>
    <div className="w-6 h-6 flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="text-gray-900 text-base font-medium">{title}</h3>
      <p className="text-gray-600 text-sm">{subtitle}</p>
    </div>
  </div>
);

const ShelterDetailsPage = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const totalSteps = 4;

  // Map animation state
  const [isMapAnimating, setIsMapAnimating] = useState(false);

  useEffect(() => {
    // Start map animation after a short delay
    setTimeout(() => {
      setIsMapAnimating(true);
    }, 500);

    // Navigate to safety confirmation after 6 seconds
    const timer = setTimeout(() => {
      navigate('/safety-confirmation');
    }, 6000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

  // Steps animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((current) => {
        if (current >= totalSteps - 1) {
          return 0;
        }
        return current + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 8l-4 4 4 4M8 12h8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Start from current location",
      subtitle: "Current location"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Turn right onto Main Street",
      subtitle: "200m"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Continue straight past the gas station",
      subtitle: "400m"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 12l2 2 4-4" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Arrive at Community Shelter",
      subtitle: "Destination"
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-20 bg-white p-4 flex items-center gap-4">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-semibold">Thikana Shelter</h1>
      </div>

      {/* Map Container */}
      <div className="w-full h-[400px] pt-[72px]">
        <div className="relative w-full h-full">
          <Map />
          <div className="absolute bottom-4 right-4 bg-white px-2 py-1 rounded text-sm z-10">
            500m
          </div>
        </div>
      </div>

      {/* Route Details */}
      <div className="bg-white flex-1">
        {/* Route Summary */}
        <div className="flex flex-col items-start gap-[10px] self-stretch px-5 py-4 border-b border-black/10">
          <h2 className="text-2xl font-bold">Safest Route to Shelter</h2>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 4v1M12 19v1M4 12h1m14 0h1M6.3 6.3l.7.7m10-1.4l-.7.7m0 10l.7.7M7 17.7l-.7-.7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="text-base">12 min</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 20l-5-5 5-5M4 15h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-base">0.8 km</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#25D366] rounded-full" />
              <span className="text-base">Safe Route</span>
            </div>
          </div>
        </div>

        {/* Route Steps */}
        <div className="px-4 border-t border-gray-200">
          {steps.map((step, index) => (
            <RouteStep
              key={index}
              {...step}
              isHighlighted={activeStep === index}
            />
          ))}
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="fixed bottom-0 left-0 right-0 z-20 bg-[#DD0F37] p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="text-white">
            <div className="text-base font-semibold">Emergency Contact</div>
            <div className="text-2xl font-bold">990</div>
          </div>
        </div>
        <button className="bg-white text-[#DD0F37] px-6 py-3 rounded-xl font-semibold">
          Call Now
        </button>
      </div>
    </div>
  );
};

export default ShelterDetailsPage; 