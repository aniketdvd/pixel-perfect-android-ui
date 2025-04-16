import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getAssetUrl } from "@/utils/assetUrl";

const ShelterCard = ({ 
  imageUrl,
  name,
  distance,
  capacity,
  address,
  status,
  onClick
}: { 
  imageUrl: string;
  name: string;
  distance: string;
  capacity: string;
  address: string;
  status: string;
  onClick: () => void;
}) => (
  <div
    onClick={onClick}
    className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm"
  >
    <img
      src={imageUrl}
      alt={name}
      className="w-20 h-20 rounded-xl object-cover"
    />
    <div className="flex-1">
      <h3 className="text-gray-900 font-semibold">{name}</h3>
      <p className="text-gray-600 text-sm">{address}</p>
      <div className="flex items-center gap-4 mt-2">
        <span className="text-gray-600 text-sm">{distance}</span>
        <span className="text-gray-600 text-sm">{capacity}</span>
        <span className="text-[#25D366] text-sm">{status}</span>
      </div>
    </div>
  </div>
);

const SheltersPage = () => {
  const navigate = useNavigate();

  const shelters = [
    {
      id: 1,
      name: "Community Center Shelter",
      distance: "1.2 km",
      capacity: "120/150",
      imageUrl: getAssetUrl("/shelter-1.png"),
      address: "123 Main St, City",
      status: "Available",
    },
    {
      id: 2,
      name: "School Gymnasium",
      distance: "0.8 km",
      capacity: "85/100",
      imageUrl: getAssetUrl("/shelter-2.png"),
      address: "456 Park Ave, City",
      status: "Available",
    },
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