import Logo from "@/components/Logo";
import Map from "@/components/Map";
import SafetyCard from "@/components/SafetyCard";
import StatusBar from "@/components/StatusBar";

const Index = () => {
  return (
    <div className="h-screen relative">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-10 p-4 flex justify-between items-center bg-white">
        <Logo />
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
            src="/lovable-uploads/c3266c61-47c1-4f9c-ac13-31db016bc651.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Safety Banner */}
      <div className="fixed top-[72px] left-0 right-0 z-10 bg-[#25D366] py-3">
        <h2 className="text-white text-base text-center font-medium">
          You're in a Safe Zone
        </h2>
      </div>

      {/* Map */}
      <Map />

      {/* Safety Card */}
      <SafetyCard />

      {/* Status Bar */}
      <StatusBar />
    </div>
  );
};

export default Index;
