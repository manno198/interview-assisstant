
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RoleSelection from "./pages/RoleSelection";
import StudentDashboard from "./pages/student/StudentDashboard";
import EducatorDashboard from "./pages/educator/EducatorDashboard";
import PlaceholderPage from "./pages/placeholder/PlaceholderPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RoleSelection />} />
          
          {/* Student Routes */}
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/student/reports" element={<PlaceholderPage />} />
          <Route path="/student/schedule" element={<PlaceholderPage />} />
          <Route path="/student/profile" element={<PlaceholderPage />} />
          <Route path="/student/practice" element={<PlaceholderPage />} />
          
          {/* Educator Routes */}
          <Route path="/educator/dashboard" element={<EducatorDashboard />} />
          <Route path="/educator/reports" element={<PlaceholderPage />} />
          <Route path="/educator/schedule" element={<PlaceholderPage />} />
          <Route path="/educator/profile" element={<PlaceholderPage />} />
          <Route path="/educator/live" element={<PlaceholderPage />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
