
import { Check } from "lucide-react";

const SafetyCard = () => {
  return (
    <div className="fixed bottom-[60px] left-0 right-0 px-4 pb-4">
      <div className="flex flex-col items-start gap-4 self-stretch rounded-xl bg-white p-6 shadow-[0px_246px_69px_0px_rgba(0,_0,_0,_0.00),_0px_158px_63px_0px_rgba(0,_0,_0,_0.01),_0px_89px_53px_0px_rgba(0,_0,_0,_0.05),_0px_39px_39px_0px_rgba(0,_0,_0,_0.09),_0px_10px_22px_0px_rgba(0,_0,_0,_0.10)]">
        <div className="flex items-center gap-4 w-full">
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
    </div>
  );
};

export default SafetyCard;
