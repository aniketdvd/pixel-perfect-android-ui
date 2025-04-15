
import { Wifi } from "lucide-react";

const StatusBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-[60px] bg-black text-white flex items-center justify-center gap-2">
      <Wifi className="w-4 h-4" />
      <span className="text-sm">Online</span>
    </div>
  );
};

export default StatusBar;
