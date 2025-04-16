import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Welcome from './pages/onboarding/Welcome';
import Login from './pages/onboarding/Login';
import VerifyOTP from './pages/onboarding/VerifyOTP';
import SelectLanguage from './pages/onboarding/SelectLanguage';
import AddContacts from './pages/onboarding/AddContacts';
import AllowLocation from './pages/onboarding/AllowLocation';
import MapView from './pages/MapView';
import SheltersPage from './pages/shelters';
import ShelterDetailsPage from './pages/shelter-details';
import SafetyConfirmationPage from './pages/safety-confirmation';

// Import and initialize i18n
import './i18n';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router basename="/pixel-perfect-android-ui">
          <Routes>
            {/* Onboarding Flow */}
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/verify-otp" element={<VerifyOTP />} />
            <Route path="/select-language" element={<SelectLanguage />} />
            <Route path="/add-contacts" element={<AddContacts />} />
            <Route path="/allow-location" element={<AllowLocation />} />

            {/* Main App */}
            <Route path="/home" element={<MapView />} />
            <Route path="/home/shelters" element={<SheltersPage />} />
            <Route path="/home/shelter-details" element={<ShelterDetailsPage />} />
            <Route path="/home/safety-confirmation" element={<SafetyConfirmationPage />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
