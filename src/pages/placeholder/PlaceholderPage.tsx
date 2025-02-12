
import { useLocation } from "react-router-dom";
import Navbar from "@/components/navigation/Navbar";
import ReportViewer from "@/components/reports/ReportViewer";

const PlaceholderPage = () => {
  const location = useLocation();
  const path = location.pathname.split("/").pop();
  const title = path?.charAt(0).toUpperCase() + path?.slice(1);
  const isReportsPage = path === "reports";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container py-8 animate-fade-up">
        {isReportsPage ? (
          <>
            <div className="space-y-2 mb-8">
              <h1 className="text-3xl font-bold text-white">{title}</h1>
              <p className="text-white/70">
                Review and analyze interview performance reports
              </p>
            </div>
            <ReportViewer />
          </>
        ) : (
          <div className="glass-card p-8 text-center">
            <h1 className="text-3xl font-bold text-white mb-4">{title}</h1>
            <p className="text-white/70">
              This page is under construction. Check back soon for updates!
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default PlaceholderPage;
