import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ShelterCard = ({ 
  imageUrl, 
  name, 
  distance, 
  duration,
  onClick
}: { 
  imageUrl: string; 
  name: string; 
  distance: string; 
  duration: string;
  onClick: () => void;
}) => (
  <div 
    className="flex flex-col items-start self-stretch bg-[#F3F4F6] rounded-xl mb-4 cursor-pointer"
    onClick={onClick}
  >
    <div className="relative w-full">
      <img 
        src={imageUrl} 
        alt={name}
        className="w-full h-[200px] object-cover rounded-t-xl"
      />
      <div className="absolute top-4 right-4 py-1 px-3 bg-white rounded-full flex items-center gap-2">
        <div className="w-2 h-2 bg-[#25D366] rounded-full" />
        <span className="text-sm">Safe to travel</span>
      </div>
    </div>
    <div className="p-4 w-full">
      <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
      <div className="flex items-center gap-2 mt-1">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M12.5 10C12.5 11.3807 11.3807 12.5 10 12.5C8.61929 12.5 7.5 11.3807 7.5 10C7.5 8.61929 8.61929 7.5 10 7.5C11.3807 7.5 12.5 8.61929 12.5 10Z" stroke="#71717A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 17.5C10 17.5 15 12.5 15 9.28571C15 6.07142 12.7614 3.75 10 3.75C7.23858 3.75 5 6.07142 5 9.28571C5 12.5 10 17.5 10 17.5Z" stroke="#71717A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-gray-600">{distance} • {duration}</span>
      </div>
    </div>
  </div>
);

const SheltersPage = () => {
  const navigate = useNavigate();

  const shelters = [
    {
      imageUrl: "/shelter-1.png",
      name: "Thikana Shelter",
      distance: "2.5 km",
      duration: "15 min"
    },
    {
      imageUrl: "/shelter-2.png",
      name: "Thikana Shelter",
      distance: "2.5 km",
      duration: "15 min"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-10 bg-white p-4 flex items-center gap-4">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-semibold">Shelters near you</h1>
      </div>

      {/* Shelter Cards */}
      <div className="pt-[72px] px-4 pb-4">
        {shelters.map((shelter, index) => (
          <ShelterCard
            key={index}
            {...shelter}
            onClick={() => navigate('/shelter-details')}
          />
        ))}
      </div>
    </div>
  );
};

export default SheltersPage; 