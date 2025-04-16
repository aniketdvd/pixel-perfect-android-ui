import { Check } from "lucide-react";

const SafetyCard = () => {
  return (
    <div className="fixed bottom-[72px] left-4 right-4">
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-[#E6F7ED] rounded-full flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-[#25D366]" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Low Risk</h3>
            <p className="text-gray-600">Current Safety Level</p>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-[#25D366]">Well-lit area</p>
          <p className="text-[#25D366]">High foot traffic</p>
          <p className="text-[#25D366]">Police station nearby</p>
        </div>
      </div>
    </div>
  );
};

export default SafetyCard;
