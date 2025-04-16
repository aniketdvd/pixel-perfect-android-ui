import { Wifi } from "lucide-react";

const StatusBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 py-4">
      <div className="flex items-center justify-center">
        <div className="w-32 h-1 bg-gray-200 rounded-full" />
      </div>
    </div>
  );
};

export default StatusBar;
