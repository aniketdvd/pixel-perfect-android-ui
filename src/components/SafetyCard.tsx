
import { Check } from "lucide-react";

const SafetyCard = () => {
  return (
    <div className="bg-white rounded-t-3xl shadow-lg p-4 absolute bottom-12 left-0 right-0">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center">
          <Check className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-base font-semibold">Low Risk</h2>
          <p className="text-sm text-gray-600">Current Safety Level</p>
        </div>
      </div>
      <div className="space-y-4">
        {[
          "Well-lit area",
          "High foot traffic",
          "Police station nearby"
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-[#25D366] flex items-center justify-center">
              <Check className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SafetyCard;
