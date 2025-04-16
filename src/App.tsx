import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SheltersPage from './pages/shelters';
import ShelterDetailsPage from './pages/shelter-details';
import SafetyConfirmationPage from './pages/safety-confirmation';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router basename="/pixel-perfect-android-ui">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shelters" element={<SheltersPage />} />
          <Route path="/shelter-details" element={<ShelterDetailsPage />} />
          <Route path="/safety-confirmation" element={<SafetyConfirmationPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
